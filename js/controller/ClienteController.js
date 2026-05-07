// Definição da classe AppController
// Essa classe é responsável por controlar operações relacionadas aos clientes,
// como salvar, listar e filtrar dados armazenados no localStorage.
class AppController {

    // Método estático responsável por salvar um cliente
    // "static" significa que o método pode ser chamado diretamente pela classe,
    // sem precisar criar uma instância dela.
    static salvarCliente(dados) {

        // Criação de um novo objeto Cliente
        // Os dados recebidos são passados para o construtor da classe Cliente.
        const cliente = new Cliente(

            // Nome do cliente
            dados.nome,

            // Tipo do cliente (ex: pessoa física ou jurídica)
            dados.tipo,

            // Documento do cliente (CPF/CNPJ)
            dados.documento,

            // Número de WhatsApp do cliente
            dados.whatsapp,

            // Email do cliente
            dados.email,

            // Cidade do cliente
            dados.cidade,

            // Estado do cliente
            dados.estado
        );

        // Busca a lista de clientes já salva no localStorage
        // localStorage.getItem("clientes") retorna uma string JSON
        // JSON.parse converte a string em array/objeto JavaScript
        // Caso não exista nada salvo, usa um array vazio []
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        // Adiciona o novo cliente ao array de clientes
        clientes.push(cliente);

        // Salva novamente o array atualizado no localStorage
        // JSON.stringify converte o array em string JSON
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    // Método estático responsável por listar todos os clientes
    static listarClientes() {

        // Retorna os clientes armazenados no localStorage
        // Caso não exista nenhum cliente salvo, retorna um array vazio
        return JSON.parse(localStorage.getItem("clientes")) || [];
    }

    // Método estático responsável por filtrar clientes
    // Recebe um objeto "filtro" contendo critérios de busca
    static filtrarClientes(filtro) {

        // Obtém todos os clientes salvos
        let clientes = this.listarClientes();

        // Retorna apenas os clientes que atendem aos filtros
        return clientes.filter(c => {

            // Verifica:
            // 1. Se não existe filtro.tipo OU se o tipo do cliente é igual ao filtro
            // 2. Se não existe filtro.cidade OU se a cidade do cliente é igual ao filtro
            // 3. Se não existe filtro.estado OU se o estado do cliente é igual ao filtro
            //
            // O operador && garante que todas as condições sejam verdadeiras.
            return (!filtro.tipo || c.tipo === filtro.tipo) &&
                   (!filtro.cidade || c.cidade === filtro.cidade) &&
                   (!filtro.estado || c.estado === filtro.estado);
        });
    }
}