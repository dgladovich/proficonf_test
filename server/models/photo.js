'use strict';
module.exports = (sequelize, DataTypes) => {
  var photo = sequelize.define('photo', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  photo.associate = function(models) {
    //photo.belongsTo(models.album, {as: 'photos', foreignKey: 'album'});
    // associations can be defined here
  };
  return photo;
};