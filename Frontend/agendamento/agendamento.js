const urlFetch = 'http://localhost:3000';
const form = document.querySelector("#agendamento");
const agendamento = document.querySelector("#agendamentoCliente")

const getAutomovelPorIdDoCliente = async (id) => {
  const response = await fetch(urlFetch + '/automovel/cliente/' + id);
  const automovel = await response.json();
  return automovel[0];
}
const getAllServicos = async () => {
  const response = await fetch(urlFetch + '/servico');
  const servicos = await response.json();
  return servicos;
}

const popularSelectServicos = async () => {
  const servicos = await getAllServicos();
  const selectServicos = document.querySelector("#servico-id");
  servicos.forEach(servico => {
    const option = document.createElement('option');
    option.value = servico.id;
    option.text = servico.nome;
    selectServicos.appendChild(option);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const automovel = await getAutomovelPorIdDoCliente(localStorage.getItem('[lavarapido-id]'));
  const clienteId = localStorage.getItem('[lavarapido-id]');
  const servicoId = document.querySelector("#servico-id");
  const valorTotal = document.querySelector("#valor-total");
  const horarioInicio = document.querySelector("#horario-inicio");
  const horarioTermino = document.querySelector("#horario-termino");

  const body = JSON.stringify({
    clienteId: clienteId,
    automovelId: automovel.id,
    servicoId: servicoId.value,
    valorTotal: valorTotal.value,
    horarioInicio: horarioInicio.value,
    horarioTermino: horarioTermino.value,
  })
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  }
  const responseCadastroAgendamento =
    await fetch(urlFetch + '/agendamento', options)
  const responseFormatada = await responseCadastroAgendamento.json()
  console.log(responseFormatada)
  window.location.reload();
  //window.location.reload()
});

function montarAgendamento(array) {
  array.forEach((item) => {
    let line = document.createElement('tr');
    let clienteId = document.createElement('td');
    let automovelId = document.createElement('td');
    let servicoId = document.createElement('td');
    let valorTotal = document.createElement('td');
    let dataInicio = document.createElement('td');
    let dataTermino = document.createElement('td');
    let deletar = document.createElement('button');
    clienteId.innerHTML = `${item.clienteId}`;
    automovelId.innerHTML = `${item.automovelId}`;
    servicoId.innerHTML = `${item.servicoId}`;
    valorTotal.innerHTML = `R$ ${Intl.NumberFormat().format(item.valorTotal)}`;
    const opcoesData = { day: 'numeric', month: 'numeric', year: 'numeric' };
    dataInicio.innerHTML = new Date(item.horarioInicio).toLocaleDateString('pt-BR', opcoesData);
    dataTermino.innerHTML = new Date(item.horarioTermino).toLocaleDateString('pt-BR', opcoesData);
    deletar.setAttribute('onclick', `deletarAgendamento('${item.id}')`);
    deletar.innerHTML = 'Delete';
    line.appendChild(clienteId);
    line.appendChild(automovelId);
    line.appendChild(servicoId);
    line.appendChild(valorTotal);
    line.appendChild(dataInicio);
    line.appendChild(dataTermino);
    line.appendChild(deletar);

    agendamento.appendChild(line);
  });
}

function deletarAgendamento(i) {
  if (confirm('Deseja deletar o agendamento'))
    fetch(urlFetch + '/agendamento/' + i, { method: 'DELETE' })
      .then(resp => resp.status)
      .then(resp => {
        if (resp == 204) window.location.reload()
        else alert('Erro ao enviar os dados')
      })
}

const init = async () => {
  popularSelectServicos();
  const clienteInput = document.querySelector("#cliente");
  clienteInput.value = localStorage.getItem('[lavarapido-nome]');
  const automovel = await getAutomovelPorIdDoCliente(localStorage.getItem('[lavarapido-id]'));
  const automovelInput = document.querySelector("#automovel");
  automovelInput.value = automovel.placa;
  const agendamentos = await obterAgendamentos(); // Substitua obterAgendamentos pela função apropriada que retorna os agendamentos
  montarAgendamento(agendamentos);
}

init();

const obterAgendamentos = async () => {
  const response = await fetch(urlFetch + '/agendamento');
  const agendamentos = await response.json();
  return agendamentos;
}