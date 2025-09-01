//conversão de string

const salario = 1545.4;
console.log("salario: ", salario.toFixed(2));

const salario2 = "1.20";
console.log("salario: ", Number(salario2).toFixed(2));

const salario3 = "13004.8";
let salario3convertido = Number(salario3);
console.log("salario: ", salario3);
console.log(
  "convertido: ",
  salario3convertido.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
);

console.log(
  salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
