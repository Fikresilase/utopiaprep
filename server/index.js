const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" }, () => {
  const port = process.env.PORT;
});

const port = process.env.PORT || 3000;

const app = express();

app.use('/api/goals',require('./routes/questionroutes'))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
