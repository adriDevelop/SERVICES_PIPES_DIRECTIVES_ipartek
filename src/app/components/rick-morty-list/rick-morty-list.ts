import { Component, inject, OnInit } from '@angular/core';
import { RickYMortyService } from '../../services/rick-ymorty-service';

@Component({
  selector: 'app-rick-morty-list',
  imports: [],
  templateUrl: './rick-morty-list.html',
  styleUrl: './rick-morty-list.css',
})
export class RickMortyList implements OnInit{

    private _rickMortyService: RickYMortyService = inject(RickYMortyService);
    
    
    ngOnInit(): void{
        this.devuelveMetodoDeInstancia();
    }
    
    devuelveMetodoDeInstancia(): void {
        this._rickMortyService.elMetodo();
    }
    
}
