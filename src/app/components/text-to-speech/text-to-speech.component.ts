import { Component, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextToSpeechService } from '../../services/text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-to-speech.component.html',
  styleUrl: './text-to-speech.component.scss',
})
export class TextToSpeechComponent {
  private textToSpeechService = inject(TextToSpeechService);

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  texto = 'Today is a wonderful day to build something people love!';
  vozSeleccionada = 'alloy';
  audioUrl = signal<string | null>(null);
  cargando = signal<boolean>(false);

  vocesOpciones = [
    { value: 'alloy',   label: 'Alloy (Predeterminado)' },
    { value: 'echo',    label: 'Echo (Voz Masculina)'   },
    { value: 'fable',   label: 'Fable (Narrativo)'      },
    { value: 'onyx',    label: 'Onyx (Grave)'           },
    { value: 'nova',    label: 'Nova (Voz Femenina)'    },
    { value: 'shimmer', label: 'Shimmer (Claro)'        }
  ];

  generarAudio() {
    const textoLimpio = this.texto.trim();

    if (!textoLimpio) {
      alert('Por favor, escribe un mensaje en el formulario.');
      return;
    }

    this.cargando.set(true);

    if (this.audioUrl()) {
      URL.revokeObjectURL(this.audioUrl()!);
      this.audioUrl.set(null);
    }

    this.textToSpeechService.generarAudio(textoLimpio, this.vozSeleccionada).subscribe({
      next: (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        this.audioUrl.set(url);
        this.cargando.set(false);

        // ✅ Forzamos al elemento <audio> a recargar con la nueva URL
        setTimeout(() => {
          if (this.audioPlayer?.nativeElement) {
            this.audioPlayer.nativeElement.load();
            this.audioPlayer.nativeElement.play();
          }
        }, 0);
      },
      error: (err) => {
        console.error('Error en el servicio de OpenAI TTS:', err);
        this.cargando.set(false);
        alert('Error: Verifica tu suscripción en RapidAPI.');
      }
    });
  }
}