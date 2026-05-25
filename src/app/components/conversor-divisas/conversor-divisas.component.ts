import { Component, inject, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-conversor-divisas',
  imports: [FormsModule],
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.scss'],
})
export class ConversorDivisasComponent {
  private conversorService = inject(ConversorService);
  tasas = signal<Record<string, number>>({});
  monto = signal<number>(0);
  monedaOrigen = signal<string>('USD');
  monedaDestino = signal<string>('EUR');
  codigoOrigen = signal<string>('USD');
  codigoDestino = signal<string>('EUR');
  resultado = signal<number>(0);
  resultadoFormateado = signal<string>('0.00');
  monedasDisponibles = signal<string[]>([]);

  constructor() {
    this.conversorService.getTasas().subscribe((data: any) => {
      const tasasMap: Record<string, number> = {};
      Object.keys(data.quotes).forEach((key) => {
        const moneda = key.replace('USD', '');
        tasasMap[moneda] = data.quotes[key];
      });
      tasasMap['USD'] = 1;
      this.tasas.set(tasasMap);
      this.monedasDisponibles.set(Object.keys(tasasMap).sort());
    });

    effect(() => {
      const montoValor = this.monto();
      const origen = this.monedaOrigen();
      const destino = this.monedaDestino();
      const tasasActuales = this.tasas();

      if (tasasActuales[origen] && tasasActuales[destino]) {
        const montoEnUSD = montoValor / tasasActuales[origen];
        const resultadoCalc = montoEnUSD * tasasActuales[destino];
        this.resultado.set(resultadoCalc);
        this.resultadoFormateado.set(resultadoCalc.toFixed(2));
      }
    });
  }

  onMontoChange(valor: string) {
    this.monto.set(parseFloat(valor) || 0);
  }

  onCodigoOrigenChange(valor: string) {
    const codigo = valor.toUpperCase();
    this.codigoOrigen.set(codigo);
    this.monedaOrigen.set(codigo);
  }

  onCodigoDestinoChange(valor: string) {
    const codigo = valor.toUpperCase();
    this.codigoDestino.set(codigo);
    this.monedaDestino.set(codigo);
  }

  onMonedaOrigenChange(valor: string) {
    this.monedaOrigen.set(valor);
    this.codigoOrigen.set(valor);
  }

  onMonedaDestinoChange(valor: string) {
    this.monedaDestino.set(valor);
    this.codigoDestino.set(valor);
  }
}