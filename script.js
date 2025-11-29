document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };
    
    // Enviar os dados para o servidor
    fetch('/enviar-mensagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.error(error);
        alert('Erro ao enviar mensagem!');
    });
});
