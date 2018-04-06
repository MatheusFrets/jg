import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { CadastroUser } from '../../models/cadastro/cadastrouser';
import { CadastroLocal } from '../../models/cadastro/cadastrolocal';
import { Planta } from '../../models/doacao/planta';
import { Doacao } from '../../models/doacao/doacao';
import { CadastroAcompanhamento } from '../../models/cadastro/cadastroacompanhamento';

@Injectable()
export class ServiceProvider {

  private url = "http://127.0.0.1/jungle";
  constructor(private _http: Http,
    private _loadingCtrl: LoadingController) {
    console.log("criou serviço...");

  }

  /*getUsuario() {
    let loader = this._loadingCtrl.create({
      content: 'Conectando... Aguarde...'
    });

    loader.present();
    return this._http
      .get(this.url + '/usuario.php') //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(resUsuario => {
        loader.dismiss();
        return resUsuario;
        //console.log(resUsuarios);
      })
      .catch(err => {
        loader.dismiss();
        console.log("Erro: " + err);
      });
  }*/

  getDoacoes() {
    let loader = this._loadingCtrl.create({
      content: 'Buscando dados... Aguarde...'
    });

    loader.present();
    return this._http
      .get(this.url + '/doacoes.php') //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(resDoacoes => {
        loader.dismiss();
        return resDoacoes;
      })
      .catch(err => {
        loader.dismiss();
        console.log("Erro: " + err);
      });
  }


  getMinhasPlantas() {
    let loader = this._loadingCtrl.create({
      content: 'Buscando dados... Aguarde...'
    });

    loader.present();
    console.log(">>" + this.url + '/doacoes.php?acao=minhasPlantas&id=2');

    return this._http
      .get(this.url + '/doacoes.php?acao=minhasPlantas&id=2') //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(resDoacoes => {
        
        loader.dismiss();
        return resDoacoes;
      })
      .catch(err => {
        loader.dismiss();
        console.log("Erro: " + err);
      });
  }

   addUser(user: CadastroUser) {

    let api = `${this.url}/usuarios.php?acao=add&nome=${user.nome}
        &email=${user.email}&senha=${user.senha}&sexo=${user.sexo}
        &data_nasc=${user.dataNascimento}&endereco=${user.endereco}`;
    console.log(api);

    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true; })
      .catch(erro => { console.log(erro); return false; });
  }


  addAcompanhamento(acomp: CadastroAcompanhamento) {
    //let api = `${this.url}/acompanhamento.php?acao=add&id=${acomp.id}&foto=${acomp.foto}&latitude=${acomp.latitude}&longitude=${acomp.longitude}&data_hora=${acomp.data_hora}&observacao=${acomp.observacao}`; 
    let api = `${this.url}/acompanhamento.php`;
        console.log(api);
        let data = JSON.stringify({
          acao : 'add',
          id: acomp.id,
          foto : acomp.foto,
          latitude : acomp.latitude,
          longitude : acomp.longitude,
          data_hora : acomp.data_hora,
          observacao : acomp.observacao

        });
        let headers = new Headers(
          {
            'Content-Type' : 'application/json'
          });
          let options = new RequestOptions({ headers: headers });
          console.log(api);
          
        return this._http
        .post(api, data, options )
  //        return this._http
   //       .get(api)
          .toPromise()
          .then((retorno) => { 
            console.log(">>" + retorno);
            return true; 
          })
          .catch(erro => { console.log(erro); return false; });
      }

  addLocais(local: CadastroLocal) {

    let api = `${this.url}//locais.php?acao=add&local=${local.local}
            &descricao=${local.descricao}&latitude=${local.latitude}&longitude=${local.longitude}
            &status=${local.status}&id_usuario=${local.id_usuario}`;
    console.log(api);

    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true; })
      .catch(erro => { console.log(erro); return false; });
  }

  addPlanta(planta: Planta) {

    let api = `${this.url}//plantas.php?acao=add&`;
    console.log(api);

    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true; })
      .catch(erro => { console.log(erro); return false; });
  }

  resgatar(doacao: Doacao) {

    let api = `${this.url}/doacoes.php?acao=resgatar&id=${doacao.id}&id_usuario_destinatario=2`;
    console.log(api);
    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true; })
      .catch(erro => { console.log(erro); return false; });
  }

  getPlantas(tipo) {

    return this._http
      .get(this.url + '/plantas.php?tipo=' + tipo) //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(plantas => {
        console.log(">> " + plantas[0].nome);
        return plantas;
      })
      .catch(err => {
        return false;
      });
  }

  getTipos() {

    return this._http
      .get(this.url + '/tipos.php') //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(tipos => {
        return tipos;
      })
      .catch(err => {
        return false;
      });
  }

  enviarDoacao(doacao) {

    let api = `${this.url}/doacoes.php?acao=add&id_usuario=1&id_planta=${doacao.planta}&quantidade=${doacao.quantidade}`;
    console.log(api);

    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true })
      .catch(erro => { return false });
  }

  enviarMensagem(doacao, mensagem) {

    let api = `${this.url}/mensagens.php?acao=add&id_doacao=${doacao.id}
            &id_usuario=1&mensagem=${mensagem.mensagem}
            &data_hora=data.data.children`;
    console.log(api);

    return this._http
      .get(api)
      .toPromise()
      .then(() => { return true; })
      .catch(erro => {
        console.log(erro);
        return false;
      });
  }

  checkLogin(usuario) {

    return this._http
      .get(this.url+'/usuarios.php?email=' + usuario.email +
      '&senha=' + usuario.senha) //requisicao http com get
      .map(res => res.json()) //mapeamento de resulttado para json
      .toPromise()
      .then(resUsuario => {
        if (resUsuario) 
          return resUsuario;
      })
      .catch(err => {
        console.log('>>', err);
        return false;
      });
  }


  login(userInfo, loggedIn) {
    let url = `${this.url}/usuarios.php`;
    let iJon = JSON.stringify(userInfo);

    return this._http.post(this.url, iJon, {
       headers: new Headers({
          'Content-Type':'application/json'
       })
    })
    .map(res => res.text())
    .map(res => {
       if (res=="error" || res=="nofound"){
          return false;
       } else {
          localStorage.setItem('token', res);
          return true;
       }
    });
 }

}
