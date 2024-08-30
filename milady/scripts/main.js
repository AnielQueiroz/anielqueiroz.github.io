document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");

    // Adicionar um evento de clique para iniciar a música após interação
    document.body.addEventListener("click", function() {
        music.play();
    }, { once: true }); // Executa o evento apenas uma vez

    // Inicialização do Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000, // Tempo entre slides em ms
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // Ajusta o comportamento para telas menores, se necessário
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
});