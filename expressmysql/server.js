const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is now listening on ${PORT}`);
});
