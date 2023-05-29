const PORT = 3000;
const app = require("./src/app");
const { conn } = require("./src/DB_connection");

conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
});
