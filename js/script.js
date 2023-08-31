// Array para armazenar os dados cadastrados
let cadastros = [];

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
  const usuario = {
    nome,
    email,
    senha
  };
  cadastros.push(usuario);
  console.log("Novo usuário cadastrado:", usuario);
}

// Exemplo de uso da função cadastrarUsuario
cadastrarUsuario("João", "joao@example.com", "123456");

// Exibindo todos os cadastros
console.log("Todos os cadastros:", cadastros);
// Referência ao formulário
const loginForm = document.getElementById('login-form');

// Evento de envio do formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Simulação de autenticação (substitua isso com lógica real)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica as credenciais (exemplo simples)
    if (email === 'joao@example.com' && password === '123456') {
        // Redireciona para a página index.html
        window.location.href = 'index.html';
    } else {
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});
