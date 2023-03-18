const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"

// const getCharDetail = (req, res) => {
//   const { detailId } = req.params;
//   axios(URL + detailId)
//     .then((response) => {
//       const character = {
//         image: response.data.image,
//         name: response.data.name,
//         gender: response.data.gender,
//         species: response.data.species,
//         status: response.dtada.status,
//         origin: response.data.origin.name,
//         id: response.data.id
//       };
//       return res.status(200), json(character);
//     })
//     .catch((err) => res.status(500).json("no se encontro el personaje"));
// };
async function getCharDetail(req, res) {
  try {
    const { detailId } = req.params;
    const response = await axios(`${URL}/${detailId}`);
    const character = {
      image: response.data.image,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin: response.data.origin,
      id: response.data.id,
    };
    return res.status(200).json(character);
  } catch (error) {
    res.status(500).send("no se encontro el personaje");
  }
}
module.exports = {
  getCharDetail,
};
