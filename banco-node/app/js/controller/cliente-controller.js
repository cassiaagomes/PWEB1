import Cliente from "../model/cliente.js";
import Clientes from "../model/clientes.js";

class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.listaClientes = document.querySelector("#lista-clientes");
        this.clientes = new Clientes(); 
    }

    configurarEventos() {
        const form = document.querySelector("#form-cliente");
        form.addEventListener("submit", (event) => this.inserir(event));
    }

    inserir(evento) {
        evento.preventDefault();

        const nome = this.inputNome.value;
        const cpf = this.inputCpf.value;

        if (this.clientes.pesquisar(cpf)) {
            alert("Já existe um cliente com este CPF!");
            return;
        }

        const novoCliente = new Cliente(nome, cpf, null);
        this.clientes.inserir(novoCliente);

        this.inserirClienteNoHTML(novoCliente);
        this.limparFormulario();
    }

    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }

    inserirClienteNoHTML(cliente) {
        const li = document.createElement("li");
        li.textContent = `Nome: ${cliente.getNome()}, CPF: ${cliente.getCpf()}`;

        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "X";
        botaoApagar.addEventListener("click", () => {
            this.clientes.remover(cliente.getCpf());
            li.remove();
        });

        li.appendChild(botaoApagar);
        this.listaClientes.appendChild(li);
    }

    limparFormulario() {
        this.inputNome.value = "";
        this.inputCpf.value = "";
    }
}

const clienteController = new ClienteController();
clienteController.configurarEventos();

export default clienteController;
