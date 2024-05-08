// entry=index.js
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const{errorHandler}=require('../server/middleware/errormiddleware')
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/questionroutes"));
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
