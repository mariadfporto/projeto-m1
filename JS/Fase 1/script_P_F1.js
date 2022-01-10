function resposta(){
    var resposta = Number(prompt("Qual caminho Paulo deve seguir?\nCaminho 1, pela floresta, o mais longo.\nCaminho 2, metade pela floresta e metade pelos arredores da cidade.\nCaminho 3, caminho mais rápido."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("Esse caminho os fez perder muito tempo, e eles não conseguiram ser vacinados.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("Paulo e sua família decidem seguir por esse caminho.");
        location.href = "../../html/Fase 2/pauloF2.html"
    }
    else if (resposta === 3){
        alert("Esse caminho os levou de encontro para uma horda de zumbis, fazendo com todos morressem.");
        location.href = "../../html/Game over/gameover.html"
    }
    }
    
    
    