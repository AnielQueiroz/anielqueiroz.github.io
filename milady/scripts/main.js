document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    const elements = document.querySelectorAll('.truncate-text');

    elements.forEach(element => {
        const button = element.nextElementSibling; // O botão "Leia mais" vem logo após o parágrafo
        if (element.scrollHeight > element.clientHeight) {
            // Se o conteúdo é maior do que o espaço disponível, mostre o botão
            button.classList.remove('hidden');
        }
    });

    document.addEventListener('click', function(event) {
        // Verifica se o clique foi em um botão com a classe 'leia-mais'
        if (event.target.classList.contains('leia-mais')) {
            // Pega o ID do depoimento associado
            const targetId = event.target.getAttribute('data-target');
            // Pega o conteúdo completo do depoimento
            const content = document.getElementById(targetId).innerText;
            // Define o conteúdo no modal
            document.getElementById('modal-content').innerText = content;
            // Mostra o modal
            document.getElementById('modal').classList.remove('hidden');
        }
    });
    
    function closeModal() {
        document.getElementById('modal').classList.add('hidden');
    }
    document.getElementById('close-modal').addEventListener('click', closeModal);

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