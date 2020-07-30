const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(
      `Caught the following error while attempting to connect to db err \n ${err}`
    );
    // Failure status code
    process.exit(1);
  }
};

module.exports = connectDb;
