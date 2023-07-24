const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail.js");
const { getAllEpisodes } = require("../controllers/getAllEpisodes");
const { getFavs } = require("../controllers/getFavs.js");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav.js");
const { getAllChars } = require("../controllers/getAllChars");
const { Router } = require("express");
const { getCharByName } = require("../controllers/getCharByName");

const router = Router();
router.get("/all", getAllChars);
router.get("/episodes", getAllEpisodes);
router.get("/onsearch/:id", getCharById);
router.get("/charname", getCharByName);
router.get("/detail/:id", getCharDetail);
router.get("/favs", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
