const numeroSenha = document. querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes =document.querySelectorAll('.parametro-senha_botao') ;

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentaTamanho;

function diminuiTamanho () {
    if (tamanhoSenha > 1) {

    }
    tamanhoSenha = tamanhoSenha - 1;
     numeroSenha.textContent = tamanhoSenha;
}

 function aumentaTamanho () {
    tamanhoSenha = tamanhoSenha + 1 ;
    numeroSenha.textContent = tamanhoSenha;
 }