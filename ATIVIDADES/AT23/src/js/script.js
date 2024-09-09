var liguagens = Array();
liguagens[0] = 'Dart';
liguagens[1] = 'PHP';
liguagens[2] = 'Java';
liguagens[3] = 'Pyton';
liguagens[4] = 'Perl';
liguagens[5] = 'Ruby on Rails';
liguagens[6] = 'C ++';

function criaListaLiguagens() {
    const container = document.getElementById('container');
    liguagens.forEach(function (item, index) {
        container.innerHTML += (index) + ' - ' + item + '<br>'
    });
}

function posicaoLiguagens() {
    var indice = prompt('Qual posição da lista deseja consultar?');
    alert(liguagens[indice]);
}

var frutas = ['Maça','Banana','Laranja','Melancia','Manga']

function criaListaFrutas() {
    const container = document.getElementById('containerFrutas');
    frutas.forEach(function (item, index) {
        container.innerHTML += (index) + ' - ' + item + '<br>'
    });
}

function posicaoFrutas() {
    var indice = prompt('Qual posição da lista deseja consultar?');
    alert(frutas[indice]);
}


var notas = [10.0, 5.7, 7.1, 2.5, 6.8, 8.0, 9.2, 3.3, 6.5, 7.6]

function criaListaNotas() {
    const container = document.getElementById('containerNotas');
    notas.forEach(function (item, index) {
        container.innerHTML += (index + 1) + ' - ' + item + '<br>'
    });
}

function verificarNota() {
    var nota = parseInt(prompt("Qual posicao da nota deseja consultar?"));
    var nota = nota - 1;
    
    if (notas[nota] >= 0 & notas[nota] <= 6.9) {
        alert('Posicao da Nota: ' + (nota+1) + ' - ' + 'Nota Reprovativa: ' + notas[nota]);      
    } 
    else if (notas[nota] >= 7 & notas[nota] <= 10) {
        alert('Posicao da Nota: ' + (nota+1) + ' - ' + 'Nota Aprovativa: ' + notas[nota]);
    } 
    else {
        alert('Nota invalida')
    }
}

// SCRIPT  ATIVIDADE BOX

var lista_boxes = [
    { cor: 'red', conteudo: 'Box 1', borda: '10px', tamanho: '3rem' },
    { cor: 'green', conteudo: 'Box 2', borda: '20px', tamanho: '6rem' },
    { cor: 'blue', conteudo: 'Box 3', borda: '30px', tamanho: '12rem' },
    { cor: 'purple', conteudo: 'Box 4', borda: '40px', tamanho: '24rem' },
    { cor: 'black', conteudo: 'Box 5', borda: '50px', tamanho: '16rem' },
    { cor: 'yellow', conteudo: 'Box 6', borda: '60px', tamanho: '10.6rem' },
    { cor: 'orange', conteudo: 'Box 7', borda: '70px', tamanho: '7.1rem' },
];

function criaBox(itemBox) {
    var novaBox = document.createElement('div');
    novaBox.className = 'box';
    novaBox.style.backgroundColor = itemBox.cor;
    novaBox.textContent = itemBox.conteudo;
    novaBox.style.borderRadius = itemBox.borda;
    novaBox.style.width = itemBox.tamanho;
    return novaBox;
}

function listaBox(){
	var containerBox = document.getElementById('containerBox');
	lista_boxes.forEach(function(itemBox) {
      		var box = criaBox(itemBox);
            containerBox.appendChild(box);
    });
}

function mostraPosicao() {
    var boxPosicao = parseInt(prompt('Qual a Box que deseja verificar a cor?'));
    var boxPosicao = boxPosicao - 1;
    alert(`A cor da ${boxPosicao + 1}º Box é ${lista_boxes[boxPosicao].cor}`);
}