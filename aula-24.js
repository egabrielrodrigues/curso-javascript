// Questão: Dado um número inteiro não negativo n, escreva 
// uma função recursiva para calcular a soma dos números de 1 até n.

// Entrada: Um número inteiro não negativo n (0 <= n <= 100).

// Saída: O valor da soma dos números de 1 até n.
//correção

const soma = (valor) => {
    if (valor < 0 || valor > 100){
        throw new Error('Valor inválido, O programa será encerrado!');
    }
    if (valor === 0) {
        return 0;
    }
    return valor + soma(valor - 1)
}

process.stdin.on('data', function(data) {
    try {
        console.log('soma', soma(Number(data)))
    } catch (error) {
        console.log(error)
        process.stdin.pause()
    }
});

// console.log('soma : ', soma(3));