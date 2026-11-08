import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kodolo',
})
export class KodoloPipe implements PipeTransform {
  transform(filenev: string, vedett: boolean): string {
    if (vedett) {
      let vissza:string = "[TITKOS]";
      const kulonlegesek:string = "aáeéiíoóöőuúüű0123456789";
      for (const k of filenev) {
        if (kulonlegesek.includes(k)) vissza += "#";
        else vissza += k;
      }
      return vissza; 
    } else {
      return filenev.toUpperCase() + ".EXE";
    }
  }
}
