import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasComponent } from './plantas.component';
import { DetalhesPlantasComponent } from './detalhes-plantas/detalhes-plantas.component';

const routes: Routes = [
  { path: '', component: PlantasComponent },
  { path: ':id', component: DetalhesPlantasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantasRoutingModule { }
