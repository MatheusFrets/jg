
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-cadastroplanta',
  templateUrl: 'cadastroplanta.html',
})
export class CadastroplantaPage {

 // public cadastroplanta: CadastroPlanta;
  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _alertCtrl : AlertController, private _http : Http) {
      this._alerta = this._alertCtrl.create({
        title : 'Aviso',
        buttons : [{ text : 'Ok ', handler : () => {this.navCtrl.setRoot(CadastroplantaPage)} }]
    });
  }

  cadastro() {
    
        let api = `http://127.0.0.1/jungle/locais.php?acao=add&`;
        console.log(api);
        
        this._http
          .get(api)
          .toPromise()
          .then(() => {
            this._alerta.setSubTitle('Cadastro realizado com sucesso.');
            this._alerta.present();
          })
          .catch(erro => {
            console.log(erro);
            this._alerta.setSubTitle('Não foi possível realizar o Cadastro!');
            this._alerta.present();
          });
      }



}
