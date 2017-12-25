var express = require('express'),
    router = express.Router();
var wallet = require("../models/wallet");

router.get('/:searchname', function (req, res, next) {
    var condition = { "name": req.params.searchname }
    wallet.find(condition, function (err, data) {
        res.json({ text: "response dari wallet get", params: req.body, data: data });
    })
})

router.get('/', function (req, res, next) {
    var condition = { "name": req.query.name }
    wallet.find(condition, function (err, data) {
        res.json({ text: "response dari wallet get with query", params: req.body, data: data });
    })
})


router.post('/', function (req, res, next) {
    wallet.create(req.body, function (err, data) {
        res.json({ text: "response dari wallet post", params: req.body, data: data });
    })
})


module.exports = router;