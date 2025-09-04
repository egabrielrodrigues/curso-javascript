//escopo léxico

// Variável definida no escopo global
const idade = 12;

// Arrow function que acessa uma variável externa (idade)
const exibirIdade = () => {
    console.log(idade); // 12
}

// Mesmo idade não estando dentro da função, ela é acessível
exibirIdade(); //12

/*
    Cada função cria um novo escopo.

Um escopo interno tem acesso ao escopo externo, mas o contrário não é verdade.
O acesso às variáveis é definido no momento em que a função é escrita (lexical), 
não no momento em que é executada.
*/

function externa() {
  let msg = "Sou do escopo externo";

  function interna() {
    console.log(msg); // consegue acessar "msg"
  }

  interna();
}

externa(); 
// saída: Sou do escopo externo
// A função interna foi declarada dentro de externa, por isso consegue acessar msg.


// Exemplo 2 — Não existe acesso ao contrário:

function externa() {
  function interna() {
    let segredo = "dentro da interna";
  }

  interna();
  console.log(segredo); // ❌ erro: segredo is not defined
}

externa();
// externa não consegue acessar segredo, porque ele está protegido no escopo da interna.


// Exemplo 3 — Escopo léxico e execução em outro lugar:

let valor = "global";

function fora() {
  let valor = "local";

  function dentro() {
    console.log(valor);
  }

  return dentro;
}

let fn = fora(); 
fn(); // imprime "local"

// Mesmo chamando fn fora da função fora, ele lembra o escopo onde nasceu e imprime "local", não "global".
// Isso é a base para closures.


/*
    ⚡ Resumindo:

Escopo léxico = onde a função foi escrita.

Não importa onde ela é executada.

Cada função “leva” consigo uma mochila de variáveis do lugar onde nasceu.
*/