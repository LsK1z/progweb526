document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Inicializando o tooltip
        var tooltipTrigger = document.getElementById('botaoRemover');
        var tooltip = new bootstrap.Tooltip(tooltipTrigger);
    
        // Inicializando o popover
        var popover = new bootstrap.Popover(tooltipTrigger);
    });
    
