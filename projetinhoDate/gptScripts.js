// Variável para controlar a página atual
var paginaAtual = 1;

// Função para avançar a página
function avancarPagina() {
  // Oculta a página atual
  document.querySelector('.pagina-' + paginaAtual).classList.remove('ativa');
  
  // Incrementa a variável da página atual
  paginaAtual++;
  
  // Se a página atual for maior que 4, volta para a primeira página
  if (paginaAtual > 6) {
    paginaAtual = 1;
  }
  
  // Mostra a nova página atual
  document.querySelector('.pagina-' + paginaAtual).classList.add('ativa');
}

//modal
let contador = 0; // inicializa o contador de cliques

function respostaNao() {
  // cria um array com três mensagens diferentes
  const mensagens = ["Serio? Você clicou em não assim de primeira?", "Clicou de novo :/", "Tudo bem então, não é não né?", "Teste 5"];

  // verifica se o contador de cliques é menor que o número de mensagens
  if (contador < mensagens.length) {
    // cria o elemento do modal
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // adiciona o conteúdo ao modal
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const mensagem = document.createTextNode(mensagens[contador]); // exibe a mensagem correspondente ao contador
    modalContent.appendChild(mensagem);
    modal.appendChild(modalContent);

    modalContent.style.fontSize = "4em";

    // adiciona o botão para fechar o modal
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
      modal.remove();
    };
    modalContent.appendChild(closeButton);

    // adiciona o modal ao corpo da página
    document.body.appendChild(modal);


    contador++; // incrementa o contador de cliques
  }
}
  
  // adiciona o evento onclick ao botão "Não"
  const btnNao = document.getElementById("btn-nao");
  btnNao.onclick = respostaNao;

//--------------------------------------------

  let contadorSim = 0; // inicializa o contador de cliques

  function respostaSim() {
    // cria um array com três mensagens diferentes
    const mensagens = ["Deve ter clicado errado kk", "É isso mesmo que você quer?", "Só pra ter certeza", "Enfim namorados aaaaa"];
  
    // verifica se o contador de cliques é menor que o número de mensagens
    if (contador < mensagens.length) {
      // cria o elemento do modal
      const modal = document.createElement("div");
      modal.classList.add("modal");
  
      // adiciona o conteúdo ao modal
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      const mensagem = document.createTextNode(mensagens[contadorSim]); // exibe a mensagem correspondente ao contador
      modalContent.appendChild(mensagem);
      modal.appendChild(modalContent);
  
      modalContent.style.fontSize = "4em";
      modalContent.style.padding = "1em"
  
      // adiciona o botão para fechar o modal
      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "&times;";
      closeButton.onclick = function() {
        modal.remove();
      };
      modalContent.appendChild(closeButton);
  
      // adiciona o modal ao corpo da página
      document.body.appendChild(modal);
  
  
      contadorSim++; // incrementa o contador de cliques
    }
  }
    
    // adiciona o evento onclick ao botão "Sim"
    const btnSim = document.getElementById("btn-sim");
    btnSim.onclick = respostaSim;