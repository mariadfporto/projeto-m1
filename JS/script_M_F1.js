function clicouBotao(){
    var resposta = Number(prompt("Qual caminho Manuela deve seguir?"));
    
    if (!resposta) {
        alert("Reinicie o game");
    
    }
    else if (resposta === 1){
        alert("HEHEH");
    }
    else if (resposta === 2) {
        alert("HUHUHU");
        location.href = "../Fase 2/manuelaF2.html"
    }
    else if (resposta === 3){
        alert("HIHIHI");
    }
    else {
        alert("Game over");
    }
    }