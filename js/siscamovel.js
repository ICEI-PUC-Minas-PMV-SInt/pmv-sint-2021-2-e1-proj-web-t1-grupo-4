// SISCAMOVEL.js
// Mock: recuperar senha

let MOCK_RECUPERAR_CONTA = "";

function mockRecuperarConta() {
    MOCK_RECUPERAR_CONTA = document.getElementById("recuperarConta").value;
    document.getElementById("valorMockRecuperarConta").innerHTML = MOCK_RECUPERAR_CONTA;
}


//Mostra / oculta a senha digitada
let tipo = document.getElementById('senhaPessoa');

document.getElementById('pass').addEventListener('click', () => {
    if(tipo.value){
        tipo.type == 'password' ? tipo.type = 'text' : tipo.type = 'password';
        tipo.focus()
        document.getElementById('pass').style.display = 'none';
        document.getElementById('text').style.display = 'inline-block';
    }
})

document.getElementById('text').addEventListener('click', () => {
    if(tipo.value) {
        tipo.type == 'text' ? tipo.type = 'password' : tipo.type = 'text';
        tipo.focus()
        document.getElementById('text').style.display = 'none';
        document.getElementById('pass').style.display = 'inline-block';
    }
})

// Redirecionamentos: 
// Página inicial
function paginaInicial() {
    setTimeout(function(){
        location.href = '../../index.html';
     }, 4000);
}

// conta de persona
function contaPessoa() {
    setTimeout(function(){
        location.href = './savages/user/conta.html';
     }, 2000);
}