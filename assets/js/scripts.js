document.addEventListener("DOMContentLoaded", function() {
    // Lista de arquivos das atividades
    const atividades = [
        '/AT1/index.html',
        '/AT2/index.html',
        '/AT3/index.html',
        '/AT4/index.html',
        '/AT5/index.html',
        '/AT6/index.html',
        '/AT7/index.html',
        '/AT8/index.html',
        '/AT9/index.html',
        '/AT10/index.html',
        '/AT11/index.html',
        '/AT12/index.html',
        '/AT13/index.html',
        '/AT14/index.html',
        '/AT15/index.html',
        '/AT16/index.html',
        '/AT17/index.html',
        '/AT18/index.html',
        '/AT19/index.html',
    ];

    const atividadesContainer = document.getElementById('atividades-container');

    atividades.forEach((atividade, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.textContent = `ATIVIDADE ${index + 1}`;
        button.onclick = () => window.location.href = `atividades/${atividade}`;
        atividadesContainer.appendChild(button);
    });
});
