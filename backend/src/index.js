const express = require("express");

const app = express();


app.get('/', (req, res) => {
  return res.jsonp({ hello: "oi" });
})

app.listen(3333);