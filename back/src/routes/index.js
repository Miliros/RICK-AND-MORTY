var { getCharById } = require("../controllers/getCharById");
var { getCharDetail } = require("../controllers/getCharDetail.js");
var { addFav, getFavs, deleteFav } = require("../controllers/favController.js");

var { postUser } = require("../controllers/postUser.js");
var { getFavs } = require("../controllers/getFavs.js");
var { postFav } = require("../controllers/postFav.js");
var { deleteFav } = require("../controllers/deleteFav.js");
var { login } = require("../controllers/login.js");
const { Router } = require("express");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", addFav);
router.get("/fav", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

router.get("/login", login);
router.post("/login", postUser);

module.exports = router;
