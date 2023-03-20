const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = addDays(new Date(), 100);
  let dateformat = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  response.send(dateformat);
});

module.exports = app;
