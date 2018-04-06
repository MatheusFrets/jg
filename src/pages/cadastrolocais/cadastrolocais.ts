
import { CadastroLocal } from './../../models/cadastro/cadastrolocal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Http } from "@angular/http";
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-cadastrolocais',
  templateUrl: 'cadastrolocais.html',
})
export class CadastrolocaisPage {

  public cadastrolocal: CadastroLocal;
  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _alertCtrl: AlertController, private _service : ServiceProvider) {

    this.cadastrolocal = new CadastroLocal();
    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok ', handler: () => { this.navCtrl.setRoot(CadastrolocaisPage) } }]
    });
  }

  cadastrolocais() {

    this._service
      .addLocais(this.cadastrolocal)
      .then(ret => {
        ret
          ? this._alertCtrl.create({
            title: 'Sucesso',
            subTitle: 'Cadastro realizado..',
            buttons: [{ text: 'Ok' }]
          }).present()
          : this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  }
}
