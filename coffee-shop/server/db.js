const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const db = mongoose.connection;
// const db = mongoose.connection();

db.on("connected", () => {
  console.log("MongoDB bağlantısı başarıyla sağlandı.");
});

db.on("error", () => {
  console.log("MongoDB Bağlantısı kurulamadı.");
});

// module.exports = db;
module.exports = mongoose;
