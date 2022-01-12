function resposta(){
    var resposta = Number(prompt("o que Nádia deve fazer?\n1- Tentar despistá-lo, sem matar. \n2- Matar o zumbi."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("Nádia não despistar o zumbi e é mordida.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("Nádia entende que precisa matá-lo e o faz. \nLogo depois, ela entra no posto de vacinação.");
        location.href = "../../html/Win/nadia-win.html"
    }
    }
