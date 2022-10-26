const server = require("./src/server");
const database = require("./src/database");
const Casa_Principal = require("./src/models/Casa_Principal");

database.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Listening on port 3001...");
    Casa_Principal.create();
  });
});
