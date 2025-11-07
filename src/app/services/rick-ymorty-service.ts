import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickYMortyService {
  
    elMetodo(): void{
        console.log("Hola desde el servicio");
    }
}
