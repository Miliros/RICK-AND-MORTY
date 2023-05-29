var axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const params = req.params;
  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const obj = filterData(data);
    res.status(200).json(obj);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

function filterData(data) {
  return {
    id: data.id,
    image: data.image,
    name: data.name,
    gender: data.gender,
    species: data.species,
  };
}

module.exports = { getCharById, filterData, URL };
