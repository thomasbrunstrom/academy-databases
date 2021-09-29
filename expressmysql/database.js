const mysql = require("mysql2/promise");

let connection = null;
const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "academy",
      password: "password",
    });
  }
  return connection;
};

const getMovies = async () => {
  try {
    const dbCon = await getConnection();
    const [movies] = await dbCon.query(`
      SELECT movieId, movieName, plot, categoryId, year
      FROM movies
    `);
    return movies;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getMovie = async (movieId) => {
  // Get a specific movie
};

const addMovie = async () => {
  const dbCon = await getConnection();
  await dbCon.query(`INSERT INTO Movies`);
};

const updateMovie = async () => {
  // Update a movie
};

const addCategory = async () => {
  // Add a category
};

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  addCategory,
};
