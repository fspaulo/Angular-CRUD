import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Product} from "../product.model";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = {
      name: '',
      price: null
    };

    constructor(private productService: ProductService, private router: Router) {
    }

    // Equivale ao created() do vue
    ngOnInit(): void {
    }

    createProduct(): void {
        // subscribe é pra chamar algo só qnd a resposta chegar (tipo o .then())
        this.productService.create(this.product).subscribe(() => {
            this.productService.showMessage('Produto criado!')
            this.router.navigate(['/products'])
        })
    }

    cancel(): void {
        this.router.navigate(['/products'])
    }
}
