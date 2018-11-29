const express = require("express");
const app = express();

app.get("/", (res, req) => {
  console.log("hello world");
});

app.listen(3000, () => console.log("This is port 3000"));
