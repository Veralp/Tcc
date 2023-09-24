const express = require('express');

const router = express.Router();

const cliente = require('../controller/cliente.controller');
const servico = require('../controller/servico.controller');
const agendamento = require('../controller/agendamento.controller');
const transacao = require('../controller/transacao.controller');

router.get('/', (req, res) => { return res.json("Api Lava Respondendo")});

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente/:id', cliente.update);
router.delete('/cliente/:id', cliente.del);


router.post('/servico', servico.create);
router.get('/servico', servico.read);
router.get('/servico/:id', servico.read);
router.put('/servico/:id', servico.update);
router.delete('/servico/:id', servico.del);


router.post('/agendamento', agendamento.create);
router.get('/agendamento', agendamento.read);
router.get('/agendamento/:id', agendamento.read);
router.put('/agendamento/:id', agendamento.update);
router.delete('/agendamento/:id', agendamento.del)

router.post('/transacao', transacao.create);
router.get('/transacao', transacao.read);
router.get('/transacao/:id', transacao.read);
router.put('/transacao/:id', transacao.update);
router.delete('/transacao/:id', transacao.del)


module.exports = router;
