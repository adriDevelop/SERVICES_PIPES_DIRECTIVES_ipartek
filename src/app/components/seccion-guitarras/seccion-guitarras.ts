import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { ImageDirective } from '../../directives/image-directive';
import { NgClass } from '@angular/common';
import { StockPipePipe } from '../../pipes/stock-pipe-pipe';
import { EurosPipe } from '../../pipes/euros-pipe';

@Component({
  selector: 'app-seccion-guitarras',
  imports: [ImageDirective, NgClass, StockPipePipe, EurosPipe],
  templateUrl: './seccion-guitarras.html',
  styleUrl: './seccion-guitarras.css',
})
export class SeccionGuitarras {

    aGuitarras:Array<Instrumentos> = [

    new Instrumentos(1,"Gibson","Les Paul Standard",2190,["Cuerpo caoba","Tapa de arce","Binding en crema"],0,10,"g1.jpg", false),
    new Instrumentos(2,"Gibson","SG Standard",1325,["Cuerpo caoba","Mastil Caoba","Diapasón de palisandro"],8,5,"g2.jpg", false),
    new Instrumentos(3,"Fender","American Telecaster",1800,["Cuerpo de arce","Mastil de arce","Binding en negro"],3,14,"", false)

    ]

    agregarAlCarrito(instrumento: Instrumentos): void {
        if (instrumento.agregadoAlCarrito){
            instrumento.agregadoAlCarrito = false;
        }else{
            instrumento.agregadoAlCarrito = true;
        }
    }
}
