const form = document.getElementById('form atividade');
const imgAprovado = "<img src='./images/aprovado.png' alt='Emoji Celebrando'"
const imgReprovado = "<img src='./images/reprovado.png' alt='Emoji Triste'"
const spanAprovado = "<span class='resultado aprovado'>Aprovado</span>"
const spanReprovado = "<span class='resultado reprovado'>Reprovado</span>"
const atividades = [];

let linhas = '';

let somanota = [];
let soma = 0;

for (let i = 0; i < somanota.length; i++) {
    soma += somanota[i];
}



form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    adicionaMedia();

});

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome atividade')
    const inputNotaAtividade = document.getElementById('nota atividade')
    
    if(atividades.includes(inputNomeAtividade.value)){
        alert('Atividade já inserida')
    } else {
        atividades.push(inputNomeAtividade.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>';
    
        linhas += linha;
    
        somanota.push(inputNotaAtividade.value);
        soma += parseInt(inputNotaAtividade.value);
    }

    document.getElementById("form atividade").reset();
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function adicionaMedia(){
    let media = '<tr>';
    media += "<td>Nota Média</td>";
    media += `<td>${Math.round(soma/somanota.length)}</td>`;
    media += `<td>${(soma/somanota.length) >= 7 ? spanAprovado : spanReprovado}</td>`;
    media += "</tr>";

    const corpoTabelaMedia = document.querySelector('tfoot');
    corpoTabelaMedia.innerHTML = media;
}