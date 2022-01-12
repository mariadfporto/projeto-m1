function resposta(){
    var resposta = Number(prompt("Qual caminho ela deve escolher?\n1- O primeiro caminho parece ser o mesmo pelo qual ela veio.\n2-No segundo caminho, ela escuta um barulho de água.\n3- E o terceiro caminho, parece ter uma trilha bem delimitada."));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    } 

    if (resposta === 1){
        alert("Esse caminho faz com que Manuela dê de cara com o grupo de zumbis do qual ela estava fugindo.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("Manuela chega perto de um rio, porém é surpreendida por um zumbi e é mordida.");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 3){
        alert("Seguindo a trilha, ela consegue sair de dentro da floresta, e está próxima a entrada da cidade.");
        location.href = "../../html/Fase 3/manuela_F3.html"
    }
    }
    
    
    