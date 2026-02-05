// Seleciona o link/botão
const botaoAbrir = document.querySelector('a');

botaoAbrir.addEventListener('click', function(event) {
    // 1. Impede de ir para a próxima página na hora
    event.preventDefault();

    // 2. Dispara a animação de confetes
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF1493', '#FFEB3B', '#FFFFFF'] // Cores do seu tema
    });

    // 3. Aguarda 2 segundos para a pessoa ver os confetes e depois muda de página
    setTimeout(() => {
        const urlDestino = botaoAbrir.getAttribute('href');
        window.location.href = urlDestino;
    }, 2000);
});