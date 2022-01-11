function resposta(){
    var resposta = Number(prompt("O Paulo deve fazer?\n1- Deixar sua filha em um lugar seguro e voltar para procurar sua esposa?\n2- Voltar para procurar sua esposa carregando sua filha nas costas?"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1 ou 2 "));
    } 
    if (resposta === 1){
        alert("Paulo consegue salvar sua esposa, mas quando voltam para buscar sua filha, descobrem que ela virou um zumbi.");
        location.href = "../../html/Game over/gameover.html";
        
    }
    else if (resposta === 2) {
        alert("Paulo e Alicia voltam para resgatar Maria, chegando bem a tempo de salvá-la de um grupo de zumbis.");
        location.href = "../../html/Win/paulo-win.html";
    }
    }
    
    