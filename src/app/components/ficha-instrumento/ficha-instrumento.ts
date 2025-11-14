import { Component, Input } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { ImageDirective } from '../../directives/image-directive';
import { NgClass } from '@angular/common';
import { StockPipePipe } from '../../pipes/stock-pipe-pipe';
import { EurosPipe } from '../../pipes/euros-pipe';
import { Corazon } from '../corazon/corazon';
import { Estrellas } from '../estrellas/estrellas';

@Component({
  selector: 'app-ficha-instrumento',
  imports: [ImageDirective, NgClass, StockPipePipe, EurosPipe, Corazon, Estrellas],
  templateUrl: './ficha-instrumento.html',
  styleUrl: './ficha-instrumento.css',
})
export class FichaInstrumento {

    @Input()
    instrumento: Instrumentos;

}
