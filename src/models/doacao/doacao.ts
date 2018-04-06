export class Doacao{
    
    constructor( public id : number = 0,
                public dataHora : string = "",
                 public idUsuario : number = 0,
                 public nomePlanta : string = "",
                 public nomeUsuario: string = "",
                 public idUsuarioDestinatario : number = 0,
                 public quantidade : number = 0,
                public descricao : string = "",
                public status : string = "",
                public idPlanta : number =0,
                public tipo : string = "",
                public img : string= "assets/images/planta.jpg"){

                }
}
