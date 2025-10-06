// \\objetos simples:

const jose = {
    idade: 35,
    peso: 80,
    nome: 'josé',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua qualquer',
    numero: 432,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa) => {
    console.log('Dados', pessoa)
}

exibirInformacoes(jose)