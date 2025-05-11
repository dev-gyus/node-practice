const express = require('express');
const router = express.Router();
const { User } = require('../models/index');

router.route('/')
    .get(async (req, res, next) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }).post(async (req, res, next) => {
        try {
            const body = req.body;
            const user = await User.create({
                name: body.name,
                age: body.age,
                married: body.married,
                comment: body.comment,
                create_at: Date.now()
            });
            res.redirect('/');
        } catch (err) {
            console.error(err);
            next(err);
        }
    }).delete(async (req, res, next) => {
        try {
            const body = req.body;
            const deleteCount = await User.destroy({
                where: {
                    id: body.id
                }
            });
            res.redirect('/');
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;