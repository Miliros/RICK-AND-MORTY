const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, species, gender, image } = req.body;
  try {
    if (id && name && species && gender && image) {
      const fav = await Favorite.create({
        id,
        name,
        species,
        gender,
        image,
        checkFav: true,
      });
      res.status(200).json(fav);
    } else {
      res.status(401).json({ message: "ERROR: Faltan datos." });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postFav };
