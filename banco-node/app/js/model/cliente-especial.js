import Cliente from "./cliente.js";

class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }

    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
    }

    listarDependentes() {
        return this.dependentes;
    }
}

export default ClienteEspecial;
