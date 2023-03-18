const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
let favs = require('../utils/favs');



router.get("/onsearch/:id", getCharById)
router.get("/detail/:detailId",getCharDetail)






module.exports = router;