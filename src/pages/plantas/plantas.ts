import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, /*LoadingController,*/ AlertController } from 'ionic-angular';
//import { Http } from "@angular/http";

import { Doacao } from './../../models/doacao/doacao';
import { DetalhesplantaPage } from '../detalhesplanta/detalhesplanta';
import { ServiceProvider } from '../../providers/service/service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@IonicPage()
@Component({
  selector: 'page-plantas',
  templateUrl: 'plantas.html',
})
export class PlantasPage implements OnInit {

  public plantas: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: ServiceProvider,
    //private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {


  }

  seleciona(planta) {

    this.navCtrl.push(DetalhesplantaPage, { plantaSelecionado: planta });
  }

  ngOnInit(): void {
  

    this._service
      .getMinhasPlantas()
      .then(resDoacoes => {
        if (resDoacoes)
        {
         
           this.plantas = resDoacoes;
        }else
         this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  }
}
