const express = require('express');
const router = express.Router();
const ManagerModel = require('../models/manager');
const ContestModel = require('../models/contestant');
const PlayingModel = require('../models/players');
const AdminModel = require('../models/admin')


router.get('/getcountmanager', async (req, res) => {
    try {
        const details = await ManagerModel.countDocuments();
        if (details) {
            res.json(details);
        } else {
            return;
        }
    } catch (err) {
        console.log("Error in count Manager: ", err);
    }
});

router.get('/getcountcontest', async (req, res) => {
    try {
        const details = await ContestModel.countDocuments();
        if (details) {
            res.json(details);
        } else {
            return;
        }
    } catch (err) {
        console.log("Error in count Manager: ", err);
    }
});

router.get('/getcountplayer', async (req, res) => {
    try {
        const details = await PlayingModel.countDocuments();
        if (details) {
            res.json(details);
        } else {
            return;
        }
    } catch (err) {
        console.log("Error in count Manager: ", err);
    }
});

router.post('/verifyadmin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("ca", username)
        const verify = await AdminModel.findOne({ username });
        if (verify) {
            if (verify.password === password) {
                res.json(verify._id);
            }
            else {
                res.json("not");
            }
            return;
        }
        res.json("not");

    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;