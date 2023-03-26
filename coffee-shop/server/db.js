const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1234@redux-trial.6bhjkny.mongodb.net/coffee-db?retryWrites=true&w=majority"
);

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
