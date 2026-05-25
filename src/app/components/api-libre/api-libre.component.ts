import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiLibreService } from '../../services/api-libre.service';

@Component({
  selector: 'app-api-libre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api-libre.component.html',
  styleUrl: './api-libre.component.scss'
})
export class ApiLibreComponent {
  private qrService = inject(ApiLibreService);

  textoIngresado = signal<string>('');
  qrResultadoUrl = signal<string>('');
  cargando = signal<boolean>(false);

  generarQR() {
    if (!this.textoIngresado().trim()) return;
    
    this.cargando.set(true);
    const urlGenerada = this.qrService.getQrUrl(this.textoIngresado());
    
    setTimeout(() => {
      this.qrResultadoUrl.set(urlGenerada);
      this.cargando.set(false);
    }, 600);
  }

  limpiarFormulario() {
    this.textoIngresado.set('');
    this.qrResultadoUrl.set('');
  }
}