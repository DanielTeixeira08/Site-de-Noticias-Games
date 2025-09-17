document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    })

    let tamanhoFonte = 16; // tamanho padrão

    document.getElementById('aumentar-fonte').addEventListener('click', function () {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
    });

    document.getElementById('diminuir-fonte').addEventListener('click', function () {
        if (tamanhoFonte > 10) {
            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + 'px';
        }
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            form.reset();
        });
    }
})
