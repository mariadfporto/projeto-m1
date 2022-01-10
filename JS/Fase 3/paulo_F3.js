function resposta(){
    var resposta = Number(prompt("O que eles devem fazer?\n1 - Lutar com os zumbis.\n2 - Correr pela floresta para despistá-los."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1 ou 2 "));
    } 
    if (resposta === 1){
        alert("Eles decidem ficar e lutar, pois o grupo de zumbis é pequeno e eles não querem arriscar ter os zumbis os seguindo.");
        location.href = "../../html/Win/paulo-win.html"
    }
    else if (resposta === 2) {
        alert("Enquanto eles correm, Maria tropeça, fica para trás e acaba morrendo.");
        location.href = "../../html/Game over/gameover.html"
    }
    }
    
    