const express = require('express');
const {clientsDb} = require('../utils/db');
const {NotFoundError} = require("../utils/error");

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: clientsDb.getAll(),
        });
    })

    .get('/:id', (req, res) => {
        const client = clientsDb.getOne(req.params.id);

        if(!client){
            throw new NotFoundError();
        }

        res.render('client/one', {
            client,
        });
    })

    .post('/', (req, res) => {
        const id = clientsDb.create(req.body)
        res
            .status(201)
            .render('client/added', {
                name: req.body.name,
                surname: req.body.surname,
                id,
            })
    })

    .put('/:id', (req, res) => {
        clientsDb.update(req.params.id, req.body);
        res.render('client/edited', {
            name: req.body.name,
            surname: req.body.surname,
            id: req.params.id,
        });
    })

    .delete('/:id', (req, res) => {
        const client = clientsDb.getOne(req.params.id);

        if(!client){
            throw new NotFoundError();
        }

        clientsDb.delete(req.params.id);
        res.render('client/deleted', {
            client,
        })
    })

    .get('/form/add', (req, res) => {
        res.render('client/forms/add')
    })

    .get('/form/edit/:id', (req, res) => {
        const client = clientsDb.getOne(req.params.id);

        if(!client){
            throw new NotFoundError();
        }

        res.render('client/forms/edit', {
            client,
        })
    })


module.exports = {
    clientRouter,
}
