document.addEventListener("DOMContentLoaded", function() {
    
    // 1. LÊ A MEMÓRIA PARA VER QUEM ENTROU
    // Como agora o Login e a Área do Aluno moram no GitHub, eles compartilham a memória!
    const perfilAtivo = localStorage.getItem("ibbra_perfil");

    // 2. PROTEÇÃO (O GUARDA)
    // Se alguém tentar acessar essa página direto pelo link sem fazer login, volta pra tela inicial.
    if (!perfilAtivo) {
        window.location.href = "index.html"; // Joga de volta para a tela de login
        return;
    }

    // 3. BOAS-VINDAS DINÂMICAS
    const elementoNome = document.getElementById("nome-aluno");
    if (elementoNome) {
        elementoNome.innerText = perfilAtivo;
        elementoNome.style.color = "#E50914"; // Deixa o nome em destaque (vermelho) no tema escuro
    }

    // 4. LÓGICA DOS BOTÕES
    const btnPlay = document.querySelector(".btn-play");
    if (btnPlay) {
        btnPlay.addEventListener("click", function() {
            alert("Preparando o Modo Cinema para " + perfilAtivo + "...");
        });
    }

    const btnInfo = document.querySelector(".btn-info");
    if (btnInfo) {
        btnInfo.addEventListener("click", function() {
            alert("Sobre esta Masterclass: 12 módulos práticos sobre Planejamento Patrimonial.");
        });
    }
});
