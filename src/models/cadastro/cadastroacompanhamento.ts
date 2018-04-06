export class CadastroAcompanhamento {
    
        constructor(public sequencia: number = null,
            public id: number = null,
            public foto: string = "",
            public latitude: number = null,
            public longitude: number = null,
            public data_hora: string = "",
            public observacao: string = "") {
    
        }
    }