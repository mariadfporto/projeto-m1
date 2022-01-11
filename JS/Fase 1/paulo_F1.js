function resposta(){
    var resposta = Number(prompt("Qual caminho Paulo deve seguir?\nCaminho 1, pela floresta, o mais longo.\nCaminho 2, pela cidade, caminho mais rápido.\nCaminho 3, metade pela floresta e metade pelos arredores da cidade."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("Esse caminho os fez perder muito tempo, e eles não conseguiram ser vacinados.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("Esse caminho os levou de encontro para uma horda de zumbis, fazendo com todos morressem.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 3){
        alert("Paulo e sua família decidem seguir por esse caminho.");
        location.href = "../../html/Fase 2/paulo_F2.html"
    }
    }
    
    
    