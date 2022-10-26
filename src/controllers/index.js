const Agroinsumos = require("../models/Agroinsumos");
async function createRelevamiento(req, res) {
  try {
    let agroinsumo = await Agroinsumos.create({
      funcionamiento_ap: true,
    });
    console.log(agroinsumo);
    res.status(200).send(agroinsumo);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "error", error });
  }
}

module.exports = {
  createRelevamiento,
};
