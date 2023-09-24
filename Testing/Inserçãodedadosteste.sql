INSERT INTO
    cliente (nome, endereco, telefone, email, senha, placa)
VALUES
    (
        'Zé da Manga',
        'Rua das mangas',
        '(11)99955-9944',
        'zemanga@email.com',
        'manga123',
        'MAG-4765'
    );

INSERT INTO
    Servico (nome, descricao, preco)
VALUES
    (
        'Lavagem Simples',
        'Lavagem externa do veículo',
        30.00
    ),
    (
        'Polimento',
        'Polimento da pintura do veículo',
        50.00
    ),
    ('Troca de Óleo', 'Troca de óleo do motor', 40.00),
    (
        'Manutenção de Rodas',
        'Alinhamento e Balanceamento de rodas do veículo',
        60.00
    );

INSERT INTO
    FormaDePagamento (nome)
VALUES
    ('Pagar na Hora'),
    ('Crédito'),
    ('Débito');

INSERT INTO
    Transacao (
        clienteId,
        servicoId,
        formaPagamentoId,
        valorTotal
    )
VALUES
(1, 1, 1, 30.00)
(2, 2, 2, 50.00)
(3, 3, 3, 40.00)
(4, 1, 2, 25.00);
(5, 4, 1, 60.00);
(6, 2, 3, 45.00);