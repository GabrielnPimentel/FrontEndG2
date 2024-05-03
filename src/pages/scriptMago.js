function applyEffect() {
    var cartaoContent = document.querySelector('.cartao_content');
    
    // Gira o cartaoContent   
    cartaoContent.style.transform = 'rotateY(180deg)';
    cartaoContent.style.transition = 'transform 0.5s';   
    
    setTimeout(function() {
        var cardFront = document.querySelector('.card_front');
        const cardDesc=document.querySelector('.descricao');
        const aboutPersona=document.querySelector('.about_personagem');

        cardFront.classList.remove("hidden");
        
        // Define a posição como absoluta para ajustar com base no elemento pai
        cardFront.style.position = 'absolute'; 
        // Coloca o elemento na metade da largura do contêiner pai
        cardFront.style.left = '100%';
        // Move o elemento para a direita
        cardFront.style.transform = 'translateX(20%)';
        // Adiciona uma transição ao deslocamento
        cardFront.style.transition = 'left 0.5s, transform 0.5s';

        cardDesc.classList.remove("hidden");
        cardDesc.style.transform = 'translateX(150%)'; // Ajuste aqui para se deslocar junto
        cardDesc.style.transition = 'left 0.5s, transform 0.5s';

        aboutPersona.classList.remove('hidden');
        aboutPersona.style.transform='translateX(20%)'; // Ajuste aqui para se deslocar junto
        aboutPersona.style.transition = 'left 0.5s, transform 0.5s';
        
    }, 500); // Tempo correspondente ao tempo de transição do card_back
}
  
    function revertEffect() {
      var cartaoContent = document.querySelector('.cartao_content');
      cartaoContent.style.transform = 'rotateY(0deg)';
      cardFront.style.left = '0';
    }
  
  