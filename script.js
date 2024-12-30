function toggleSupportPopup() {
    const supportPopup = document.getElementById('supportPopup');
    supportPopup.classList.toggle('active');
}

// Função para redirecionar para outra página
function redirectTo(path) {
    window.location.href = path;
}

// Função para alterar o caminho sem recarregar a página
function changePathWithoutReload(newPath) {
    window.history.pushState({}, "", newPath);
}

// Função para substituir o caminho atual sem adicionar ao histórico
function replaceCurrentPath(newPath) {
    window.history.replaceState({}, "", newPath);
}

// Exemplo de carregar conteúdo com base na URL (opcional)
function carregarConteudo(path) {
    console.log(`Carregando conteúdo para: ${path}`);
    // Aqui você pode adicionar lógica para alterar dinamicamente o conteúdo da página
}

// Evento para lidar com mudanças na URL (popstate)
window.addEventListener("popstate", () => {
    carregarConteudo(window.location.pathname);
});

// Exemplo de uso das funções
// redirectTo('/pagina-inicial'); // Redireciona para "/pagina-inicial"
// changePathWithoutReload('/sobre-nos'); // Altera a URL para "/sobre-nos" sem recarregar
// replaceCurrentPath('/contato'); // Substitui a URL atual por "/contato" sem adicionar ao histórico
