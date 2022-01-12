function resposta(){
    var resposta = Number(prompt("Por onde Nádia deve ir?\n1 - Pelas escadas.\n2 - Pela rua.\n3- Pelo Muro."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("Nádia acaba demorando muito para subir nas escadas e é mordida.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("No final da rua Nádia encontra mais zumbis e acaba sendo mordida pois não consegue lutar com todos eles.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 3){
        alert("Nádia rapidamente passa seu cachorro pelo muro e depois pula, despistando com sucesso os zumbis.");
        location.href = "../../html/Fase 3/nadia_F3.html"
    }
    }
    
    
    
    