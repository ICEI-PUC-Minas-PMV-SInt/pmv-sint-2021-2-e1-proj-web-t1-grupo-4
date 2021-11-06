// Mostra usuário logado
let logado = document.getElementById('logado');
let userLogado = JSON.parse(localStorage.getItem('userLogado'));

logado.innerHTML = `Olá ${userLogado.usuario}`;

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar esta página!');
    location.href = "./pages/login.html";
}

//Função sair
function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    location.href = "./pages/login.html";
}