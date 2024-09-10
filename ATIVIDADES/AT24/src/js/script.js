function exibirOcultarGenerica(element, effect, flag) {
    if (element == 'tag') {
        if (flag) {
            $(effect).show(1000);
        }
        else {
            $(effect).hide(1000);
        }
    }
    else if (element == 'class') {
        if (flag) {
            $('.' + effect).show(1000);
        }
        else {
            $('.' + effect).hide(1000);
        }
    }
    else if (element == 'id') {
        if (flag) {
            $('#' + effect).show(1000);
        }
        else {
            $('#' + effect).hide(1000);
        }
    }
}

$(document).ready(function() {
    $('.box').click(function() {
        alert('Evento Click');
    });
});

$(document).ready(function() {
    $('.box2').dblclick(function() {
        alert('Evento Duplo Click');
    });
});

$(document).ready(function() {
    $('.box3').mouseover(function() {
        alert('Evento Mouse Hover');
    });
});