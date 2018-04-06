import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import { DetalhesPage } from "../detalhes/detalhes";
import { Doacao } from './../../models/doacao/doacao';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-jungledoacoes',
  templateUrl: 'jungledoacoes.html',
})
export class JungledoacoesPage implements OnInit {

  public doacoes: Doacao;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private _alertCtrl: AlertController,
    private _service: ServiceProvider, ) {
      
  }

  seleciona(doacao) {
    this.navCtrl.push(DetalhesPage, { doacaoSelecionado: doacao });
  }

  ngOnInit(): void {
    console.log("teste");
    
    this._service
      .getDoacoes()
      .then(resDoacoes => {
        resDoacoes
          ? this.doacoes = resDoacoes
          : this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  }
}