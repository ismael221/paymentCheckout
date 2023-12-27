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
    $("#numero").change(
        function (){
            let numero = document.querySelector("#numero").value
            if(numero.startsWith("1234")){
                $("#mastercard").fadeIn()
                $("#visa").fadeOut()
                $("span").fadeOut()
            }else if(numero.startsWith("4321")){
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

$(document).ready(
    $(".informarDados").click(function(){
        let valor = document.querySelector(".valor").value

        for(var i=1;i<6;i++){
            let total = valor/i;
         
            if(i === 4){
                let juros5Pct = valor * 0.05
                $("#parcelamento").append("<li> "+i+"x"+ " R$ "+ (juros5Pct + total).toFixed(2) +"</li>")
            }else if(i === 5){
                let juros10Pct = valor * 0.1
                $("#parcelamento").append("<li> "+i+"x"+ " R$ "+ (juros10Pct + total).toFixed(2) +"</li>")
            }
            else{
                $("#parcelamento").append("<li> "+i+"x"+ " R$ "+ total.toFixed(2) +"</li>")
            }
        }
        
    })
)


$(document).ready(
    $("#parcelas").change(function(){
        let valor = document.querySelector(".valor").value
        let parcelas = document.querySelector("#parcelas").value
        let total = valor/parcelas;

        $("#total").text("R$ "+total)
    })
)

$(document).ready(
    $(".pagar").click(function(){
        if(($("#numero") && $("#titular") && $("codSeguranca") && $("#date")) != null || undefined){
            alert("Pagamento realizado com sucesso")
        }
    })
)