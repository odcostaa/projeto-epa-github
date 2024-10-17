document.getElementById('sendMessage').addEventListener('click', function() {
    // Obtenha os valores do formulário
    const nameField = document.querySelector('input[name="name"]');
    const emailField = document.querySelector('input[name="email"]');
    const subjectField = document.querySelector('input[name="subject"]');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');

    // Resetar mensagens de erro
    errorMessage.innerHTML = '';
    sentMessage.style.display = 'none';

    // Validação simples
    if (!nameField.value) {
        alert('Por favor, preencha o nome. Exemplo: João Silva');
        nameField.focus();
        return;
    }

    if (!emailField.value) {
        alert('Por favor, preencha o email. Exemplo: pedrotiago@gmail.com');
        emailField.focus();
        return;
    }

    if (!subjectField.value) {
        alert('Por favor, dê uma sugestão para o espaço');
        subjectField.focus();
        return;
    }

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Por favor, insira um email válido. Exemplo: pedrotiago@gmail.com');
        emailField.focus();
        return;
    }

    // Se tudo estiver correto, mostre a mensagem de sucesso
    sentMessage.innerHTML = 'Mensagem enviada com sucesso! Obrigado pelo seu contato.';
    sentMessage.style.display = 'block';

    // Limpar o formulário
    document.getElementById('contactForm').reset();
});
