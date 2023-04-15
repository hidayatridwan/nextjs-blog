import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ridwan.jpg"
          alt="Logo profile"
          width={300}
          height={300}
        />
      </div>
      <h1>{"Hi, I'm Ridwan"}</h1>
      <p>
        I blog about entire life in this world, when i was baby until old person
      </p>
    </section>
  );
}

export default Hero;
