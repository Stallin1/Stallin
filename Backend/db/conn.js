const mongoose = require("mongoose");

mongoose
   .connect(process.env.DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then(() => {
      console.log("Database Connection successfull");
   })
   .catch((err) => {
      console.log("No connection" + err);
   });
