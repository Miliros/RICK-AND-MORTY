const axios = require("axios");
const { Character } = require("../DB_connection");
// const { saveApiData } = require("../controllers/saveApidata");

const getAllChars = async (req, res) => {
  let { page, gender } = req.query;

  try {
    if (gender === undefined) {
      let apiResponse = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      res.status(200).json(apiResponse.data);
    } else {
      let apiResponse = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}${
          gender && `&gender=${gender}`
        }`
      );
      res.status(200).json(apiResponse.data);
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { getAllChars };
