import { Component, Input } from '@angular/core';
import { ArrayPersonajes } from '../../interfaces/array-personajes';

@Component({
  selector: 'app-personaje-component',
  imports: [],
  templateUrl: './personaje-component.html',
  styleUrl: './personaje-component.css',
})
export class PersonajeComponent {
    @Input() personaje: ArrayPersonajes;

}
