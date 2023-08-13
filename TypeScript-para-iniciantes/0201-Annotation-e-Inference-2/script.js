"use strict";
function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}
console.log(normalizarTexto("DeSigN"));

//----------------------------------------------------------------

// Pegando uma referência para o primeiro elemento <input>
const input = document.querySelector("input");

// Recupera o valor associado à chave "total" armazenado na memória local (localStorage)
const total = localStorage.getItem("total");

if (input && total) {
  // Valor recuperado da armazenamento local é atribuído à propriedade value do elemento <input>. Isso significa que, se houver um valor salvo anteriormente, ele será exibido no campo de entrada.
  input.value = total;
  // calcularGanho passando o valor atual do campo de entrada como argumento. Isso é feito para calcular e exibir o ganho total
  calcularGanho(Number(input.value));
}

// Ela pega o elemento <p> usando o método querySelector, calcula o ganho total usando (value + 100 - value * 0.2) e atualiza o conteúdo desse elemento com o resultado do cálculo.
function calcularGanho(value) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

// Sempre que o usuário digita algo no campo de entrada. Ela converte o valor do campo de entrada em um número usando a função Number(), armazena esse valor na armazenamento local com a chave "total" e, em seguida, chama a função calcularGanho para atualizar o cálculo do ganho total
function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

// Adicionado ao elemento <input> para detectar quando o usuário solta uma tecla após pressioná-la. Quando isso acontece, a função totalMudou é chamada para atualizar o cálculo do ganho total
if (input) {
  input.addEventListener("keyup", totalMudou);
}
