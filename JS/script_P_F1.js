function clicouBotao(){
    var resposta = Number(prompt("Qual caminho Paulo deve seguir?"));
    
    if (!resposta) {
        alert("Reinicie o game");
    
    }
    else if (resposta === 1){
        alert("HEHEH");
    }
    else if (resposta === 2) {
        alert("HUHUHU");
        
    }
    else if (resposta === 3){
        alert("HIHIHI");
        location.href = "../Fase 2/pauloF2.html"
    }
    else {
        alert("Game over");
    }
    }