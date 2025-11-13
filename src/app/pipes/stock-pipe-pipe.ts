import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockPipe'
})
export class StockPipePipe implements PipeTransform {

  transform(value: number) {
    if (value <= 0){
        return "Sin Stock"
    }else if (value <= 3 && value > 0){
        return "Quedan pocas existencias"
    }else {
        return "En Stock";
    }
  }

}
