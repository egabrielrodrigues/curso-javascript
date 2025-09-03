// Declaração de strings
const mensagem = "Eliabe Gabriel rodrigues da Silva ";
const mensagem2 = "Seja Bem Vindo!";

// Retorna a quantidade de caracteres da string
console.log(mensagem.length); // 36 (incluindo espaços)

// Concatenando strings usando concat()
console.log("com concat: ", mensagem.concat(mensagem2));

// Concatenando strings usando operador +
console.log("com +: ", mensagem + mensagem2);

// Retorna uma parte da string a partir do índice 5 até o final
console.log(mensagem.substring(5)); // " Gabriel rodrigues da Silva "

// Retorna parte da string do índice 5 até o índice 2
// Se o índice inicial for maior que o final, substring inverte automaticamente
console.log(mensagem.substring(5, 2)); // "lia"

// Quebra a string em um array, separando pelos espaços
console.log(mensagem.split(" ")); // ["Eliabe", "Gabriel", "rodrigues", "da", "Silva", ""]

// Converte a string toda para maiúsculas
console.log(mensagem.toUpperCase()); // "ELIABE GABRIEL RODRIGUES DA SILVA "

// Converte a string toda para minúsculas
console.log(mensagem.toLowerCase()); // "eliabe gabriel rodrigues da silva "

// Substitui a primeira ocorrência de 'rodrigues' por 'Santos'
console.log(mensagem.replace("rodrigues", "Santos")); // "Eliabe Gabriel Santos da Silva "
