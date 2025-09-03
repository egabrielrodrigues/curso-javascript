function estado(estado) {
  switch (estado) {
    case "SP":
    case "sp":
      console.log("São Paulo");
      break;
    case "RJ":
      console.log("Rio de Janeiro");
      break;
    case "PE":
      console.log("Pernambuco");
      break;

    default:
      console.log("estado Não encontrado");
      break;
  }
}

// console.log(estado("sp"));

// // Função que recebe o nome do estado como parâmetro
// function estado(estado) {
//   // Estrutura switch → compara a variável com vários casos
//   switch (estado) {
//     // Caso o valor seja "SP" ou "sp"
//     case "SP":
//     case "sp":
//       console.log("São Paulo"); // Exibe "São Paulo"
//       break; // Interrompe o switch, não executa os próximos casos

//     // Caso o valor seja "RJ"
//     case "RJ":
//       console.log("Rio de Janeiro");
//       break;

//     // Caso o valor seja "PE"
//     case "PE":
//       console.log("Pernambuco");
//       break;

//     // Caso nenhum dos anteriores seja satisfeito
//     default:
//       console.log("estado Não encontrado");
//       break;
//   }
// }

// // Chama a função passando "sp" como argumento
// console.log(estado("sp")); // Exibe "São Paulo" e undefined, pois a função não retorna nada
