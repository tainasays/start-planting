import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantasRoutingModule } from './plantas-routing.module';
import { PlantasComponent } from './plantas.component';
import { DetalhesPlantasComponent } from './detalhes-plantas/detalhes-plantas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlantasComponent,
    DetalhesPlantasComponent
  ],
  imports: [
    CommonModule,
    PlantasRoutingModule,
    FormsModule
  ]
})
export class PlantasModule { }
