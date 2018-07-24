'use strict';
const _ = require('lodash');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let photos = [];
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < _.random(1, 50); j++) {
                let pindex = j + 1;
                let aindex = i + 1;
                photos.push({
                    name: `Photo ${pindex}`,
                    description: `Photo ${pindex} of album ${aindex}`,
                    album: aindex,
                    main: j === 0
                })
            }
        }
        return queryInterface.bulkInsert('photos', photos, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('photos', null, {});
    }
};
