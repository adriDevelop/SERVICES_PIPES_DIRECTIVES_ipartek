import { Component, inject, OnInit } from '@angular/core';
import { RickYMortyService } from '../../services/rick-ymorty-service';
import { IPersonajes } from '../../interfaces/ipersonajes';

@Component({
  selector: 'app-rick-morty-list',
  imports: [],
  templateUrl: './rick-morty-list.html',
  styleUrl: './rick-morty-list.css',
})
export class RickMortyList implements OnInit{

    private _rickMortyService: RickYMortyService = inject(RickYMortyService);
    private personajes: Array<IPersonajes> = [];
    
    
    ngOnInit(): void{
        this.devuelveMetodoDeInstancia();
    }
    
    devuelveMetodoDeInstancia(): void {
        this._rickMortyService.getPersonajes();
        setTimeout(() => {
            this.personajes = this._rickMortyService.personajes;
            console.log(this.personajes);
        }, 3000)

    }
    
}
