import { Component, OnInit } from '@angular/core';
import { IPlanta } from './plantas';
import { PlantasService } from '../plantas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: IPlanta[] | undefined;

  constructor(
    private plantasService: PlantasService,
    private route: ActivatedRoute
  ) { }
  

    ngOnInit(): void {
      const plantas = this.plantasService.getAll();
      this.route.queryParamMap.subscribe(params => {
        const descricao = params.get("descricao")?.toLowerCase();

        if (descricao) {
          this.plantas = plantas.filter(planta => planta.descricao.toLowerCase().includes(descricao));
          return;
        }

        this.plantas = plantas;
      })
    }
 

}
