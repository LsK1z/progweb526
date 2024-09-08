$("#btnCep").click(function () {
    var cep = $("#cep").val();
    $("#rua").val("...");
    $("#bairro").val("...");
    $("#cidade").val("...");
    $("#uf").val("...");
    $("#ibge").val("...");

    var url = "https://viacep.com.br/ws/" + cep + "/json";
    $.getJSON(url, function (retorno) {
        if (!("erro" in retorno)) {
            $("#rua").val(retorno.logradouro);
            $("#bairro").val(retorno.bairro);
            $("#cidade").val(retorno.localidade);
            $("#uf").val(retorno.uf);
            $("#ibge").val(retorno.ibge);
            $(".formCep").removeClass("hidden").addClass("fade-in");
        } else {
            alert("CEP não encontrado na base de dados");
        }
    });
});
