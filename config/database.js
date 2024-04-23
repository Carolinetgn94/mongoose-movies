const mongoose = require("mongoose");

mongoose.set("debug", true);
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);

db.on("connected", function () {
    console.log(`Connected to MongoDB`);
  });