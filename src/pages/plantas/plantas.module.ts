import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlantasPage } from './plantas';

@NgModule({
  declarations: [
    PlantasPage,
  ],
  imports: [
    IonicPageModule.forChild(PlantasPage),
  ],
})
export class PlantasPageModule {}
