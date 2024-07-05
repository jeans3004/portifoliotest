document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);

    // Limpa o formulário
    document.getElementById('contact-form').reset();
});

