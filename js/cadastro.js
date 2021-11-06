//MostraSenha
let tipo = document.getElementById('senha');
let tipoConf = document.getElementById('confirmaSenha');

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
//MostraConfirmaSenha
document.getElementById('passConf').addEventListener('click', () => {
    if(tipoConf.value){
        tipoConf.type == 'password' ? tipoConf.type = 'text' : tipoConf.type = 'password';
        tipoConf.focus()
        document.getElementById('passConf').style.display = 'none';
        document.getElementById('textConf').style.display = 'inline-block';
    }
})

document.getElementById('textConf').addEventListener('click', () => {
    if(tipoConf.value) {
        tipoConf.type == 'text' ? tipoConf.type = 'password' : tipoConf.type = 'text';
        tipoConf.focus()
        document.getElementById('textConf').style.display = 'none';
        document.getElementById('passConf').style.display = 'inline-block';
    }
})

//ValidacaoForm
let usuario = document.getElementById("usuario");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let confirmaSenha = document.getElementById("confirmaSenha");
let labelconfirmaSenha = document.getElementById("labelconfirmaSenha");

let ValidUsuario = false;
let ValidEmail = false;
let ValidSenha = false;
let ValidConfirmaSenha = false;

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        usuario.setAttribute('style', 'color: red; border-color: red');
        ValidUsuario = false;
    } else {
        usuario.setAttribute('style', 'color: #5a646c');
        ValidUsuario = true;
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 2) {
        email.setAttribute('style', 'color: red; border-color: red');
        ValidEmail = false;

    } else {
        email.setAttribute('style', 'color: #5a646c');
        ValidEmail = true;
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        senha.setAttribute('style', 'color: red; border-color: red');
        ValidSenha = false;
    } else {
        senha.setAttribute('style', 'color: #5a646c');
        ValidSenha = true;
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value) {
        confirmaSenha.setAttribute('style', 'color: red; border-color: red');
        labelconfirmaSenha.innerHTML = 'As senhas devem ser iguais';
        ValidConfirmaSenha = false;
    } else {
        confirmaSenha.setAttribute('style', 'color: #5a646c');
        labelconfirmaSenha.innerHTML = '';
        ValidConfirmaSenha = true;
    }
})

function cadastrar() {
    if(ValidUsuario && ValidEmail && ValidSenha && ValidConfirmaSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
        {
            userCad: usuario.value,
            emailCad: email.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style','display: block');
        msgSuccess.innerHTML = "Cadastrando Usuário...";
        msgError.setAttribute('style','display: none');
        msgError.innerHTML = '';

        setTimeout(() => {
            location.href = './login.html';
        }, 3000);

    } else {
     msgError.setAttribute('style','display: block');
     msgError.innerHTML = "Preencha todos os campos ...";
     msgSuccess.innerHTML = '';
     msgSuccess.setAttribute('style','display: none');
    }
}