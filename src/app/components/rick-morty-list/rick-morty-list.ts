import { Component, inject, OnInit } from '@angular/core';
import { RickYMortyService } from '../../services/rick-ymorty-service';
import { ArrayPersonajes } from '../../interfaces/array-personajes';
import { PersonajeComponent } from '../personaje-component/personaje-component';
import { SearchBarComponent } from "../search-bar-component/search-bar-component";
import { SeccionGuitarras } from "../seccion-guitarras/seccion-guitarras";

@Component({
  selector: 'app-rick-morty-list',
  imports: [PersonajeComponent, SearchBarComponent, SeccionGuitarras],
  templateUrl: './rick-morty-list.html',
  styleUrl: './rick-morty-list.css',
})
export class RickMortyList implements OnInit{

    private _rickMortyService: RickYMortyService = inject(RickYMortyService);
    personajes: Array<ArrayPersonajes> = [];
    
    
    ngOnInit(): void{
        this.devuelveMetodoDeInstancia();
    }
    
    devuelveMetodoDeInstancia(): void {
       this._rickMortyService.getPersonajes().subscribe({
        next: (data: any) => {
            data.results.forEach((personaje: any) => {
                this.personajes.push(this._rickMortyService.mapeadorPersonajes(personaje));
                console.log(personaje);
            });
        }
       });
    }
    
    devuelvePersonajesPorNombre(nombre: string): void {
        this._rickMortyService.getPersonajesPorNombre(nombre).subscribe({
            next: (data:any) => {
                data.results.forEach((personaje: any) => {
                    this.personajes.push(this._rickMortyService.mapeadorPersonajes(personaje));
                });
            }
        })
    }
}
