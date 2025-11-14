import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';

@Component({
  selector: 'app-corazon',
  imports: [NgClass],
  templateUrl: './corazon.html',
  styleUrl: './corazon.css',
})

export class Corazon {

    @Input()
    instrumento: Instrumentos;

    agregarAlCarrito = (instrumento: Instrumentos) => {
        if (instrumento.agregadoAlCarrito){
            instrumento.agregadoAlCarrito = false;
        }else{
            instrumento.agregadoAlCarrito = true;
        }
    }
}
