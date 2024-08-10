import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyAlphabets]'
})
export class OnlyAlphabetsDirective {

  constructor() { }
  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const sanitized = input.value.replace(/[^a-zA-Z]*/g, '');
    input.value = sanitized;
  }
}
