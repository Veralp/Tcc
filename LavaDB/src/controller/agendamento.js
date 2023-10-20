const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const agendamento = await prisma.agendamento.create({
            data: data
        });
        return res.status(201).json(agendamento).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const agendamento = await prisma.agendamento.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(agendamento);
        }else{
            const agendamento = await prisma.agendamento.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(agendamento);
        }
    } else {
        const agendamento = await prisma.agendamento.findMany();
        return res.json(agendamento);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        let agendamento = await prisma.agendamento.update({
            data: data,
            where: {
                id: parseInt(id)
            }
        });
        res.status(202).json(agendamento).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let agendamento = await prisma.agendamento.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(agendamento).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};