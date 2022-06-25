import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatPositive" })
export class FormatPositivePipe implements PipeTransform {
  transform(value: number | string): string {
    const valueParsed: number = +value;
    let positiveSign = valueParsed >= 0 ? "+" : "";
    return positiveSign + value;
  }
}