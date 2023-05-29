var axios = require("axios");
const { filterData, URL } = require("./getCharById");

const getCharDetail = async (req, res) => {
  const params = req.params;

  try {
    const { data } = await axios.get(`${URL}${params.id}`);
    const obj = filterData(data);

    res.status(200).json({ ...obj, status: data.status, origin: data.origin });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getCharDetail };
