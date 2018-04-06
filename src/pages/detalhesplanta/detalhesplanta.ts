import { AcompanhamentoPage } from './../acompanhamento/acompanhamento';
import { PlantasPage } from './../plantas/plantas';
import { Planta } from './../../models/doacao/planta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhesplanta',
  templateUrl: 'detalhesplanta.html',
})
export class DetalhesplantaPage {

  public planta: Planta;

  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private _alertCtrl: AlertController) {
    this.planta = navParams.get('plantaSelecionado');

    this._alerta = this._alertCtrl.create({
      title : 'Aviso',
      buttons : [{ text : 'Ok ', handler : () => {this.navCtrl.setRoot(PlantasPage)} }]
  });
  }

  acompanhamento(planta) : void{
    
        this.navCtrl.push(AcompanhamentoPage, {plantaSelecionado : planta});
      }

 

}
