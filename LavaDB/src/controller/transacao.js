const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const transacao = await prisma.transacao.create({
            data: data
        });
        return res.status(201).json(transacao).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const transacao = await prisma.transacao.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(transacao);
        }else{
            const transacao = await prisma.transacao.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(transacao);
        }
    } else {
        const transacao = await prisma.transacao.findMany();
        return res.json(transacao);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        let transacao = await prisma.transacao.update({
            data: data,
            where: {
                id: parseInt(id)
            }
        });
        res.status(202).json(transacao).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let transacao = await prisma.transacao.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(transacao).end();
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