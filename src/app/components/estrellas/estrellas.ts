import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-estrellas',
  imports: [],
  templateUrl: './estrellas.html',
  styleUrl: './estrellas.css',
})
export class Estrellas implements OnInit{

    @Input()
    numLikes: number;

    estrellas: Array<null>;

    ngOnInit() {
        this.estrellas = new Array(this.numLikes);
    }

}
