const controllers = require("../controllers");

const Router = require("express");
const router = Router();

router.get("/", controllers.createRelevamiento);

module.exports = router;
