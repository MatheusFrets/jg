export class CadastroLocal {
    
        constructor(public id: number = null,
            public local: string = "",
            public descricao: String = "",
            public latitude: number = null,
            public longitude: number = null,
            public status: string = "",
            public id_usuario: number = null) {
    
        }
    }