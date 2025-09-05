
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    
    // Definir credenciais válidas
    const validUsername = "João Marcos Tokarski";
    const validPassword = "18/09/2008";
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Verificar credenciais
        if (username === validUsername && password === validPassword) {
            // Login bem-sucedido
            showMessage('Login realizado com sucesso! Redirecionando...', 'success');
            
            // Simular redirecionamento após 2 segundos
            setTimeout(function() {
                alert('Bem-vindo ao sistema, ' + username + '!');
                // Aqui você redirecionaria para a página principal
                // window.location.href = 'pagina-principal.html';
            }, 2000);
        } else {
            // Login falhou
            showMessage('Usuário ou senha incorretos. Tente novamente.', 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        
        // Esconder a mensagem após 5 segundos
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 5000);
    }
});