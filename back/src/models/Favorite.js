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
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNull: false,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        alllowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        allowNull: false,
      },
      // status: {
      //   type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      //   allowNull: false,
      // },
      // origin: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    { timestamps: false },
    { timestamps: false, tableName: "favorites" }
  );
};
