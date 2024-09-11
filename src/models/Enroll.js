'use strict';

module.exports = (sequelize, DataTypes) => {
  const enroll = sequelize.define('Enroll', {
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: "enrolls"
  });
  enroll.associate = function (models) {
    enroll.belongsTo(models.Student, { foreignkey: 'id', as: 'students' });
    enroll.belongsTo(models.Course, { foreignkey: "id", as: "courses", });
    enroll.belongsTo(models.Degree, { foreignkey: "id", as: "degrees" });
    enroll.belongsTo(models.Period, { foreignkey: "id",as: "periods" });
  };
  return enroll;
};