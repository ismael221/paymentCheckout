function alertar(){
    let dados = document.querySelector(".valor");
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
            let total = document.querySelector(".valor").value
            total -= total * 0.1;
            $("#total").text("R$ "+ total.toFixed(2))
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

$(document).ready(
    ocultar("#visa"),
    ocultar("#mastercard"),
    ocultar("span")
)

$(document).ready(
    $(".valor").change(
        function (){
            let valor = document.querySelector(".valor").value
            if(valor.startsWith("1234")){
                $("#mastercard").fadeIn()
                $("#visa").fadeOut()
                $("span").fadeOut()
            }else if(valor.startsWith("4321")){
                $("#visa").fadeIn()
                $("#mastercard").fadeOut()
                $("span").fadeOut()
            }else{
                $("span").fadeIn()
                $("#visa").fadeOut()
                $("#mastercard").fadeOut()
            }
        }
    )
)
