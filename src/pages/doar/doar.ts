import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

import { Tipos } from './../../models/doacao/tipos';
import { Planta } from './../../models/doacao/planta';
import { Doacoes } from './../../models/doacao/doacoes';
import { JungledoacoesPage } from './../jungledoacoes/jungledoacoes';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-doar',
  templateUrl: 'doar.html',
})
export class DoarPage {

  public plantas: Planta[];
  public tipos: Tipos[];

  public doacao: Doacoes;

  private _alerta: Alert;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _service: ServiceProvider, private _alertCtrl: AlertController) {

    this.doacao = new Doacoes();
    this.getTipos();

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'Ok ', handler: () => { this.navCtrl.setRoot(JungledoacoesPage) } }]
    });

  }


  getPlantas(tipo) {

    this._service
      .getPlantas(tipo)
      .then(resPlantas => {
        resPlantas
          ? this.plantas = resPlantas
          : this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  }

  getTipos() {

    this._service
      .getTipos()
      .then(tipos => {
        tipos
          ? this.tipos = tipos
          : this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });

  }

  enviar() {

    this._service
      .enviarDoacao(this.doacao)
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
