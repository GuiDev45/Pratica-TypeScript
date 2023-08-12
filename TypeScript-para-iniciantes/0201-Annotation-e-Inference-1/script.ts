// Isso é inferência, agora produto é do tipo string
const produto: string = "Livro";

// Também sofre inferência, o typescript entende que ao passar o 200, é um number
let preco = 200;

// O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
// preco = "123";

// Dando tipos em objetos
const carroA: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

// Como typescript é inteligente o suficiente para entender que tipo é uma string ou number etc, então não tem necessidade de colocar o tipo no objeto, podendo ser apenas
const carroB = {
  marca: "Audi",
  portas: 5,
};

// O typescript consegue entender antes do runtime, que é a hora que executa, const barato: true | "produto caro" ou seja barato pode ser true OU a string passada, ou um number ou uma função o que quer que seja.
const baratoA = 200 < 400 ? true : "produto caro";

// O tipo 'string | boolean' não pode ser atribuído ao tipo 'boolean'. O tipo 'string' não pode ser atribuído ao tipo 'boolean'.ts(2322), não pode ser atribuido porque existe uma string também, mas caso o tipo string também seja passado, ai seria possível.
// const baratoB: boolean = 200 < 400 ? true : "produto caro";

// const baratoB: string | boolean
const baratoB: boolean | string = 200 < 400 ? true : "produto caro";

function somarA(a: number, b: number) {
  return a + b;
}

// function somar(a: number, b: number): number (+1 overload), significa que a + b me retorna um número.
somarA(4, 10);

// Nenhuma sobrecarga corresponde a esta chamada.
// A sobrecarga 1 de 2, '(a: number, b: number): number', gerou o seguinte erro.
// O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
// A sobrecarga 2 de 2, '(a: number, b: number): number', gerou o seguinte erro.
// O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2769)
// somar("3", "4");

// Usei a inferência para dizer que meu retorno vai ser do tipo string, porém não precisa dizer que é uma string o retorno, o template de string `${a + b}`; já consegue fazer o typescript entender que o retorno vai ser uma string.
function somarB(a: number, b: number): string {
  return `${a + b}`;
}

// function somar(a: number, b: number): number (+1 overload), significa que a + b me retorna um número.
somarB(4, 10);

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
/*
{nome: 'Nintendo', preco: 'R$ 2000'}
nome: "Nintendo"
preco: "R$ 2000"
*/
