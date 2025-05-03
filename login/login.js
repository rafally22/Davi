document.getElementById('toggle-password-icon').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('toggle-password-icon');
    
    // Alterna o tipo de senha
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Mostra a senha
        icon.classList.remove('fa-eye'); // Troca para o olho aberto
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';  // Esconde a senha
        icon.classList.remove('fa-eye-slash'); // Troca para o olho fechado
        icon.classList.add('fa-eye');
    }
});
