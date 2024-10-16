const { mongoose } = require("mongoose");

const connect_db = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("Db connected");
    })
    .catch((err) => {
      console.log("Db err" + err);
    });
};

module.exports = connect_db;
