//função recursiva

const fatorial = (valor) => {
  // Aqui você define quando a recursão deve parar.
  // Se não tivesse isso, a função chamaria a si mesma
  // infinitamente → estouro de pilha (stack overflow).
  if (valor === 0 || valor === 1) {
    return 1; // caso base
  }
  return valor * fatorial(valor - 1); // chamada recursiva
};

// A função vai se chamando com valores menores até
// atingir o caso base.

// Fluxo do cálculo de fatorial(4):

// fatorial(4) → 4 * fatorial(3)

// fatorial(3) → 3 * fatorial(2)

// fatorial(2) → 2 * fatorial(1)

// fatorial(1) → retorna 1 (caso base)

// fatorial(4) = 4 * (3 * (2 * 1))
//             = 4 * 3 * 2 * 1
//             = 24
