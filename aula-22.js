// Função Async Await


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('PASSOU', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('resultado', resultado)
    await sleep(3000); //espera por 3 seg
    // setTimeout(() => {
    //     console.log("PASSOU TIMEOUT")
    // }, 1000);
    console.log('PASSOU', 3 ** 3);
    console.log('PASSOU', 4 ** 4);
    console.log('PASSOU', 5 ** 5);
}

aguardar();

//---------------------------------------------------------------------

// Quando você coloca a palavra async antes de uma função, 
// automaticamente ela passa a retornar uma Promise.

async function exemplo() {
  return 42;
}
exemplo().then(console.log); // imprime 42

// Ou seja: mesmo que você não escreva Promise, 
// o async já encapsula o retorno dentro de uma.

//---------------------------------------------------------------------

// O que é await?

// Dentro de uma função marcada como async, você pode usar await.
// Ele serve para pausar a execução até que uma Promise termine.

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function teste() {
  console.log("Antes");
  await esperar(2000); // pausa por 2 segundos
  console.log("Depois");
}

// É como se fosse “sincrônico”, mas na prática continua 
// sendo assíncrono (não trava o navegador inteiro, só aquela função).