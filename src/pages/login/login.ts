import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';
import { JungledoacoesPage } from './../jungledoacoes/jungledoacoes';
import { Component } from '@angular/core';
import { Usuarios } from './../../models/login/usuarios';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {//implements OnInit{
  //ngOnInit(): void {
    //throw new Error("Method not implemented.");
  //}
  public usuario: Usuarios;
  loader: any;

  userForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: ServiceProvider,
    public formBuilder: FormBuilder,
    private _alertCtrl: AlertController) {


    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.usuario = new Usuarios();
    
  }

  pushPage(): void {
    this.navCtrl.push(CadastroUsuarioPage);
  }

  carrega(event) {
    event.preventDefault();

    let alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'OK' }]
    });

    if (!this.usuario.email || !this.usuario.senha) {
      alerta.setSubTitle('Informe os dados de login!');
      alerta.present();
      return;
    }
    

  
    
    this._service
    //.getUsuario()
      .checkLogin(this.usuario)
      .then(user => {
        if (user) {

          if (user[0].email == this.usuario.email) {
           
            this.navCtrl.setRoot(JungledoacoesPage);
            
          } else {
            alerta.setSubTitle('Usuário inválido!');
            alerta.present();
          }
          
        } else
          this._alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível conectar.',
            buttons: [{ text: 'Ok' }]
          }).present();

      });
  

  
    }
}
