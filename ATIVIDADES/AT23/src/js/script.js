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