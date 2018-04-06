import { Planta } from './../../models/doacao/planta';
import { Doacoes } from './../../models/doacao/doacoes';
import { CadastroAcompanhamento } from './../../models/cadastro/cadastroacompanhamento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Alert } from 'ionic-angular';
import { PlantasPage } from '../plantas/plantas';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-acompanhamento',
  templateUrl: 'acompanhamento.html',
})
export class AcompanhamentoPage {

  public acomp : CadastroAcompanhamento;
  public planta: Doacoes;

  base64Image: string;
  public foto : any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: ServiceProvider,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private camera: Camera) {

    this.planta = navParams.get('plantaSelecionado');
    this.acomp = new CadastroAcompanhamento;
    this.acomp.id = 2;
    this.acomp.longitude = 9999;
    this.acomp.foto = "";
    this.acomp.latitude = 8888;
    this.acomp.observacao = "teste";
    this.acomp.data_hora = "20/03/2018";
  }

  grava() {
    

        this._service
          .addAcompanhamento(this.acomp)
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

  abreCamera() {
    let config: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE

    };
    this.camera.getPicture(config).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = imageData;
     // console.log(this.foto);
      
      this.acomp.foto = this.base64Image;
    }, (err) => {

    });
  }
}
