/* B"H
*/
const express = require('express');
const app = express.Router();
const { requireAuth } = require('../models/auth');

const userModel = require('../models/user');

const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req, res, next) => {
        userModel.getList()
        .then(users => {
            res.send({ success: true, errors: [], data: users });
        }).catch(next);
    })
    .get('/handle/:handle', (req, res, next) => {
        userModel.getByHandle(req.params.handle)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .get('/:id', (req, res, next) => {
        userModel.get(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        userModel.create(req.body)
        .then(user => {
            res.status(CREATED_STATUS).send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .delete('/:id', requireAuth, (req, res, next) => {

        userModel.remove(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
        //const user = userModel.remove(req.params.id);
        //res.send({ success: true, errors: [], data: user });

    })
    .patch('/:id', (req, res, next) => {

        userModel.update(req.params.id, req.body )
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);

    })
    .post('/login', (req, res, next) => {
        userModel.login(req.body.email, req.body.password)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .post('/seed', (req, res, next) => {
        userModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })



module.exports = app;