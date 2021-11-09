// SISCAMOVEL.js
// Mock: recuperar senha

let MOCK_RECUPERAR_CONTA = "";

function mockRecuperarConta() {
    MOCK_RECUPERAR_CONTA = document.getElementById("recuperarConta").value;
    document.getElementById("valorMockRecuperarConta").innerHTML = MOCK_RECUPERAR_CONTA;
}