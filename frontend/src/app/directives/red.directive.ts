import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRed]'
})

/**
 * Diretiva de Atributo
 * */
export class RedDirective {

  constructor(private el: ElementRef) { // referencia de um elemento
    el.nativeElement.style.color = '#E35E6B';
  }

}
