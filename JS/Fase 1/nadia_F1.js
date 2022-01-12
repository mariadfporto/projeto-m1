function resposta(){
    var resposta = Number(prompt("O que Nádia deve fazer?\n1 - Nádia deve voltar e tentar ir pela frente da escola.\n2 - Nádia deve correr para outra direção, dentro da floresta.\n3 - Nádia deve arriscar e enfrentar os zumbis."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("A frente da escola tem menos zumbis do que Nádia esperava e ela chega na entrada da cidade.");
        location.href = "../../html/Fase 2/nadia_F2.html";
    }
    else if (resposta === 2) {
        alert("Chegando na floresta, Nádia tropeça e é mordida por um zumbi.");
        location.href = "../../html/Game over/gameover.html";
    }
    else if (resposta === 3){
        alert("Nádia não consegue matar todos os zumbis e é mordida.");
        location.href = "../../html/Game over/gameover.html"
    }
    }
    
    