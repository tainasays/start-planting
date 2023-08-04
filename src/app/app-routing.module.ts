import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { DetalhesPlantasComponent } from './plantas/detalhes-plantas/detalhes-plantas.component';

const routes: Routes = [{ path: 'plantas', loadChildren: () => import('./plantas/plantas.module').then(m => m.PlantasModule) },
{ path: "", redirectTo: "plantas", pathMatch: 'full'},
{ path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
{ path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
{ path: "**", component: NaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
