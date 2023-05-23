document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector("#previuos");
    const nextButton = document.querySelector("#next");
    let currentCapitulo = 1;
  
    function loadCapitulo(numCapitulo) {
      fetch(`/partials/capitulo?numCapitulo=${numCapitulo}`)
        .then(response => response.text())
        .then(data => {
          const capituloContainer = document.querySelector(".texto_capitulo");
          capituloContainer.innerHTML = data;
        });
    }
  
    loadCapitulo(currentCapitulo);
  
    prevButton.addEventListener("click", function() {
      if (currentCapitulo > 1) {
        currentCapitulo--;
        loadCapitulo(currentCapitulo);
      }
    });
  
    nextButton.addEventListener("click", function() {
      if (currentCapitulo < capitulo.length) {
        currentCapitulo++;
        loadCapitulo(currentCapitulo);
      }
    });
  });
  