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
  try {
    const dbCon = await getConnection();
    const [movie] = await dbCon.query(
      `
      SELECT movieId, movieName, plot, categoryId, year
      FROM movies WHERE movieId=?
    `,
      [movieId]
    );
    return movie[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

/*
CREATE TABLE `movies` (
  `movieId` int unsigned NOT NULL AUTO_INCREMENT,
  `movieName` char(32) DEFAULT NULL,
  `plot` text,
  `categoryId` int unsigned DEFAULT NULL,
  `year` datetime NOT NULL,
  PRIMARY KEY (`movieId`),
  KEY `movieId` (`movieId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `moviecategories` (`categoryId`)
)
*/

const addMovie = async (newData) => {
  try {
    const dbCon = await getConnection();
    await dbCon.query(
      `
      INSERT INTO movies (movieName, plot, categoryId, year)
      VALUES (?, ?, ?, ?)
    `,
      [newData.movieName, newData.plot, newData.categoryId, newData.year]
    );
  } catch (error) {
    console.log(error.sqlMessage);
    throw new Error("Database error");
  }
};

const updateMovie = async (movieId, newData) => {
  try {
    const dbCon = await getConnection();
    await dbCon.query(
      `
      UPDATE movies SET movieName = ?, plot = ?, categoryId = ?, year = ?
      WHERE movieId = ?
    `,
      [newData.movieName, newData.plot, newData.categoryId, newData.year, movieId]
    );
  } catch (error) {
    console.log(error.sqlMessage);
    throw new Error("Database error");
  }
};

const lendMovie = async (movieId, borrowerId) => {
  try {
    const dbCon = await getConnection();
    await dbCon.query(
      `
      UPDATE movies SET borrowed = ?
      WHERE movieId = ?
    `,
      [borrowerId, movieId]
    );
  } catch (error) {
    console.log(error.sqlMessage);
    throw new Error("Database error");
  }
};

const addCategory = async () => {
  // Add a category
};

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  addCategory,
  updateMovie,
  lendMovie,
};
