import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carouselIndicator'
})
export class CarouselIndicatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
