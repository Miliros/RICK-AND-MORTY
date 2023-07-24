const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // status: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   allowNull: false,
      // },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        alllowNull: false,
      },
      // origin: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   allowNull: false,
      // },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      checkFav: {
        type: DataTypes.BOOLEAN,
      },
    },

    { timestamps: false },
    { timestamps: false, tableName: "favorites" }
  );
};
