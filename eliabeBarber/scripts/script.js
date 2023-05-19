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