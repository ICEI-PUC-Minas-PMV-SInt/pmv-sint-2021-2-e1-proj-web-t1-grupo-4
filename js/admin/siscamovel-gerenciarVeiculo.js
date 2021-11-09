/*
// SISCAMOVEL
// Script de cadastro, leitura, edição e exclusão de veículos
// 20211109
*/

const KEY_BD = '@gerenciarveiculos'


var listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[]
}


var FILTRO = ''

// Create
function insertUsuario(modelo, anoFabricacao, preco, potenciaTorque, autonomiaMaxima, 
    velocidadeMaxima, bateria, carregamento, recargaRapidaVeiculo, recargaCompletaVeiculo){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, modelo, anoFabricacao, preco, potenciaTorque, autonomiaMaxima, 
        velocidadeMaxima, bateria, carregamento, recargaRapidaVeiculo, recargaCompletaVeiculo
    })
    gravarBD()
    desenhar()
    visualizar('lista')
}

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros) )
}

function desenhar(){
    const tbody = document.getElementById('listaRegistrosBody')
    if(tbody){
        var data = listaRegistros.usuarios;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.modelo ) || expReg.test( usuario.anoFabricacao ) 
                || expReg.test( usuario.preco ) || expReg.test( usuario.potenciaTorque ) 
                || expReg.test( usuario.autonomiaMaxima ) || expReg.test( usuario.velocidadeMaxima ) 
                || expReg.test( usuario.bateria ) || expReg.test( usuario.carregamento ) 
                || expReg.test( usuario.recargaRapidaVeiculo ) || expReg.test( usuario.recargaCompletaVeiculo )
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( usuario => {
                return `<tr scope="row">
                        <td>${usuario.id}</td>
                        <td>${usuario.modelo}</td>
                        <td>${usuario.anoFabricacao}</td>
                        <td>${usuario.preco}</td>
                        <td>${usuario.potenciaTorque}</td>
                        <td>${usuario.autonomiaMaxima}</td>
                        <td>${usuario.velocidadeMaxima}</td>
                        <td>${usuario.bateria}</td>
                        <td>${usuario.carregamento}</td>
                        <td>${usuario.recargaRapidaVeiculo}</td>
                        <td>${usuario.recargaCompletaVeiculo}</td>
                        <td>
                        <button type="button" class="btn btn-link link-primary" data-bs-toggle="modal" data-bs-target="#gerenciarVeiculos" data-bs-placement="right" title="Editar" onclick='visualizar("cadastro",false,${usuario.id})'>
                        <i class="bi bi-pencil"></i>
                        </button>
                      <button type="button" class="btn btn-link link-danger" data-bs-placement="right" title="Excluir" onclick='perguntarExclusao(${usuario.id})'>
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
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}

function visualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(id){
            const usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('modelo').value = usuario.modelo
                document.getElementById('anoFabricacao').value = usuario.anoFabricacao
                document.getElementById('preco').value = usuario.preco
                document.getElementById('potenciaTorque').value = usuario.potenciaTorque
                document.getElementById('autonomiaMaxima').value = usuario.autonomiaMaxima
                document.getElementById('velocidadeMaxima').value = usuario.velocidadeMaxima
                document.getElementById('bateria').value = usuario.bateria
                document.getElementById('carregamento').value = usuario.carregamento
                document.getElementById('recargaRapidaVeiculo').value = usuario.recargaRapidaVeiculo
                document.getElementById('recargaCompletaVeiculo').value = usuario.recargaCompletaVeiculo
            }
        }
        //document.getElementById('nome').focus()
    }
}

function pesquisar(value){
    FILTRO = value;
    desenhar()
}

window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    /*document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })*/

})


// Update
function editUsuario(id, modelo, anoFabricacao, preco, potenciaTorque, autonomiaMaxima, velocidadeMaxima, bateria, carregamento, recargaRapidaVeiculo, recargaCompletaVeiculo){
    var usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
    usuario.modelo = modelo;
    usuario.anoFabricacao = anoFabricacao;
    usuario.preco = preco;
    usuario.potenciaTorque = potenciaTorque;
    usuario.autonomiaMaxima = autonomiaMaxima;
    usuario.velocidadeMaxima = velocidadeMaxima;
    usuario.bateria = bateria;
    usuario.carregamento = carregamento;
    usuario.recargaRapidaVeiculo = recargaRapidaVeiculo;
    usuario.recargaCompletaVeiculo = recargaCompletaVeiculo;
    gravarBD()
    desenhar()
    visualizar('lista')
}

function submeter(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        modelo: document.getElementById('modelo').value,
        anoFabricacao: document.getElementById('anoFabricacao').value,
        preco: document.getElementById('preco').value,
        potenciaTorque: document.getElementById('potenciaTorque').value,
        autonomiaMaxima: document.getElementById('autonomiaMaxima').value,
        velocidadeMaxima: document.getElementById('velocidadeMaxima').value,
        bateria: document.getElementById('bateria').value,
        carregamento: document.getElementById('carregamento').value,
        recargaRapidaVeiculo: document.getElementById('recargaRapidaVeiculo').value,
        recargaCompletaVeiculo: document.getElementById('recargaCompletaVeiculo').value,
    }
    if(data.id){
        editUsuario(data.id, data.modelo, data.anoFabricacao, data.preco, data.potenciaTorque, data.autonomiaMaxima, 
            data.velocidadeMaxima, data.bateria, data.carregamento, data.recargaRapidaVeiculo, data.recargaCompletaVeiculo)
    }else{
        insertUsuario( data.modelo, data.anoFabricacao, data.preco, data.potenciaTorque, data.autonomiaMaxima, 
            data.velocidadeMaxima, data.bateria, data.carregamento, data.recargaRapidaVeiculo, data.recargaCompletaVeiculo )
    }
}

function limparEdicao(){
    document.getElementById('id').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('anoFabricacao').value = ''
    document.getElementById('preco').value = ''
    document.getElementById('potenciaTorque').value = ''
    document.getElementById('autonomiaMaxima').value = ''
    document.getElementById('velocidadeMaxima').value = ''
    document.getElementById('bateria').value = ''
    document.getElementById('carregamento').value = ''
    document.getElementById('recargaRapidaVeiculo').value = ''
    document.getElementById('recargaCompletaVeiculo').value = ''
}


// Delete
function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
        return usuario.id != id
    } )
    gravarBD()
    desenhar()
}

function perguntarExclusao(id, modelo, anoFabricacao){
    if(confirm('Confirma a exclusão do carro: '+id, +modelo, +anoFabricacao)){
        deleteUsuario(id)
    }
}