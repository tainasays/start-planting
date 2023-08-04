import { Injectable } from '@angular/core';
import { IPlanta, plantas } from './plantas/plantas';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  plantas: IPlanta[] = plantas;
  constructor() { }
getAll(){
  return this.plantas;
}
getOne(plantaId: number){
  return this.plantas.find(planta => planta.id === plantaId);
}
}
