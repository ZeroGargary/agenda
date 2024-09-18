const form = document.getElementById('agenda');
const contatos = [];
const contatosn = [];


let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha()
    atualizarTabela()
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
    
    if (contatos.includes(inputNome.value) || contatosn.includes(inputNumero.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido`);
    } else {
        contatos.push(inputNome.value);
        contatosn.push(parseFloat(inputNumero));

        let linha = '<tr>';
        linha += `<td> ${inputNome.value} </td>`
        linha += `<td> ${inputNumero.value} </td>`
        linha += `</tr>`

        linhas += linha

        inputNome.value = '';
        inputNumero.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}