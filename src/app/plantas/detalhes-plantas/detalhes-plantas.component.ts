import { Component, OnInit } from '@angular/core';
import { PlantasService } from 'src/app/plantas.service';
import { IPlanta, IPlantaCarrinho } from '../plantas';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-plantas',
  templateUrl: './detalhes-plantas.component.html',
  styleUrls: ['./detalhes-plantas.component.css']
})
export class DetalhesPlantasComponent implements OnInit {

  planta: IPlanta | undefined;
  quantidade = 1;

  constructor(
    private plantasService: PlantasService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
    ) { }
      
   
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const plantaId = Number(routeParams.get('id'));
    this.planta = this.plantasService.getOne(plantaId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const planta: IPlantaCarrinho = {
      ...this.planta!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(planta);
  }
}
