import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // store it in database
    const newMessage = {
      email,
      name,
      message,
    };

    const uri = process.env.mongodb_conn;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await client.connect();
      const db = await client.db(process.env.mongodb_db);
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    await client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message.", message: newMessage });
  }
}

export default handler;
