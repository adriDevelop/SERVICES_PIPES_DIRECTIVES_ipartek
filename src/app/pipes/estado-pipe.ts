import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: string): string {
    
    if (value == "Alive"){
        return "vivo";
    }else if (value=="Dead"){
        return "muerto";
    }else {
        return "unknown"
    }
  }

}
