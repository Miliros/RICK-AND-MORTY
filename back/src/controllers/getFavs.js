const { Favorite } = require("../DB_connection");

const getFavs = async (req, res) => {
  //const { id, name, species, gender, status, image, origin } = req.body;

  try {
    const favs = await Favorite.findAll();
    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getFavs };
