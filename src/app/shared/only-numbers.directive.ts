import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyNumbers]'
})
export class OnlyNumbersDirective {

  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const sanitized = input.value.replace(/[^0-9]*/g, '');
    input.value = sanitized;
  }
}
