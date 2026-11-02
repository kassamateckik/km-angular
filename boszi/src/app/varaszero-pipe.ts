import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'varaszero',
})
export class VaraszeroPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 40) return `[Erő: ${value}] 🟢 Gyenge főzet`;
    if (value < 80) return `[Erő: ${value}] 🟡 Veszélyes anyag`;
    else return `[Erő: ${value}] 🔴 ☠️ HALÁLOS MÁGIA ☠️`;
  }
}
