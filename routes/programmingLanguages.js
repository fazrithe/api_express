const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

router.get('/', async function(req, res, next) {
    try{
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error programming languages`, err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err){
        console.error('Error Programming', err.message);
        next(err);
    }
});

module.exports = router;