/*
// SISCAMOVEL
// Script de cadastro, leitura, edição e exclusão de pessoas
// Freeze Period (20211116)
*/

const KEY_BD = '@gerenciarpessoas'


var listaPessoas = {
    ultimoIdGerado:0,
    pessoas:[]
}


var FILTRO = ''

// Create
function inserirPessoa(nomePessoa, emailPessoa, senhaPessoa){
    const peopleID = listaPessoas.ultimoIdGerado + 1;
    listaPessoas.ultimoIdGerado = peopleID;
    listaPessoas.pessoas.push({
        peopleID, nomePessoa, emailPessoa, senhaPessoa
    })
    gravarBD()
    desenhar()
    visualizar('lista')
}

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaPessoas) )
}

function desenhar(){
    const tbody = document.getElementById('listaPessoasBody')
    if(tbody){
        var data = listaPessoas.pessoas;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( pessoa => {
                return expReg.test( pessoa.nomePessoa ) || expReg.test( pessoa.emailPessoa ) || expReg.test( pessoa.senhaPessoa )
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( pessoa => {
                return `<tr scope="row">
                        <td>${pessoa.peopleID}</td>
                        <td>${pessoa.nomePessoa}</td>
                        <td>${pessoa.emailPessoa}</td>
                        <td>${pessoa.senhaPessoa}</td>
                        <td>
                        <button type="button" class="btn btn-link link-primary" data-bs-toggle="modal" data-bs-target="#gerenciarPessoas" data-bs-placement="right" title="Editar" onclick='visualizar("cadastro",false,${pessoa.peopleID})'>
                        <i class="bi bi-pencil"></i>
                        </button>
                      <button type="button" class="btn btn-link link-danger" data-bs-placement="right" title="Excluir" onclick='perguntarExclusao(${pessoa.peopleID})'>
                        <i class="bi bi-trash2"></i>
                      </button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}


// Read
function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaPessoas = JSON.parse(data)
    }
    desenhar()
}

function visualizar(pagina, novo=false, peopleID=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(peopleID){
            const pessoa = listaPessoas.pessoas.find( pessoa => pessoa.peopleID == peopleID )
            if(pessoa){
                document.getElementById('peopleID').value = pessoa.peopleID
                document.getElementById('nomePessoa').value = pessoa.nomePessoa
                document.getElementById('emailPessoa').value = pessoa.emailPessoa
                document.getElementById('senhaPessoa').value = pessoa.senhaPessoa
            }
        }
    }
}

function pesquisar(value){
    FILTRO = value;
    desenhar()
}

window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroPessoas').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})


// Update
function editarPessoa(peopleID, nomePessoa, emailPessoa, senhaPessoa){
    var pessoa = listaPessoas.pessoas.find( pessoa => pessoa.peopleID == peopleID )
    pessoa.nomePessoa = nomePessoa;
    pessoa.emailPessoa = emailPessoa;
    pessoa.senhaPessoa = senhaPessoa;
    gravarBD()
    desenhar()
    visualizar('lista')
}

function submeter(e){
    e.preventDefault()
    const data = {
        peopleID: document.getElementById('peopleID').value,
        nomePessoa: document.getElementById('nomePessoa').value,
        emailPessoa: document.getElementById('emailPessoa').value,
        senhaPessoa: document.getElementById('senhaPessoa').value,
    }
    if(data.peopleID){
        editarPessoa(data.peopleID, data.nomePessoa, data.emailPessoa, data.senhaPessoa)
    }else{
        inserirPessoa(data.nomePessoa, data.emailPessoa, data.senhaPessoa)
    }
}

function limparEdicao(){
    document.getElementById('peopleID').value = ''
    document.getElementById('nomePessoa').value = ''
    document.getElementById('emailPessoa').value = ''
    document.getElementById('senhaPessoa').value = ''
}


// Delete
function deletarPessoa(peopleID){
    listaPessoas.pessoas = listaPessoas.pessoas.filter( pessoa => {
        return pessoa.peopleID != peopleID
    } )
    gravarBD()
    desenhar()
}

function perguntarExclusao(peopleID){
    if(confirm('Confirma a exclusão do pessoa: '+peopleID)){
        deletarPessoa(peopleID)
    }
}