const express = require('express');

const router = express.Router();

const cliente = require('../controller/cliente.controller');
const veiculo = require('../controller/veiculo.controller');

router.get('/', (req, res) => { return res.json("Api Lava Respondendo")});

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente/:id', cliente.update);
router.delete('/cliente/:id', cliente.del);

router.post('/veiculo', veiculo.create);
router.get('/veiculo', veiculo.read);
router.get('/veiculo/:id', veiculo.read);
router.put('/veiculo/:id', veiculo.update);
router.delete('/veiculo:id', veiculo.del);


module.exports = router;
