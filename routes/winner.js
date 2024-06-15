const express = require('express');
const router = express.Router();
const PlayingModel = require('../models/playing11');
const WinnerModel = require('../models/winner');

router.post('/selectingwinner/:id', async (req, res) => {
    try {
        const { id} = req.params;
        const check = await WinnerModel.findOne({mid:id})
        const find = await PlayingModel.findOne({ mid: id });
        if (check) {
            return res.json("exist");
        } 
        const play = await WinnerModel.create({
            mid: find.mid, 
            pid: find.pid, 
            teamName: find.teamName, 
            teamAbbrevation: find.teamAbbrevation, 
            captain: find.captain, 
            vicecaptain: find.vicecaptain, 
            totalpoints: find.totalpoints});
            res.json("done")
    } catch (err) {
        console.log("Create Playing Team Error: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get('/getwinnerbyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const details = await PlayingModel.findOne({ mid: id });
        if (details) {
            res.json(details);
        }
    } catch (err) {
        console.log("Error in Get Manager Details: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
