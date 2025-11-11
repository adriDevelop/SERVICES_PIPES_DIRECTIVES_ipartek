import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArrayPersonajes } from '../interfaces/array-personajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickYMortyService {

    _http: HttpClient = inject(HttpClient);

    getPersonajes():Observable<ArrayPersonajes> {
        return this._http.get<any>('https://rickandmortyapi.com/api/character');
    }

    getPersonajesPorNombre(nombre: string): Observable<ArrayPersonajes>{
        return this._http.get<any>(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
    }

    mapeadorPersonajes(p: any): ArrayPersonajes{   
        return {
            id: p.id,
            image: p.image,
            name: p.name,
            genero: p.gender,
            status: p.status,
            species: p.especies
        }
    }
  
    // elMetodo(): void{
    //     console.log("Hola desde el servicio");
    // }
}
