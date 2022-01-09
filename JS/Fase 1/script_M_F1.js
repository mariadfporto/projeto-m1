function clicouBotao(){
    var resposta = Number(prompt("Qual caminho Manuela deve seguir?"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 
    if (resposta === 1){
        alert("HEHEH");
    }
    else if (resposta === 2) {
        alert("HUHUHU");
        location.href = "../../html/Fase 2/manuelaF2.html"
    }
    else if (resposta === 3){
        alert("HIHIHI");
    }
    else {
        alert("Game over");
    }
    }