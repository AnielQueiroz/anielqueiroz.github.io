document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");

    // Adicionar um evento de clique para iniciar a música após interação
    document.body.addEventListener("click", function() {
        music.play();
    }, { once: true }); // Executa o evento apenas uma vez
});