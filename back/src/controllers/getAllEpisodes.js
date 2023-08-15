const axios = require("axios");

const getAllEpisodes = async (req, res) => {
  const params = req.params;
  try {
    const apiResponse = await axios.get(
      `https://rickandmortyapi.com/api/episode/${params.id}`
    );
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = { getAllEpisodes };
