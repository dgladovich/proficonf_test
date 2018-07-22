'use strict';
module.exports = (sequelize, DataTypes) => {
  var album = sequelize.define('album', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    album.hasMany(models.photo, {as: 'photos', foreignKey: 'album'})
    // associations can be defined here
  };
  return album;
};