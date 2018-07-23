'use strict';
var express = require('express');
var router = express.Router();
const db = require('../models');
const {photo, album} = db;


router.get('/', function (req, res) {
    let page = 1;
    let offset = 0;
    let itemsPerPage = 10;

    if ( Object.keys(req.query).length !== 0 ) {
        page = req.query.page;
        offset = page * itemsPerPage;
    }
    album
        .count()
        .then(albumsQuantity => {
            let pagesCount = albumsQuantity / itemsPerPage;
            if (pagesCount < 1) {
                pagesCount = 1
            }
            album
                .findAll({limit: itemsPerPage, offset: offset})
                .then(albs => {
                    let albums = albs.map(album => album.toJSON());

                    let response = {
                        pageInfo: {
                            pagesCount: pagesCount,
                            pageNumber: page
                        },
                        items: albums
                    };
                    res.json(response);
                })
                .catch(e => {
                    console.error(e)
                })
        });
});

module.exports = router;
