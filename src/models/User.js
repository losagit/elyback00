'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User',{
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha:{
          msg: "el nombre solo puede contener letras"
        },
        len:{
          args: [2,255],
          msg:"el nombre tiene que ser minimo 2 caracteres"
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg:"el email tiene que ser un correo valido"
        }
      }
    },
    pwd:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  },{
    tableName: "users"
  });
  user.associate = function(models) {

  };
  return user;
};