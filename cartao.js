const container = document.getElementById('bolo-container');

// 1. Criar o texto de instrução
const instrucao = document.createElement('p');
instrucao.innerHTML = "<strong>Para apagar as velas, clique em cada uma!</strong>";
instrucao.style.color = "#FFEB3B"; // Amarelo para destacar no rosa
container.appendChild(instrucao);

// 2. Criar o local das velas
const gridVelas = document.createElement('div');
gridVelas.className = 'velas-grid';
container.appendChild(gridVelas);

// 3. Criar as 18 velas
for (let i = 1; i <= 18; i++) {
    const vela = document.createElement('span');
    vela.className = 'vela';
    vela.innerHTML = '🕯️'; // Vela acesa
    vela.style.fontSize = '2.5rem';
    vela.style.cursor = 'pointer';
    vela.style.display = 'inline-block';
    vela.style.margin = '5px';
    vela.style.transition = 'transform 0.2s';

    // Evento de clicar/tocar na vela
    vela.addEventListener('click', function() {
        if (this.innerHTML === '🕯️') {
            this.innerHTML = '💨'; // Muda para o sopro (apagada)
            this.style.opacity = '0.5';
            
            // Pequeno confete ao apagar cada uma
            confetti({
                particleCount: 20,
                spread: 30,
                origin: { y: 0.8 },
                colors: ['#FFEB3B', '#FFFFFF']
            });

            verificarVelas();
        }
    });

    gridVelas.appendChild(vela);
}

// 4. Adicionar o bolo embaixo das velas
const boloEmoji = document.createElement('div');
boloEmoji.innerHTML = '🎂';
boloEmoji.style.fontSize = '6rem';
container.appendChild(boloEmoji);

// 5. Função para checar se todas foram apagadas
function verificarVelas() {
    const velas = document.querySelectorAll('.vela');
    const todasApagadas = Array.from(velas).every(v => v.innerHTML === '💨');

    if (todasApagadas) {
        setTimeout(() => {
            // Mega explosão de confetes final
            var duration = 5 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              var particleCount = 50 * (timeLeft / duration);
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);

            alert("Feliz Aniversário, Gleyci! 18 anos de muita luz! 🎉");
        }, 500);
    }
}