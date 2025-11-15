import { Component} from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { FichaInstrumento } from '../ficha-instrumento/ficha-instrumento';

@Component({
  selector: 'app-seccion-guitarras',
  imports: [FichaInstrumento],
  templateUrl: './seccion-guitarras.html',
  styleUrl: './seccion-guitarras.css',
})
export class SeccionGuitarras {

    aGuitarras:Array<Instrumentos> = [

    new Instrumentos(1,"Gibson","Les Paul Standard",2190,["Cuerpo caoba","Tapa de arce","Binding en crema"],0,10,"g1.jpg", false),
    new Instrumentos(2,"Gibson","SG Standard",1325,["Cuerpo caoba","Mastil Caoba","Diapasón de palisandro"],8,5,"g2.jpg", false),
    new Instrumentos(3,"Fender","American Telecaster",1800,["Cuerpo de arce","Mastil de arce","Binding en negro"],3,14,"", false)

    ];

    aBajos: Array<Instrumentos> = [
        new Instrumentos(1,"Harley Benton","JB-20 SB Standard Series",109,["Cuerpo de madera de álamo","TMástil atornillado de arce","Diapasón de laurel"],20,10,"bajo1.jpg", false)
    ]

}
