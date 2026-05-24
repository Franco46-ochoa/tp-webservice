import { Component, inject, signal } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-portal-peliculas',
  imports: [],
  templateUrl: './portal-peliculas.component.html',
  styleUrl: './portal-peliculas.component.scss',
})
export class PortalPeliculasComponent {
  private peliculasService = inject(PeliculasService);
  peliculas = signal<any[]>([]);
  ngOnInit(){
    this.peliculasService.getPeliculas().subscribe((data:any) => {
      this.peliculas.set(data);
    })
  }

}