'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {
      let albums = [];

      for(let i = 0; i < 100; i++){
        albums.push({
            name: `Album ${i + 1}`,
            description: faker.lorem.sentence()
        })
      }

      return queryInterface.bulkInsert('albums', albums, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('albums', null, {});
  }
};
