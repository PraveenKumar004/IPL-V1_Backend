const express = require('express');
const router = express.Router();
const PlayingModel = require('../models/playing11')
const SoldModel = require('../models/soldplayer');
const ContestantModel = require('../models/contestant');

router.post('/addplayingteam/:id/:mid', async (req, res) => {
    try {
        const { id, mid } = req.params;
        const { captain, viceCaptain } = req.body;
        const captainpoint = await SoldModel.findOne({ _id: captain });
        const vicecaptainpoint = await SoldModel.findOne({ _id: viceCaptain });
        const contest = await ContestantModel.findOne({ _id: id });
        const find = await PlayingModel.findOne({ pid: id });
        const total = captainpoint.points + (vicecaptainpoint.points/2) + contest.points
        if (find) {
            console.log("Already Exist");
            res.json("exist");
        } else {
            const play = await PlayingModel.create({
                mid: mid, 
                pid: id, 
                teamName: contest.teamName, 
                teamAbbrevation: contest.teamAbbreviation, 
                captain: captainpoint.name, 
                vicecaptain: vicecaptainpoint.name, 
                totalpoints: total});
                res.json("done")
        }
    } catch (err) {
        console.log("Create Playing Team Error: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get('/getplayingteambypid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const details = await PlayingModel.findOne({ pid: id });
        if (details) {
            res.json(details);
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    } catch (err) {
        console.log("Error in Get Manager Details: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/getplayingteambymid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const details = await PlayingModel.find({ mid: id });
        if (details) {
            res.json(details);
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    } catch (err) {
        console.log("Error in Get Manager Details: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});




module.exports = router;
