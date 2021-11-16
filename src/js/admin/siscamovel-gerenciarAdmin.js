/*
// SISCAMOVEL
// Script de cadastro, leitura, edição e exclusão de admins
// Freeze Period (20211116)
*/

const KEY_BD = '@gerenciaradmin'


var listaAdmins = {
    ultimoIdGerado:0,
    admins:[]
}


var FILTRO = ''

// Create
function inserirAdmin(nomeAdmin, emailAdmin, senhaAdmin){
    const adminID = listaAdmins.ultimoIdGerado + 1;
    listaAdmins.ultimoIdGerado = adminID;
    listaAdmins.admins.push({
        adminID, nomeAdmin, emailAdmin, senhaAdmin
    })
    gravarBD()
    desenhar()
    visualizar('lista')
}

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaAdmins) )
}

function desenhar(){
    const tbody = document.getElementById('listaAdminsBody')
    if(tbody){
        var data = listaAdmins.admins;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( admin => {
                return expReg.test( admin.nomeAdmin ) || expReg.test( admin.emailAdmin ) || expReg.test( admin.senhaAdmin )
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( admin => {
                return `<tr scope="row">
                        <td>${admin.adminID}</td>
                        <td>${admin.nomeAdmin}</td>
                        <td>${admin.emailAdmin}</td>
                        <td>${admin.senhaAdmin}</td>
                        <td>
                        <button type="button" class="btn btn-link link-primary" data-bs-toggle="modal" data-bs-target="#gerenciarAdmin" data-bs-placement="right" title="Editar" onclick='visualizar("cadastro",false,${admin.adminID})'>
                        <i class="bi bi-pencil"></i>
                        </button>
                      <button type="button" class="btn btn-link link-danger" data-bs-placement="right" title="Excluir" onclick='perguntarExclusao(${admin.adminID})'>
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
        listaAdmins = JSON.parse(data)
    }
    desenhar()
}

function visualizar(pagina, novo=false, adminID=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(adminID){
            const admin = listaAdmins.admins.find( admin => admin.adminID == adminID )
            if(admin){
                document.getElementById('adminID').value = admin.adminID
                document.getElementById('nomeAdmin').value = admin.nomeAdmin
                document.getElementById('emailAdmin').value = admin.emailAdmin
                document.getElementById('senhaAdmin').value = admin.senhaAdmin
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
    document.getElementById('cadastroAdmin').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})


// Update
function editarAdmin(adminID, nomeAdmin, emailAdmin, senhaAdmin){
    var admin = listaAdmins.admins.find( admin => admin.adminID == adminID )
    admin.nomeAdmin = nomeAdmin;
    admin.emailAdmin = emailAdmin;
    admin.senhaAdmin = senhaAdmin;
    gravarBD()
    desenhar()
    visualizar('lista')
}

function submeter(e){
    e.preventDefault()
    const data = {
        adminID: document.getElementById('adminID').value,
        nomeAdmin: document.getElementById('nomeAdmin').value,
        emailAdmin: document.getElementById('emailAdmin').value,
        senhaAdmin: document.getElementById('senhaAdmin').value,
    }
    if(data.adminID){
        editarAdmin(data.adminID, data.nomeAdmin, data.emailAdmin, data.senhaAdmin)
    }else{
        inserirAdmin(data.nomeAdmin, data.emailAdmin, data.senhaAdmin)
    }
}

function limparEdicao(){
    document.getElementById('adminID').value = ''
    document.getElementById('nomeAdmin').value = ''
    document.getElementById('emailAdmin').value = ''
    document.getElementById('senhaAdmin').value = ''
}


// Delete
function deletarAdmin(adminID){
    listaAdmins.admins = listaAdmins.admins.filter( admin => {
        return admin.adminID != adminID
    } )
    gravarBD()
    desenhar()
}

function perguntarExclusao(adminID){
    if(confirm('Confirma a exclusão do Admin: '+adminID)){
        deletarAdmin(adminID)
    }
}