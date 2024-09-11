'use strict';

module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('Rating',{
    q1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    q2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    q3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    average: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  },{
    tableName: "ratings"
  });
  rating.associate = function(models) {
    rating.belongsTo(models.Unit,{ as: "units" , foreignkey: "id" });
  };
  return rating;
};