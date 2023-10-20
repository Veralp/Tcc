const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcryptjs')


const incriptarSenha = async senha => {
    const saltrounds = 10
    const senhacriptografada = await bcrypt.hash(
        senha, saltrounds
    )
    return (senhacriptografada)
}


const create = async (req, res) => {
    try {
        const data = req.body;
        const cliente = await prisma.cliente.create({
            data: {
                ...data,
                senha: await incriptarSenha(data.senha)
            }
        });
        return res.status(201).json(cliente, automovel).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const login = async (req, res) => {
    try {
        const data = req.body;
        const { email, senha } = data;
        console.log(data);
        const isPasswordCorrect = await verifyPassword(email, senha);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Email ou senha incorretos" }).end();
        }

        const cliente = await prisma.cliente.findFirst({
            where: {
                email: email
            }
        });
        if (cliente)
            return res.status(201).json('Acesso concedido').end();
        else { throw new Error('email incorreto') }
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}



const read = async (req, res) => {
    if (req.params.id) {
        if (!isNaN(req.params.id)) {
            const id = parseInt(req.params.id);
            const cliente = await prisma.cliente.findUnique({
                where: {
                    id: id
                }
            });
            return res.json(cliente);
        }else{
            const cliente = await prisma.cliente.findMany({
                where: {
                    nome: {
                        contains: req.params.id
                    }
                }
            });
            return res.json(cliente);
        }
    } else {
        const cliente = await prisma.cliente.findMany();
        return res.json(cliente);
    }
}


const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.params;
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
        let cliente = await prisma.cliente.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(cliente).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

async function verifyPassword(email, senha) {
    try {
        // Recupere o usuário com base no email
        const cliente = await prisma.cliente.findUnique({ where: { email } });
console.log(cliente);
        if (!cliente) {
            return false; // Usuário não encontrado
            
        }

        // Compare a senha fornecida com o hash de senha armazenado
        const isMatch = await bcrypt.compare(senha, cliente.senha);
        return isMatch;
    } catch (error) {
        throw error;
    }
}




module.exports = {
    read,
    login,
    create,
    update,
    del,
    verifyPassword,
};