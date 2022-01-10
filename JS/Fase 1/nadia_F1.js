function resposta(){
    var resposta = Number(prompt("ALGUM TEXTO"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("ALGUM TEXTO");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("ALGUM TEXTO");
        location.href = "../../html/Fase 2/pauloF2.html"
    }
    else if (resposta === 3){
        alert("ALGUM TEXTO");
        location.href = "../../html/Game over/gameover.html"
    }
    }
    
    
    