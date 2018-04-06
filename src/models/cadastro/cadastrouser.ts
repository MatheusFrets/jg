export class CadastroUser {

    constructor(public id: number = null,
        public nome: string = "",
        public email: String = "",
        public senha: string = "",
        public sexo: string = "",
        public dataNascimento: string = "",
        public endereco: string = "") {

    }
}