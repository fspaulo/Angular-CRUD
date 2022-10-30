import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[myFor]'
})
/**
 * Diretiva Estrutural
 * como um v-for no vue
 * */
export class ForDirective implements OnInit {
    @Input('myForEm') numbers: number[] // pega oq vem após o 'em' no html, no caso um array

    constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    }

    ngOnInit(): void {
        for(let num of this.numbers){
            this.container.createEmbeddedView(this.template)
        }
        // console.log(this.numbers);
    }

}
