const server = require("./src/server");
const database = require("./src/database");
const Agroinsumos = require("./src/models/Agroinsumos");
const Balanza = require("./src/models/Balanza");
const Camaras = require("./src/models/Camaras");
const Casa_Principal = require("./src/models/Casa_Principal");
const Ex_Agroinsumos = require("./src/models/Ex_Agroinsumos");
const Hangar_Oficina = require("./src/models/Hangar_Oficina");
const Hangar = require("./src/models/Hangar");
const Taller = require("./src/models/Taller");

database.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Listening on port 3001...");
  });
});
