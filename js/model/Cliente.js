// Definição da classe Cliente
// Essa classe representa o modelo de um cliente.
// Ela serve para criar objetos padronizados contendo
// todas as informações de um cliente.
class Cliente {

    // Método construtor da classe
    // O constructor é executado automaticamente
    // sempre que um novo objeto Cliente é criado.
    constructor(nome, tipo, documento, whatsapp, email, cidade, estado) {

        // Atribui o valor recebido no parâmetro "nome"
        // à propriedade "nome" do objeto.
        this.nome = nome;

        // Armazena o tipo do cliente.
        // Exemplo:
        // PF = Pessoa Física
        // PJ = Pessoa Jurídica
        this.tipo = tipo;

        // Armazena o documento do cliente.
        // Pode ser CPF ou CNPJ dependendo do tipo.
        this.documento = documento;

        // Armazena o número de WhatsApp do cliente.
        this.whatsapp = whatsapp;

        // Armazena o email do cliente.
        this.email = email;

        // Armazena a cidade do cliente.
        this.cidade = cidade;

        // Armazena o estado do cliente.
        this.estado = estado;
    }
}