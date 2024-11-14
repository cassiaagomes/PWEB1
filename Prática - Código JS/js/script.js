let usuariosJson = { usuarios: [] };

const listaUsuariosElement = document.querySelector('#listaUsuarios');

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const novoUsuario = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    };

    usuariosJson.usuarios.push(novoUsuario);

    inputNomeElement.value = '';
    inputIdadeElement.value = '';
    inputCpfElement.value = '';
}

function listarUsuarios() {
    listaUsuariosElement.innerHTML = ''; 

    for (let usuario of usuariosJson.usuarios) {
        const liElement = document.createElement('li');

        const spanElement = document.createElement('span');
        spanElement.innerHTML = `
            <strong>Nome:</strong> ${usuario.nome} <br>
            <strong>Idade:</strong> ${usuario.idade} <br>
            <strong>CPF:</strong> ${usuario.cpf}
        `;

        liElement.appendChild(spanElement);
        listaUsuariosElement.appendChild(liElement);
    }
}