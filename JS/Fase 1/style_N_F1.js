function clicouBotao(){
    var resposta = Number(prompt("Qual caminho Nádia deve seguir?"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 
    if (resposta === 1){
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