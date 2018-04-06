import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Http } from "@angular/http";
import { CadastroUser } from '../../models/cadastro/cadastrouser';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
  public cadastrouser: CadastroUser;
  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _alertCtrl: AlertController, private _service: ServiceProvider) {

    this.cadastrouser = new CadastroUser();
    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok ', handler: () => { this.navCtrl.setRoot(CadastroUsuarioPage) } }]
    });
  }

  cadastro() {

    this._service
      .addUser(this.cadastrouser)
      .then(ret => {
        ret
          ?  this._alertCtrl.create({
            title: 'Sucesso',
            subTitle: 'Cadastro realizado..',
            buttons: [{ text: 'Ok' }]
          }).present()
          :  this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  }
}
