const numeroSenha = document. querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes =document.querySelectorAll('.parametro-senha_botao') ;

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentaTamanho;

function diminuiTamanho () {
    if (tamanhoSenha > 20) {

    }
    tamanhoSenha--;
     numeroSenha.textContent = tamanhoSenha;
     geraSenha();
}

 function aumentaTamanho () {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
 }

 const campoSenha = document.querySelector('#campo-senha');
 const letrasMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha()

 campoSenha.value = letrasMaiusculas;

 function geraSenha() {
   let senha = '';
   for(let i=0; i <tamanhoSenha; i++) {
      let numeroAleatorio = Math.random()*letrasMaiusculas.length;
      numeroAleatorio = Math.floor(numeroAleatorio);
      senha = senha + letrasMaiusculas[ numeroAleatorio];
   }
   campoSenha.value = senha;

 } 
