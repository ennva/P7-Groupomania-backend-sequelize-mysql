'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    jobtitle: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    } 
  });
  User.associate = function (models) {
    //Associations can be define here//
    User.hasMany(models.Message,{
      foreignKey: 'userId',
      as: 'messages', //Sequelize defaults to using the pluralized model name//
      //Un utilisateur peut envoyer plusieurs messages//
    }); 
  };
  
  
  return User;
};