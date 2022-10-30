import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-update',
    templateUrl: './product-update.component.html',
    styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
    product: Product = {
        name: '',
        price: null
    };

    // id = 0

    constructor(private productService: ProductService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        // pega o param configurado no app-route
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.readById(id).subscribe(p => {
            this.product = p;
        });
    }

    updateProduct(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        // subscribe é pra chamar algo só qnd a resposta chegar (tipo o .then())
        this.productService.update(id, this.product).subscribe(() => {
            this.productService.showMessage('Produto atualizado com sucesso!');
            this.router.navigate(['/products']);
        });
    }

    cancel(): void {
        this.router.navigate(['/products']);
    }

}
