import { Component, Input } from '@angular/core';
import { ArrayPersonajes } from '../../interfaces/array-personajes';
import { GeneroPipe } from '../../pipes/genero-pipe';
import { EstadoPipe } from '../../pipes/estado-pipe';

@Component({
  selector: 'app-personaje-component',
  imports: [GeneroPipe, EstadoPipe],
  templateUrl: './personaje-component.html',
  styleUrl: './personaje-component.css',
})
export class PersonajeComponent {
    @Input() personaje: ArrayPersonajes;

}
