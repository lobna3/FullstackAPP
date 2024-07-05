// Define and export the sequelize model that represents the table Talents.

module.exports = (sequelize, DataTypes) => {
  const Talents = sequelize.define("talents", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    delivery: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    freelancer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }

  });

  return Talents;
};