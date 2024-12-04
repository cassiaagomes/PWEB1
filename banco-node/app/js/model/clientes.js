import Cliente from "./cliente.js";

class Clientes {
    constructor() {
        this.clientes = [];
    }

    inserir(cliente) {
        this.clientes.push(cliente);
    }

    remover(cpf) {
        const index = this.clientes.findIndex(cliente => cliente.getCpf() === cpf);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }

    listar() {
        return this.clientes;
    }

    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.getCpf() === cpf) || null;
    }
}

export default Clientes;
