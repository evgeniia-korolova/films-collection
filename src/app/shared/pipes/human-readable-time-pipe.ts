import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadableTimePipe',
})
export class HumanReadableTimePipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value || value <= 0) return 'Duration unknown';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours}h ${minutes}min`;
  }
}
