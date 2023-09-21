INSERT INTO
    cliente (
        nome,
        endereco,
        numeroTelefone,
        enderecoEmail,
        outrasInformacoesContato
    )
VALUES
    (
        'João da Silva',
        'Rua das Flores, 123',
        '(11) 1234-5678',
        'joao@email.com',
        'segundo andar'
    );

INSERT INTO
    veiculo (marca, modelo, ano, placa, proprietarioId)
VALUES
    ('Ford', 'Fusion', 2020, 'XYZ-1234', 1);
    ('Ford', 'Fusion', 2020, 'XYZ-1234', 1);

INSERT INTO
    Servico (descricaoServico, preco, duracaoEstimada)
VALUES
    ('Lavagem Externa', 30.0, 60),
    ('Polimento', 50.0, 120),
    ('Aspiração Interna', 25.0, 45);

    
INSERT INTO
    FormaPagamento (tipoPagamento, detalhes)
VALUES
    ('Dinheiro', NULL),
    ('Cartão de Crédito', NULL),
    ('Cartão de Débito', NULL);

INSERT INTO
    Agendamento (
        dataHoraAgendamento,
        clienteId,
        veiculoId,
        servicoId

    )
VALUES
    ('2023-09-10 14:30:00.000', 2, 1, 1, 1);