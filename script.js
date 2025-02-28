var numberToFind = 0;
var attempts = 0;

// Função para reiniciar o jogo
function refresh() {
    var element = document.getElementById('bet');
    element.value = '';

    // Gera um novo número aleatório entre 0 e 100
    numberToFind = parseInt(Math.random() * 10);
    attempts = 0; // Reinicia o contador de tentativas

    console.log('The number to find: ' + numberToFind);
}

refresh();

// Função para verificar o número inserido pelo usuário
function verifyNumber() {
    var element = document.getElementById('bet');
    var bet = element.value;

    if (bet > 10 || bet < 0) {
        alert('Aposta é inválida');
        return;
    }

    // Compara a aposta com o número a ser encontrado
    if (bet > numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MENOR');
    } else if (bet < numberToFind) {
        attempts++;
        alert('🚨 O número para ser encontrado é MAIOR');
    } else {
        alert('✅ Parabéns você acertou!! Com ' + attempts + ' erros!');
        refresh(); 
    }
}