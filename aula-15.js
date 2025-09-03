// Matheus estava conversando com a sua noiva via mensagem de texto, 
// quando ela lhe enviou a seguinte mensagem:

// 1-4-3

// Ele não entendeu a mensagem, então ele perguntou o que isso 
// ignificava, e ela respondeu que era 'I Love You" e logo ele 
// percebeu que cada número separado por um ' - ' é a quantidade 
// de caracteres de cada uma das palavras que compõem a frase. 
// Com isso, ele teve a ideia de criar um programa que inserindo 
// determinada frase, ele calcula a quantidade de caracteres de 
// cada uma das palavras e separa os valores por ' - '. Mas ele 
// ainda teve a ideia de que o programa deveria receber várias 
// frases linha por linha e ainda no final da execução do programa, 
// a palavra com a maior quantidade de letras deveria ser exibida.

// Entrada
// A entrada consiste de vários casos de teste. A primeira 
// linha de um caso de teste contém uma 1 ≤ String ≤ 100 
// com uma única palavra ou um conjunto de palavras que 
// formam uma frase. Os casos de teste serão processados 
// quando o número 0 for recebido. Não pode haver mais 
// que um espaço separando cada palavra.

// Saída
// Para cada caso de teste, exiba o número de caracteres 
// de cada palavra que compõe a frase recebida. Separe a 
// quantidade de caracteres de cada palavra por um ' - '. 
// Exiba também a palavra com a maior quantidade de caracteres 
// de todas as frases recebidas.

// Obs: Se possuir palavras com números identicos de caracteres, 
// cosiderar a última recebida.


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let maiorPalavra = "";

rl.on("line", (linha) => {
  if (linha === "0") {
    console.log(`The biggest word: ${maiorPalavra}`);
    rl.close();
    return;
  }

  const palavras = linha.trim().split(/\s+/);

  // Exibe os comprimentos separados por "-"
  console.log(palavras.map(p => p.length).join("-"));

  // Atualiza a maior palavra (última em caso de empate)
  for (const p of palavras) {
    if (p.length >= maiorPalavra.length) {
      maiorPalavra = p;
    }
  }
});



//-------------------------------------------------------------------------------------------------------
// Perfeito, Eliabe! Aqui vai uma explicação detalhada — linha por linha — do script em 
// Node.js (v18.16.1) que lê frases, imprime os comprimentos das palavras e, ao final, 
// mostra a maior palavra (desempatando pela última que apareceu).

// O código (referência)


// O que cada parte faz
// 1) readline e interface de entrada
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// readline é um módulo nativo do Node que facilita ler linha a linha do terminal.

// createInterface conecta a entrada padrão (teclado/pipe, process.stdin) e a saída padrão (console, process.stdout).

// A partir daí, podemos “ouvir” o evento "line" cada vez que o usuário pressiona Enter ou quando chega uma nova linha pelo pipe.

// 2) Acumulador da maior palavra
// let maiorPalavra = "";


// Guarda a maior palavra vista até agora em todas as linhas processadas.

// Começa vazia para que qualquer primeira palavra substitua.

// 3) Loop baseado em eventos: rl.on("line", ...)
// rl.on("line", (linha) => {
//   ...
// });


// Toda vez que chega uma linha, essa callback roda com o conteúdo da linha em linha.

// 4) Condição de parada (“sentinela”)
// if (linha === "0") {
//   console.log(`The biggest word: ${maiorPalavra}`);
//   rl.close();
//   return;
// }


// Se a linha for exatamente "0", paramos:

// Imprime exatamente no formato exigido: The biggest word: <palavra>.

// Fecha a interface (rl.close()), liberando os recursos e encerrando o programa.

// Importante: imprimir nesse ponto garante que sai só uma vez, ao final de tudo.

// 5) Quebra da frase em palavras
// const palavras = linha.trim().split(/\s+/);


// trim() remove espaços extras do começo/fim.

// split(/\s+/) divide por um ou mais espaços em branco (tab, espaço, etc.).
// Isso garante que, se a linha tiver múltiplos espaços, não geramos “palavras vazias”.

// 6) Impressão dos comprimentos
// console.log(palavras.map(p => p.length).join("-"));


// map(p => p.length) transforma cada palavra no seu tamanho.

// join("-") junta tudo com hífen, resultando no formato 1-4-3, por exemplo.

// Essa é a linha de saída por cada frase.

// 7) Atualização da maior palavra (com desempate pela última)
// for (const p of palavras) {
//   if (p.length >= maiorPalavra.length) {
//     maiorPalavra = p;
//   }
// }


// Compara o tamanho de cada p com o da maiorPalavra.

// O uso de >= (e não apenas >) é intencional:

// Se p.length for igual, trocamos mesmo assim, garantindo que a última palavra com 
// aquele tamanho prevaleça (regra do enunciado).

// Ex.: entre “casa” (4) e “vida” (4), se “vida” veio depois, ela fica como maior.

// Por que essa solução funciona bem

// Robusta a múltiplos espaços: o regex /\s+/ evita “palavras vazias”.

// Formato de saída exato: cada linha imprime apenas os comprimentos com - e, ao final, 
// a frase “The biggest word: ...” exatamente como no exemplo.

// Desempate correto: >= garante que a última palavra de maior tamanho é escolhida.

// Fluxo simples: lê até “0”, processa a cada linha, encerra elegantemente.

// Como rodar

// Salve como index.js.

// No terminal:

// node index.js


// Digite as linhas e finalize com 0.

// Também dá para alimentar por arquivo:

// node index.js < entrada.txt

// Observações e limites úteis

// Pontuação conta como caractere** (ex.: amigo! tem 6). Se fosse preciso ignorar 
// pontuação, poderíamos limpar p com um regex antes de medir.

// Acentos/Unicode: length mede code units. Para casos como emojis ou caracteres 
// compostos, o valor pode não bater com “caracteres visuais”. No enunciado clássico 
// (palavras com letras), isso não costuma ser problema.

// Linhas vazias: se chegassem, trim() as torna ""; o split(/\s+/) de uma string 
// azia resulta [""] e imprimiria 0. Como o enunciado não prevê linhas vazias, 
// não afeta — mas dá para ignorar com um if (!linha.trim()) return; se quiser.

// Complexidade

// Tempo: O(n) no total de caracteres lidos (cada caractere é processado poucas vezes).

// Memória: O comprimento da maior linha + a string da maior palavra.

// Se quiser, te mostro uma versão que ignora pontuação antes de medir, ou uma versão 
// em ESM (import) com package.json usando "type": "module". É só falar! 🙂





