/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_conn:
          "mongodb+srv://ridwannurulhidayat:AurW4bXXQ80lxFzr@cluster0.gxnc4cv.mongodb.net/?retryWrites=true&w=majority",
        mongodb_db: "myblog-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_conn:
        "mongodb+srv://ridwannurulhidayat:AurW4bXXQ80lxFzr@cluster0.gxnc4cv.mongodb.net/?retryWrites=true&w=majority",
      mongodb_db: "myblog",
    },
  };
};
