function applyEffect() {
    var cartaoContent = document.querySelector('.cartao_content');
    
    // Gira o cartaoContent   
    cartaoContent.style.transform = 'rotateY(180deg)';
    cartaoContent.style.transition = 'transform 0.5s';   

    setTimeout(function() {
        var cardFront = document.querySelector('.card_front');
        const aboutClasse=document.querySelector('#about_classe');

        
        cardFront.classList.remove("hidden");
        // Define a posição como absoluta para ajustar com base no elemento pai
        cardFront.style.position = 'absolute'; 
        // Coloca o elemento na metade da largura do contêiner pai
        cardFront.style.left = '100%';
        // Move o elemento para a direita
        cardFront.style.transform = 'translateX(20%)';
        // Adiciona uma transição ao deslocamento
        cardFront.style.transition = 'left 0.5s, transform 0.5s';

        aboutClasse.classList.remove("hidden");
        aboutClasse.classList.add("about_classe");
        aboutClasse.style.transform = 'translateX(150%)'; // Ajuste aqui para se deslocar junto
        aboutClasse.style.transition = 'left 0.5s, transform 0.5s';
        //Aqui se encontra o recurso a ser aprimorado
        cartaoContent.style.transform = 'rotateY(0deg)';
        
    }, 500); // Tempo correspondente ao tempo de transição do card_back
}
  
    function revertEffect() {
      var cartaoContent = document.querySelector('.cartao_content');
      cartaoContent.style.transform = 'rotateY(0deg)';

      
      cardFront.style.left = '0';
    }

    function redirecionar() {
        window.location.href = "index.html";
    }
  
  