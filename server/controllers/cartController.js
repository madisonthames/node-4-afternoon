const swag = require('../models/swag');

module.exports = {
    add: function(req, res) {
        const {id} = req.params;
        let {user} = req.session;

        const index = user.cart.findIndex(swag => swag.id == id)

        if (index === -1) {
            const selectedSwag = swag.find(swag => swag.id == id)

            user.cart.push(selectedSwag);
            user.total += selectedSwag.price;
        }
        res.status(200).send(user);
    },
    delete: function(req, res) {
        const {id} = req.params;
        let {user} = req.session;

        const index = user.cart.findIndex(swag => swag.id == id)

        if(index !== -1) {
            user.cart.splice(index, 1);
            user.total -= selectedSwag.price
        }
        res.status(200).send(user);
    },
    checkout: function(req, res) {
        const {user} = req.session;
        user.cart = [];
        user.total = 0;

        res.status(200).sen(user);
    }
}