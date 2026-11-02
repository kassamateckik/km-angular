import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'szellemNyelv',
})
export class SzellemNyelvPipe implements PipeTransform {
  
  transform(value: string, ijesztesiSzint:"kicsi"|"nagy"="kicsi"): string {
    let eredmeny:string = "";
    const maganhangzokMagas:string = "eéiíüűöő";
    const maganhangzokMely:string = "aáuúoó";
    let magas:string = "";
    let mely:string = "";

    if (ijesztesiSzint === "kicsi"){
      magas = "👻";
      mely = "🎃";
    } else {
      magas = "💀";
      mely = "🕸️";
    }

    for (const c of value) {
      if (maganhangzokMagas.includes(c.toLowerCase())) eredmeny += magas;
      else if (maganhangzokMely.includes(c.toLowerCase())) eredmeny += mely;
      else eredmeny += c;
    }

    return eredmeny;
  }
}
