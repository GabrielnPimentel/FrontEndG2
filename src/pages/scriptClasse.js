function applyEffect() {
    var cartaoContent = document.querySelector('.cartao_content');
    
    // Gira o cartaoContent   
    cartaoContent.style.transform = 'rotateY(180deg)';
    cartaoContent.style.transition = 'transform 0.5s';   

    setTimeout(function() {
        var cardFront = document.querySelector('.card_front');
        const aboutClasse=document.querySelector('#about_classe');
        
        if (cardFront.classList.contains("hidden")) {
            cardFront.classList.remove("hidden");
            // Define a posição como absoluta para ajustar com base no elemento pai
            cardFront.style.position = 'absolute'; 
            // Coloca o elemento na metade da largura do contêiner pai
            cardFront.style.left = '100%';
            // Move o elemento para a direita
            cardFront.style.transform = 'translateX(20%)';
            // Adiciona uma transição ao deslocamento
            cardFront.style.transition = 'left 0.5s, transform 0.5s';
            //Aqui se encontra o recurso a ser aprimorado
            cartaoContent.style.transform = 'rotateY(0deg)';
        }else{
            cardFront.classList.add("hidden");
        }
        if(aboutClasse.classList.contains("hidden")){
            aboutClasse.classList.remove("hidden");
            aboutClasse.style.transform = 'translateX(150%)'; // Ajuste aqui para se deslocar junto
            aboutClasse.style.transition = 'left 0.5s, transform 0.5s';
        }else{
            aboutClasse.classList.add("hidden");
        }
        
        
    }, 500); // Tempo correspondente ao tempo de transição do card_back
}


    function redirecionar() {
        window.location.href = "./ficha.html";
    }

    var audio = document.getElementById("myaudio");
audio.volume = 0.1;
