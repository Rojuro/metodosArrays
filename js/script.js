// 
// Array inicial
let array = ['Maçã', 'Banana', 'Laranja'];

// Função para atualizar a exibição do array
function atualizarArray() {
    document.getElementById('arrayAtual').innerText = JSON.stringify(array);
}

// Métodos de arrays

// push() - Explicação: Adiciona 'Uva' ao final do array.
function pushElement() {
    array.push('Uva');
    atualizarArray();
}

// pop() - Explicação: Remove o último elemento do array.
function popElement() {
    array.pop();
    atualizarArray();
}

// shift() - Explicação: Remove o primeiro elemento do array.
function shiftElement() {
    array.shift();
    atualizarArray();
}

// unshift() - Explicação: Adiciona 'Morango' ao início do array.
function unshiftElement() {
    array.unshift('Morango');
    atualizarArray();
}

// splice() - Explicação: Remove 1 elemento na posição 1.
function spliceElement() {
    array.splice(1, 1); // Remove 1 elemento na posição 1
    atualizarArray();
}

// slice() - Explicação: Cria um novo array com os elementos entre as posições 1 e 3.
function sliceElement() {
    let novoArray = array.slice(1, 3); // Cria um novo array de um intervalo
    alert(Novo array gerado por slice: ${JSON.stringify(novoArray)});
}

// concat() - Explicação: Concatena o array original com outro array.
function concatArrays() {
    let array2 = ['Pera', 'Abacaxi'];
    array = array.concat(array2);
    atualizarArray();
}

// includes() - Explicação: Verifica se o array contém 'Banana'. 
function includesElement() {
    let existe = array.includes('Banana');
    alert(Banana está no array? ${existe});
}

// find() - Explicação: Encontra o primeiro elemento igual a 'Maçã'.
function findElement() {
    let encontrado = array.find(fruta => fruta === 'Maçã');
    alert(Elemento encontrado com find(): ${encontrado});
}

// findIndex() - Explicação: Encontra o índice da 'Banana'.
function findIndexElement() {
    let index = array.findIndex(fruta => fruta === 'Banana');
    alert(Índice encontrado com findIndex(): ${index});
}

// sort() - Explicação: Ordena o array em ordem alfabética.
function sortArray() {
    array.sort();
    atualizarArray();
}

// reverse() - Explicação: Inverte a ordem do array.
function reverseArray() {
    array.reverse();
    atualizarArray();
}

// Atualizar o array ao carregar a página
window.onload = atualizarArray;