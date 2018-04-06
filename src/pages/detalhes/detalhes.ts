import { MensagensPage } from './../mensagens/mensagens';
import { Doacao } from './../../models/doacao/doacao';
import { JungledoacoesPage } from './../jungledoacoes/jungledoacoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
}) 
export class DetalhesPage {

  public doacao: Doacao;

  private _alerta: Alert;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _service: ServiceProvider, private _alertCtrl: AlertController) {

      this.doacao = navParams.get('doacaoSelecionado');
    this._alerta = this._alertCtrl.create({
          title : 'Aviso',
          buttons : [{ text : 'Ok ', handler : () => {this.navCtrl.setRoot(JungledoacoesPage)} }]
      });


  }

resgatar(){

  this._service
  .resgatar(this.doacao)
  .then(ret => {
    ret
      ?  this._alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Resgate realizado..',
        buttons: [{ text: 'Ok' }]
      }).present()
      :  this._alertCtrl.create({
        title: 'Erro',
        subTitle: 'Não foi possível conectar.',
        buttons: [{ text: 'Ok' }]
      }).present();
    });
}

 mensagensPush() : void{
    
        this.navCtrl.push(MensagensPage, {doacaoSelecionado : this.doacao});
      }

}
