import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titkosito',
})
export class TitkositoPipe implements PipeTransform {
  transform(value: string, titkositott: boolean): string {
    if (!titkositott) return value.toUpperCase();
    const maganhangzok:string = "aáeéiíoóöőuúüű"; 
    let vissza:string = ""; 
    for (let i = value.length - 1; i >= 0; i--) {
      if (maganhangzok.includes(value[i])) vissza += "💀";
      else vissza += value[i];
    }
    return vissza;
  }
}
