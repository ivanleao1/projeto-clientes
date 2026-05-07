// Definição da classe View
// Essa classe é responsável pela interação com a interface do usuário (HTML).
// Ela controla eventos, captura dados dos campos,
// atualiza listas na tela e limpa formulários.
class View {

    // Método estático responsável por iniciar a aplicação
    // Ele configura os eventos dos botões e campos da página.
    static init() {

        // Seleciona o botão com id "btnCadastrar"
        // e adiciona um evento de clique.
        // Quando o botão for clicado, o método View.cadastrar será executado.
        document.getElementById("btnCadastrar")
            .addEventListener("click", View.cadastrar);

        // Seleciona o botão com id "btnFiltrar"
        // e adiciona um evento de clique.
        // Ao clicar, executa o método responsável por filtrar clientes.
        document.getElementById("btnFiltrar")
            .addEventListener("click", View.filtrar);

        // Seleciona o campo "tipo"
        // e adiciona um evento de mudança.
        // Quando o valor mudar, executa o método alterarTipo.
        document.getElementById("tipo")
            .addEventListener("change", View.alterarTipo);

        // Renderiza imediatamente a lista de clientes
        // carregando os dados já existentes no localStorage.
        View.renderLista(AppController.listarClientes());
    }

    // Método responsável por alterar dinamicamente
    // o placeholder do campo de documento.
    static alterarTipo() {

        // Obtém o valor selecionado no campo "tipo"
        const tipo = document.getElementById("tipo").value;

        // Obtém o campo de documento
        const doc = document.getElementById("documento");

        // Operador ternário:
        // Se o tipo for "PF", o placeholder será "CPF"
        // Caso contrário, será "CNPJ"
        doc.placeholder = tipo === "PF" ? "CPF" : "CNPJ";
    }

    // Método responsável por cadastrar um cliente
    static cadastrar() {

        // Cria um objeto contendo os dados capturados do formulário
        const dados = {

            // Captura o valor digitado no campo nome
            nome: document.getElementById("nome").value,

            // Captura o tipo selecionado
            tipo: document.getElementById("tipo").value,

            // Captura o documento digitado
            documento: document.getElementById("documento").value,

            // Captura o WhatsApp digitado
            whatsapp: document.getElementById("whatsapp").value,

            // Captura o email digitado
            email: document.getElementById("email").value,

            // Captura a cidade digitada
            cidade: document.getElementById("cidade").value,

            // Captura o estado digitado
            estado: document.getElementById("estado").value
        };

        // Envia os dados para o AppController,
        // responsável por salvar o cliente.
        AppController.salvarCliente(dados);

        // Atualiza a lista de clientes exibida na tela
        // após o novo cadastro.
        View.renderLista(AppController.listarClientes());

        // Limpa os campos do formulário após salvar
        View.limpar();
    }

    // Método responsável por aplicar filtros na lista
    static filtrar() {

        // Cria um objeto contendo os filtros selecionados
        const filtro = {

            // Obtém o filtro de tipo
            tipo: document.getElementById("filtroTipo").value,

            // Obtém o filtro de cidade
            cidade: document.getElementById("filtroCidade").value,

            // Obtém o filtro de estado
            estado: document.getElementById("filtroEstado").value
        };

        // Solicita ao AppController a lista filtrada
        const clientes = AppController.filtrarClientes(filtro);

        // Atualiza a lista na interface com os resultados filtrados
        View.renderLista(clientes);
    }

    // Método responsável por renderizar (mostrar)
    // a lista de clientes na tela.
    static renderLista(clientes) {

        // Obtém o elemento HTML onde os clientes serão exibidos
        const lista = document.getElementById("lista");

        // Limpa o conteúdo atual da lista
        // evitando duplicação de elementos.
        lista.innerHTML = "";

        // Percorre cada cliente do array
        clientes.forEach(c => {

            // Cria um elemento <li> dinamicamente
            const li = document.createElement("li");

            // Define o texto do documento conforme o tipo do cliente
            // PF = CPF
            // PJ = CNPJ
            const tipoDoc = c.tipo === "PF" ? "CPF" : "CNPJ";

            // Define o texto exibido dentro do <li>
            // Template String usa crases ``
            // para interpolar variáveis com ${}
            li.innerText = `${c.nome} - ${c.tipo} - ${tipoDoc}: ${c.documento} - ${c.cidade}/${c.estado}`;

            // Adiciona o <li> dentro da lista HTML
            lista.appendChild(li);
        });
    }

    // Método responsável por limpar os campos do formulário
    static limpar() {

        // Limpa o campo nome
        document.getElementById("nome").value = "";

        // Limpa o campo documento
        document.getElementById("documento").value = "";

        // Limpa o campo WhatsApp
        document.getElementById("whatsapp").value = "";

        // Limpa o campo email
        document.getElementById("email").value = "";

        // Limpa o campo cidade
        document.getElementById("cidade").value = "";

        // Limpa o campo estado
        document.getElementById("estado").value = "";
    }
}

// Inicializa a aplicação chamando o método init()
// Isso ativa todos os eventos e renderiza os clientes existentes.
View.init();