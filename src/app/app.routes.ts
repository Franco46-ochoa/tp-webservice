import { Routes } from '@angular/router';
import { PortalPeliculasComponent } from './components/portal-peliculas/portal-peliculas.component';
import { CarMakerComponent } from './components/car-maker/car-maker.component';
import { ConversorDivisasComponent } from './components/conversor-divisas/conversor-divisas.component'
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { ApiLibreComponent } from './components/api-libre/api-libre.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'peliculas'},
    {path: 'peliculas', component: PortalPeliculasComponent},
    {path: 'car-maker', component: CarMakerComponent},
    {path: 'conversor-divisas', component: ConversorDivisasComponent},
    {path: 'text-to-speech', component: TextToSpeechComponent},
    {path: 'api-libre', component: ApiLibreComponent}


];
