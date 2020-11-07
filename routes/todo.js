const express = require('express');
const Ticket = require("../models/ticket");

class Todo {
    constructor() {
        this.app = express()

        this.app.get('/', this.hello)
        this.app.get('/getTickets/', this.getTickets)
        this.app.get('/getTicket/:id', this.getTicket)
        this.app.post('/newTicket', this.newTicket)
        this.app.put('/updateTicket', this.updateTicket)
    }

    hello(req, res) {
        res.json("Hola mundo")
    }

    //Trae todos los tickets
    getTickets(req, res) {
        Ticket.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: "Error al cargar los items"
            })
        })
    }

    //TODO, falta terminar el coso este, no me trae el que yo quiero
    getTicket(req, res) {

    }

    //Perfect, retorna un json
    newTicket(req, res) {
        let item = new Ticket({
            estado: req.body.estado
        });
        item.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(item);
        });
    }

    /*
    {
        "id":"5fa643dfec3fa12d44bc7faa",
        "estado": true
    }
    */
    updateTicket(req, res) {
        Ticket.updateOne({ _id: req.body.id }, { estado: req.body.new_status }).then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error al modificar ticket ' + req.body.id
            })
        })
    }
}

module.exports = new Todo().app;