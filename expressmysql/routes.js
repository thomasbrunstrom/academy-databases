const routes = require("express").Router();
const database = require("./database");

routes.get("/movies", async (req, res) => {
  const countries = await database.getCountries();
  res.send(countries);
});
routes.get("/movie/:id", async (req, res) => {});

module.exports = routes;
