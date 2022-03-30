const express = require('express');
const Skater = require('../models/skaterModel');
var mongoose = require('mongoose');

const router = express.Router();

router.get( '/', async (req, res) => {
    try {
        const skaters = await Skater.find();
        res.json(skaters);
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const findedSkater = await Skater.findById({ _id: req.params.id });
        res.json(findedSkater);
    } catch (err) {
        return res.status(404).send({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    let dobReq = null;
    let start_dateReq = null;
    let retired_dateReq = null;
    if (req.body.dob) dobReq = new Date(req.body.dob);
    if (req.body.start_date) start_dateReq = new Date(req.body.start_date);
    if (req.body.retired_date) retired_dateReq = new Date(req.body.retired_date);
    const skater = new Skater({
        name: req.body.name,
        gender: req.body.gender,
        country: req.body.country,
        level: req.body.level,
        type: req.body.type,
        dob: dobReq,
        age: req.body.age,
        height: req.body.height,
        profession: req.body.profession,
        coach: req.body.coach,
        start_date: start_dateReq,
        retired_date: retired_dateReq,
        residence: req.body.residence,
        skating_club: req.body.skating_club,
        highest_sp: req.body.highest_sp,
        highest_fs: req.body.highest_fs,
        competitions: req.body.competitions,
        medals: req.body.medals
    })

    try {
        const skaters = await skater.save();
        return res.status(201).send(`Skater added`);
    } catch (err) {
        return res.status(400).send({
            message: err.message
        })
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedSkater = await Skater.remove({ _id: req.params.id });
        return res.status(202).send(`Skater deleted`);
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
            { $set: {
                name: req.body.name,
                gender: req.body.gender,
                country: req.body.country,
                level: req.body.level,
                type: req.body.type,
                dob: new Date (req.body.dob),
                age: req.body.age,
                height: req.body.height,
                profession: req.body.profession,
                coach: req.body.coach,
                start_date: new Date (req.body.start_date),
                retired_date: new Date (req.body.retired_date),
                residence: req.body.residence,
                skating_club: req.body.skating_club,
                highest_sp: req.body.highest_sp,
                highest_fs: req.body.highest_fs,
                competitions: req.body.competitions,
                medals: req.body.medals
            }}
        );
        return res.status(202).send(`Skater updated`);
    } catch (err) {
        return res.status(404).send({
            message: err.message
        })
    }
})

module.exports = router

