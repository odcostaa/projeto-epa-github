document.getElementById('sendMessage').addEventListener('click', function() {
    // Obtenha os valores do formulário
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');

    // Resetar mensagens de erro
    errorMessage.innerHTML = '';
    sentMessage.style.display = 'none';

    // Validação simples
    if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Se tudo estiver correto, mostre a mensagem de sucesso
    sentMessage.style.display = 'block';

    // Limpar o formulário
    document.getElementById('contactForm').reset();
});