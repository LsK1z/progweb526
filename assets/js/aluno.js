document.addEventListener("DOMContentLoaded", function() {
    const atividadesButton = document.getElementById('atividades-button');
    const projetosButton = document.getElementById('projetos-button');
    const boxAluno = document.querySelector('.boxAluno');
    const boxAtividades = document.querySelector('.boxAtividades');
    const boxProjetos = document.querySelector('.boxProjetos');

    function closeAllBoxes() {
        boxAluno.classList.add('hidden');
        boxAtividades.classList.add('hidden', 'collapse');
        boxProjetos.classList.add('hidden', 'collapse');
    }

    atividadesButton.addEventListener('click', function() {
        closeAllBoxes();
        boxAtividades.classList.remove('hidden', 'collapse');
    });

    projetosButton.addEventListener('click', function() {
        closeAllBoxes();
        boxProjetos.classList.remove('hidden', 'collapse');
    });

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
        '/AT20/index.html',
        '/AT21/index.html',
        '/AT22/index.html',
        '/AT23/index.html',
    ];

    const atividadesContainer = document.getElementById('atividades-container');

    atividades.forEach((atividade, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.textContent = `ATIVIDADE ${index + 1}`;
        button.onclick = () => window.location.href = `ATIVIDADES/${atividade}`;
        atividadesContainer.appendChild(button);
    });

    const projetos = [
        '/PJT-01/index.html',
        '/PJT-02/index.html',
        '/PJT-03/index.html',
    ];

    const projetosContainer = document.getElementById('projetos-container');

    projetos.forEach((projeto, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.textContent = `PROJETO ${index + 1}`;
        button.onclick = () => window.location.href = `PROJETOS/${projeto}`;
        projetosContainer.appendChild(button);
    });
});
