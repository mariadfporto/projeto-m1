function resposta(){
    var resposta = Number(prompt("O que ela deve fazer?\n1- Ir em direção ao grito e tentar ajudar?\n2- Ou continuar em frente?"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2"));
    } 

    if (resposta === 1){
        alert("Manuela vai em direção ao grito, mas se perde e não consegue localizar quem estava gritando.");
        location.href = "../../html/Fase 2/manuela_F2.html"
    }
    else if (resposta === 2) {
        alert("Manuela continua em frente, porém se depara com um grande grupo de zumbis, e até tenta lutar, mas é mordida.");
        location.href = "../../html/Game over/gameover.html" 
    }
    }
    
    
    