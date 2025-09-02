//string:

const mensagem = "Eliabe Gabriel rodrigues da Silva ";
const mensagem2 = "Seja Bem Vindo!"

//verificando quantidade de carateres:
console.log(mensagem.length);

//concatenado string
console.log("com concat: ", mensagem.concat(mensagem2));
console.log("com +: ", mensagem + mensagem2);

// a partir de:
console.log(mensagem.substring(5));
console.log(mensagem.substring(5, 2));

// quebrar em array com split:
console.log(mensagem.split(' '));

//upcase
console.log(mensagem.toUpperCase());

//lowerCase
console.log(mensagem.toLowerCase());

console.log(mensagem.replace('rodrigues', 'Santos'));
