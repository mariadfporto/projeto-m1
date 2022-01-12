function resposta(){
    var resposta = Number(prompt("O que Manuela deve fazer?\n1- Barulho para atrair os zumbis.\n2- Enfrentar os zumbis."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1 ou 2"));
    } 

    if (resposta === 1){
        alert("Ao fazer barulho, Manuela atrai um grupo muito maior do que ela esperava e não consegue dar conta de todos os zumbis e é mordida.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("");
        location.href = "../../html/Win/manuela-win.html"
    }
    }
    
    
    