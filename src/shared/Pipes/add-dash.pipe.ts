import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDash',
})
export class AddDashPipe implements PipeTransform {
  transform(value: string) {
    return value.replace(' ', '-');
  }
}
