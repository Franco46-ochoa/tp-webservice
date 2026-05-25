import { Component,inject, signal } from '@angular/core';
import { CarmakerService } from '../../services/carmaker.service';

@Component({
  selector: 'app-car-maker',
  imports: [],
  templateUrl: './car-maker.component.html',
  styleUrl: './car-maker.component.scss',
})
export class CarMakerComponent {
  private carMarkerService = inject(CarmakerService);
  marcas = signal<any[]>([]);
  modelos = signal<any[]>([]);
marcaSeleccionada: any;
  ngOnInit(){
    this.carMarkerService.getMarcas().subscribe((data:any) => {
      this.marcas.set(data);
    })
  }
  verModelos(marca: string){
    this.carMarkerService.getModelos(marca).subscribe((data:any) => {
      this.modelos.set(data);
    });
  }
}
