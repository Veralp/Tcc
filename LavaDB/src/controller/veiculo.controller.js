const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const veiculo = await prisma.veiculo.create({
            data: data
        });
        return res.status(201).json(veiculo).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const veiculo = await prisma.veiculo.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(veiculo);
        }else{
            const veiculo = await prisma.veiculo.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(veiculo);
        }
    } else {
        const veiculo = await prisma.veiculo.findMany();
        return res.json(veiculo);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        let cliente = await prisma.cliente.update({
            data: data,
            where: {
                id: parseInt(id)
            }
        });
        res.status(202).json(cliente).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let veiculo = await prisma.veiculo.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json('Deletadocom sucesso').end();
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