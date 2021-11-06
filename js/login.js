//MostraSenha
var tipo = document.getElementById('senha');

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

//Função Logar
function logar() {
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    let msgError = document.getElementById("msgError");
    let listaUser = [];

    let userValid = {
        usuario: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

        listaUser.forEach((item) => {
            if(usuario.value == item.userCad && senha.value == item.senhaCad) {

                userValid = {
                    usuario: item.userCad,
                    email: item.emailCad,
                    senha: item.senhaCad
                }

            }
        })

    //Valida Login
        if(usuario.value == userValid.usuario && senha.value == userValid.senha && usuario.value != '' && senha.value != '') {
            location.href = "./minhaConta.html";

            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            console.log(token)
            localStorage.setItem('token', token);

            localStorage.setItem('userLogado', JSON.stringify(userValid));

        } else {
            usuario.setAttribute('style', 'color: red; border-color: red');
            msgError.setAttribute('style', 'display: block');
            msgError.innerHTML = 'Usuário ou senha incorretos!';
            usuario.focus();
        }

}