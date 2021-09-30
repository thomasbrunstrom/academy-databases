const routes = require("express").Router();
const database = require("./database");

routes.get("/movies", async (req, res) => {
  const countries = await database.getMovies();
  res.send(countries);
});
routes.get("/movie/:id", async (req, res) => {});

routes.post("/movie", async (req, res) => {
  //newData.movieName, newData.plot, newData.categoryId, newData.year
  try {
    console.log(req.body);
    await database.addMovie(req.body);
    res.send("Saved movie");
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "nok" });
  }
});

routes.put("/movie/:id", async (req, res) => {
  try {
    const oldData = await database.getMovie(req.params.id);
    const updateData = req.body;
    const newData = { ...oldData, ...updateData };
    await database.updateMovie(req.params.id, newData);
    res.json({ status: "ok", data: newData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "nok" });
  }
});

//http://localhost:3000/movie/3/lend/5

routes.patch("/movie/:id/lend/:borrowedId/", async (req, res) => {
  try {
    await database.lendMovie(req.params.id, req.params.borrowedId);
    res.send("Ok");
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "nok" });
  }
});
routes.patch("/movie/:id/return/", async (req, res) => {
  try {
    await database.lendMovie(req.params.id, null);
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "nok" });
  }
});

module.exports = routes;
