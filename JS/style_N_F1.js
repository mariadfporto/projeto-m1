function clicouBotao(){
    var resposta = Number(prompt("Qual caminho Nádia deve seguir?"));
    
    if (!resposta) {
        alert("Reinicie o game");
    
    }
    else if (resposta === 1){
        alert("HEHEH");
        location.href = "../Fase 2/nadiaF2.html"
    }
    else if (resposta === 2) {
        alert("HUHUHU");
    }
    else if (resposta === 3){
        alert("HIHIHI");
    }
    else {
        alert("Game over");
    }
    }