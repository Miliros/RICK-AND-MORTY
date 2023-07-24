const axios = require("axios");

const getCharByName = async (req, res) => {
  const { name } = req.query;
  console.log(name);

  try {
    if (name) {
      const responseApi = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name.toLowerCase()}`
      );

      res.status(200).json(responseApi.data);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getCharByName };
