const idade = 17;
let nome = "Gabriel";
let poodeEntrar = false;

if(idade >= 18 || nome === "Gabriel"){
    poodeEntrar = true
    console.log("Entrou")
} else {
    console.log("Não Entrou")
}



console.log(`Usuario pode entrar: ${poodeEntrar}`);

// = atribuição
// == comparativo
// === comparativo mais preciso comparando o tipo ex 28 != '28'
// || = Ou
// && = E

