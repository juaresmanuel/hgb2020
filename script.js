
// Seleciona os elementos
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Adiciona evento de clique ao botão do menu
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("ativo"); // Alterna entre abrir e fechar o menu
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const fecharMenu = document.getElementById("fechar-menu");

    // Abrir menu
    menuBtn.addEventListener("click", function () {
        menu.classList.add("ativo");
    });

    // Fechar menu
    fecharMenu.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function trocarSlide() {
        slides[index].classList.remove("ativo");
        index = (index + 1) % slides.length;
        slides[index].classList.add("ativo");
    }

    // Troca de slide a cada 4 segundos
    setInterval(trocarSlide, 4000);
});
window.onload = function () {
    document.getElementById("loading").style.display = "none";
};
document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line"); // Seleciona todas as linhas

    function checkVisibility() {
        lines.forEach(line => {
            const rect = line.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                line.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Checa ao carregar a página
});
document.addEventListener("DOMContentLoaded", function() {
    // Modo Escuro
    const botaoModoEscuro = document.getElementById("modo-escuro");
    botaoModoEscuro.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Contador de Dias desde a formatura
    function calcularDias() {
        const dataFormatura = new Date("2023-12-15"); // Ajuste para sua data real
        const hoje = new Date();
        const diferenca = Math.floor((hoje - dataFormatura) / (1000 * 60 * 60 * 24));
        document.getElementById("contador-dias").innerText = `${diferenca} dias desde a formatura!`;
    }
    calcularDias();

    // Quiz Interativo
    function responderQuiz(botao) {
        if (botao.classList.contains("correto")) {
            alert("Parabéns! Você acertou!");
        } else {
            alert("Resposta errada! Tente novamente.");
        }
    }
});



