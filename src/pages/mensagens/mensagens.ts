//import { MensagensPage } from './mensagens';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Http } from "@angular/http";
import { Mensagem } from './../../models/mensagem/mensagem';
import { Doacao } from '../../models/doacao/doacao';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {
  public mensagem: Mensagem;
  public doacao: Doacao;
  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _alertCtrl: AlertController, private _service: ServiceProvider) {

    this.doacao = navParams.get('doacaoSelecionado');
    this.mensagem = new Mensagem();
    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok ', handler: () => { this.navCtrl.setRoot(MensagensPage) } }]
    });
  }
  enviarmensagem() {

    this._service
      .enviarMensagem(this.doacao, this.mensagem)
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
