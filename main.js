const numeroSenha = document.querySelector('.parametro-senha_texto');
const botoes = document.querySelectorAll('.parametro-senha_botao');

let tamanhoSenha = 12;

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
   if (tamanhoSenha > 1)   {
    tamanhoSenha = tamanhoSenha - 1;
   }
    numeroSenha.textoContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textoContent = tamanhoSenha;
}
    
