const routes = require("express").Router();
const database = require("./database");

routes.get("/movies", async (req, res) => {
  const countries = await database.getCountries();
  res.send(countries);
});

module.exports = routes;
