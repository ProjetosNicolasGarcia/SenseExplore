//Faz a animação da barra de progresso

const progressBar = document.getElementsByClassName
('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
},5)

// Pontuação do site

let pontuacao = 0; // Pontuação inicial

// Seleciona todos os elementos com a classe 'card' e adiciona um evento de clique
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const resposta = card.getAttribute('data-resposta');

        if (resposta === 'correta') {
            pontuacao++; 
        }

        
    });

    card.addEventListener('keydown', event => {
        if (event.keyCode === 13) { // Tecla Enter
            const resposta = card.getAttribute('data-resposta');

            if (resposta === 'correta') {
                pontuacao++; 
            }

            
        }
    });

    if (document.getElementById('pontuacaoFinal')) {
        document.getElementById('pontuacaoFinal').textContent = pontuacao;
      }
});
     
      
  
