const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const funcionario = await prisma.funcionario.create({
            data: data
        });
        return res.status(201).json(funcionario).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const funcionario = await prisma.funcionario.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(funcionario);
        }else{
            const funcionario = await prisma.funcionario.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(funcionario);
        }
    } else {
        const funcionario = await prisma.funcionario.findMany();
        return res.json(funcionario);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        let funcionario = await prisma.funcionario.update({
            data: data,
            where: {
                id: parseInt(id)
            }
        });
        res.status(202).json(funcionario).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let funcionario = await prisma.funcionario.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(funcionario).end();
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