const PORT = 3000;
const app = require("./src/app");
const { saveApiData } = require("./src/controllers/saveApidata");
const { conn } = require("./src/DB_connection");

conn.sync({ force: true }).then(() => {
  saveApiData();
  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
});
