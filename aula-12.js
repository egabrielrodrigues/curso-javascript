// Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos 
// a partir de X, um valor por linha, inclusive o X ser for o caso.

// Entrada
// A entrada será um valor inteiro positivo.

// Saída
// A saída será uma sequência de seis números ímpares.

// Exemplo de EntradaExemplo de Saída

// entrada: 8



// saída:

// 9
// 11
// 13
// 15
// 17
// 19




function exercicio(x) {
    let count = 0;
    while (count < 6) {
        if (x % 2 !== 0) { // se for ímpar
            console.log(x);
            count++;
        }
        x++; // incrementa para o próximo número
    }
}

// Exemplo com entrada 8
exercicio(8);