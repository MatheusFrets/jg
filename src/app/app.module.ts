
import {Camera} from "@ionic-native/camera";

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { JungledoacoesPage } from './../pages/jungledoacoes/jungledoacoes';
import { DetalhesPage } from './../pages/detalhes/detalhes';
import { DoarPage } from './../pages/doar/doar';
import { PlantasPage } from './../pages/plantas/plantas';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { CadastrolocaisPage } from './../pages/cadastrolocais/cadastrolocais';
import { AcompanhamentoPage } from './../pages/acompanhamento/acompanhamento';
import { CadastroplantaPage } from './../pages/cadastroplanta/cadastroplanta';
import { DetalhesplantaPage } from './../pages/detalhesplanta/detalhesplanta';
import { LoginPage } from './../pages/login/login';
import { MensagensPage } from './../pages/mensagens/mensagens';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';//mapeamento do tipo de retorno
import 'rxjs/add/operator/toPromise';
import { ServiceProvider } from '../providers/service/service';


 
@NgModule({
  declarations: [
    MyApp,
    JungledoacoesPage,
    DetalhesPage,
    DetalhesplantaPage,
    PlantasPage, 
    DoarPage,
    CadastroUsuarioPage,
    CadastroplantaPage,
    AcompanhamentoPage,
    CadastrolocaisPage,
    LoginPage,
    MensagensPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JungledoacoesPage,
    DetalhesPage,
    DetalhesplantaPage,
    PlantasPage,
    DoarPage,
    CadastroUsuarioPage,
    CadastroplantaPage,
    AcompanhamentoPage,
    CadastrolocaisPage,
    LoginPage,
    MensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
