const express = require('express');
const Pair = require('../models/pairModel');
var mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const router = express.Router();

router.get( '/', async (req, res) => {
    try {
        const pair = await Pair.find();
        res.json(pair);
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const findedPair = await Skater.findById({ _id: req.params.id });
        res.json(findedPair);
    } catch (err) {
        return res.status(404).send({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const pairSkater = new Pair({ skater1: ObjectId(req.body.skater1Id), skater2: ObjectId(req.body.skater2Id) });
        await pairSkater.save();
        return res.status(201).send(`Pair added`);
    } catch (err) {
        return res.status(400).send({
            message: err.message
        })
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedSkater = await Pair.remove({ _id: req.params.id });
        return res.status(202).send(`Pair deleted`);
    } catch (err) {
        return res.status(404).send({
            message: err.message
        })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedSkater = await Skater.updateOne(
            { _id: req.params.id },
            { $set: { skater1: ObjectId(req.body.skater1Id), skater2: ObjectId(req.body.skater2Id) }}
        );
        return res.status(202).send(`Skater updated`);
    } catch (err) {
        return res.status(404).send({
            message: err.message
        })
    }
})

module.exports = router

