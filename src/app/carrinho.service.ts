import { Injectable } from '@angular/core';
import { IPlantaCarrinho } from './plantas/plantas';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IPlantaCarrinho[] =[];

  constructor() { }

  obtemCarrinho(){
   this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
   return this.itens;
    
  }

  adicionarAoCarrinho(planta: IPlantaCarrinho) {
    this.itens.push(planta);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  removerPlantaCarrinho(plantaId: number) {
    this.itens = this.itens.filter(item => item.id !== plantaId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
