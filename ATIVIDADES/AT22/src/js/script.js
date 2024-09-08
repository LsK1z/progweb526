myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

function raizQuadadra(arg) {
    var raiz = Math.sqrt(arg);
    var msg = "A raiz quadrada de ";
    alert(msg + arg + ' é ' + raiz);
}
function escreverNumeros() {
    var numero = parseInt(prompt("Insira o número"));

    let numeros = '';
    for (let i = 1; i <= numero; i++) {
        numeros += i + ', ';
    }

    const div = document.getElementById("escreverNum");
    div.innerHTML = numeros;
}
function escreverModal() {
    var mensagem = prompt("Insira o texto");

    const div = document.getElementById("conteudoModal");
    div.innerHTML = mensagem;

    var textoModal = new bootstrap.Modal(document.getElementById('textoModal'));
    textoModal.show();
}

