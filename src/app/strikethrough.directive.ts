import { Directive } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor() {
    // this.elem.nativeElement.style.textDecoration='line-through';
   }

}
