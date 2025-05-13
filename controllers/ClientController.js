const client = require('../models/Client')

class ClientController {
    list(req, res) {
        res.status(200).json(client.list());
    }
    create(req, res) {
        let info = client.create(
                        req.body.nombre,
                        req.body.apellido,
                        req.body.dni
                    );
        res.status(200).json(info);
    }
    delete(req, res) {
        client.delete(req.body.id);
        res.status(200).json({ deleted: req.body.id})
    }
    update(req, res) {
        let info = client.update(
                        req.body.id,
                        req.body.nombre,
                        req.body.apellido,
                        req.body.dni
                    );
        res.status(200).json(info);
    }
}

module.exports = new ClientController();