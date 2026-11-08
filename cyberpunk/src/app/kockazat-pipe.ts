import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kockazat',
})
export class KockazatPipe implements PipeTransform {
  transform(kockazat: number,): string {
    let vissza:string = `[Szint: ${kockazat}]`
    if (kockazat < 35) vissza += " [ALACSONY] Alacsony kockázat";
    else if (kockazat < 75) vissza += " [GYANÚS] Gyanús forgalom";
    else vissza += " [KRITIKUS] !!! KRITIKUS VÍRUS !!!";
    return vissza;
  }
}
