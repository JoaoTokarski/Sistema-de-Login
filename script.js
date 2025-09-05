document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    
    // Definir credenciais válidas
    const validUsername = "Joao Tokarski";
    const validPassword = "18/09/2008";
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Verificar credenciais
        if (username === validUsername && password === validPassword) {
            // Login bem-sucedido
            showMessage('Login bem-sucedido!', 'success');
        } else {
            // Login falhou
            showMessage('Usuário ou senha incorretos!', 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        messageDiv.style.display = 'block';
        
        // Esconder a mensagem após 3 segundos
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 3000);
    }
});