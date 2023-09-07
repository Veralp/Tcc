const express = require('express');

const router = express.Router();

const cliente = require('../controller/cliente.controller');
const veiculo = require('../controller/veiculo.controller');
const servico = require('../controller/servico.controller');
const funcionario = require('../controller/funcionario.controller');
const agendamento = require('../controller/agendamento.controller');

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
router.delete('/veiculo/:id', veiculo.del);

router.post('/servico', servico.create);
router.get('/servico', servico.read);
router.get('/servico/:id', servico.read);
router.put('/servico/:id', servico.update);
router.delete('/servico/:id', servico.del);

router.post('/funcionario', funcionario.create);
router.get('/funcionario', funcionario.read);
router.get('/funcionario/:id', funcionario.read);
router.put('/funcionario/:id', funcionario.update);
router.delete('/funcionario/:id', funcionario.del);

router.post('/agendamento', agendamento.create);
router.get('/agendamento', agendamento.read);
router.get('/agendamento/:id', agendamento.read);
router.put('/agendamento/:id', agendamento.update);
router.delete('/agendamento/:id', agendamento.del)

module.exports = router;
