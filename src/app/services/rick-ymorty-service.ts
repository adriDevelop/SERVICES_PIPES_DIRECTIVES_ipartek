import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPersonajes } from '../interfaces/ipersonajes';

@Injectable({
  providedIn: 'root',
})
export class RickYMortyService {

    _http: HttpClient = inject(HttpClient);
    personajes: Array<IPersonajes> = [];

    getPersonajes():any {

        // El injectable HTTP devuelve un Observable al cual nos deveremos subscribir para escuchar.
            this._http.get<any>('https://rickandmortyapi.com/api/character').subscribe({
            // Una vez subscritos, deberemos de implementar las tres funciones que tiene subscribe como argumentos que son:
            // next: Recibe como argumento los datos que nosotros vamos a recoger de nuestra petición. Es una función flecha en la cual tenemos los datos recogidos ya de la consulta.
            next: (datos => {
                for (let item of datos.results){
                    this.personajes.push(this.mapeadorPersonajes(item));
                }
            }),
            // error: Recibe como argumento el error que nosotros vamos a recoger de la petición. Es una función flecha que la llama subscribe automaticamente cuando detecta que los datos no los ha recibido correctamente.
            error: (error => {
                console.log(error);
            }),
            // complete: Es una función flecha que simplemente se llama cuando todo ha ido correctamente. Podemos poner un mensaje como "Se han recibido los datos correctamente".
            complete: () => {
                console.log("Se han recibido los datos correctamente");
            }
        });
    }

    mapeadorPersonajes(p: any): IPersonajes{   
        return {
            id: p.id,
            image: p.image,
            name: p.name,
            status: p.image,
            species: p.especies
        }
    }
  
    // elMetodo(): void{
    //     console.log("Hola desde el servicio");
    // }
}
