const axios = require("axios");

const getAllEpisodes = async (req, res) => {
  let { page } = req.query;

  try {
    console.log(page);
    const apiResponse = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { getAllEpisodes };
