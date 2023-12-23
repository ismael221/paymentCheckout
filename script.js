function alertar(){
    let dados = document.querySelector(".valor");
    console.log(dados.value)
    if(dados.value <= 0){
        alert('O campo valor precisa ser preenchido')
    }
}
function ocultar(elemento){
    $(elemento).hide();
}

function mostrar(elemento){
    $(elemento).show();
}


$(document).ready(ocultar(".pix"))

$(document).ready(ocultar(".cartaoCredito"))

//Ao clicar em informar dados caso não tenha sido informado o campos valor
//emitir mensagem de erro:

$(document).ready(
        $(".informarDados").click(alertar)
)


$(document).ready(
    $(".informarDados").click(
        function(){
        if($("#pix").prop("checked")){
            ocultar(".cartaoCredito")
            mostrar(".pix")
        }
    }
    )
)
$(document).ready(
    $(".informarDados").click(
        function(){
        if($("#cartaoCredito").prop("checked")){
            ocultar(".pix")
            mostrar(".cartaoCredito")
        }
    }
    )
)