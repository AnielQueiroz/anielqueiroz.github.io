document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log(message);

    // Verifica se os campos de nome e mensagem estão vazios
    if (name.trim() === '' || message.trim() === '') {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    var whatsappMessage = "Olá, meu nome é " + name + ". Minha mensagem é: " + message;
    var encodedMessage = encodeURIComponent(whatsappMessage);

    var whatsappURL = "https://api.whatsapp.com/send?phone=+557186776478&text=" + encodedMessage;

    window.open(whatsappURL);
});

// carrossel de imagens
document.addEventListener("DOMContentLoaded", function() {
    var imageCarousel = new bootstrap.Carousel(document.getElementById('image-carousel'), {
        interval: 3000,
        ride: true
    });
});

// carousel
var images = [
    "../assets/imagem1.jpg",
    "../assets/imagem2.jpg",
    "../assets/imagem3.jpg"
];
  
var currentIndex = 0;
var headerCarousel = document.getElementById("header-carousel");
  
function changeHeaderImage() {
    headerCarousel.style.backgroundImage = "url(" + images[currentIndex] + ")";
    currentIndex = (currentIndex + 1) % images.length;
}
  
changeHeaderImage();
setInterval(changeHeaderImage, 9000);

headerCarousel.style.transition = "background-image 0.5s ease-in-out";