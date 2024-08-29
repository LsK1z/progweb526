document.addEventListener("DOMContentLoaded", function() {
    const atividadesButton = document.getElementById('atividades-button');
    const projetosButton = document.getElementById('projetos-button');
    const boxAtividades = document.querySelector('.boxAtividades');
    const boxProjetos = document.querySelector('.boxProjetos');

    function closeAllBoxes() {
        boxAtividades.classList.add('collapse');
        boxProjetos.classList.add('collapse');
    }

    atividadesButton.addEventListener('click', function() {
        closeAllBoxes();
        boxAtividades.classList.remove('collapse');
    });

    projetosButton.addEventListener('click', function() {
        closeAllBoxes();
        boxProjetos.classList.remove('collapse');
    });

    const atividades = [
        'ATIVIDADES/AT1/index.html',
        'ATIVIDADES/AT2/index.html',
        'ATIVIDADES/AT3/index.html',
        'ATIVIDADES/AT4/index.html',
        'ATIVIDADES/AT5/index.html',
        'ATIVIDADES/AT6/index.html',
        'ATIVIDADES/AT7/index.html',
        'ATIVIDADES/AT8/index.html',
        'ATIVIDADES/AT9/index.html',
        'ATIVIDADES/AT10/index.html',
        'ATIVIDADES/AT11/index.html',
        'ATIVIDADES/AT12/index.html',
        'ATIVIDADES/AT13/index.html',
        'ATIVIDADES/AT14/index.html',
        'ATIVIDADES/AT15/index.html',
        'ATIVIDADES/AT16/index.html',
        'ATIVIDADES/AT17/index.html',
        'ATIVIDADES/AT18/index.html',
        'ATIVIDADES/AT19/index.html',
        'ATIVIDADES/AT20/index.html',
        'ATIVIDADES/AT21/index.html',
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

    const projetos = [
        'PROJETOS/PJT-01/index.html',
        'PROJETOS/PJT-02/index.html',
    ];

    const projetosContainer = document.getElementById('projetos-container');

    projetos.forEach((projeto, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.textContent = `PROJETO ${index + 1}`;
        button.onclick = () => window.location.href = `projetos/${projeto}`;
        projetosContainer.appendChild(button);
    });
});
