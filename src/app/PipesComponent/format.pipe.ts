import { Pipe, PipeTransform } from "@angular/core";

// interface PipeTransform {
//   transform(value: any, ...args: any[]) {

//   }
// }

@Pipe({
  name: 'format'
})

export class FormatPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value.toString().replace('.', ',');
  }
}