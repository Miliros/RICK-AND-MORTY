const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    const fav = await Favorite.destroy({ where: { id } });

    res.status(200).json({ message: "se elimino con exito" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { deleteFav };
