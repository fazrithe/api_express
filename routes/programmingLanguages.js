const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

router.get('/', async function(req, res, next) {
    try{
        res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error list data users`, err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err){
        console.error('Error create data user', err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next){
    try{
        res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
        console.error('Error update data user', err.message);
        next(err);
    }
});

module.exports = router;