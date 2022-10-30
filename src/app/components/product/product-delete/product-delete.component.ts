import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
    product: Product = {
        name: '',
        price: null
    };

    constructor(private productService: ProductService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        // pega o param configurado no app-route
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.readById(id).subscribe(p => {
            this.product = p;
        })
    }

    deleteProduct(): void {
        // subscribe é pra chamar algo só qnd a resposta chegar (tipo o .then())
        this.productService.delete(this.product.id).subscribe(() => {
            this.productService.showMessage('Produto Excluído!')
            this.router.navigate(['/products'])
        })
    }

    cancel(): void {
        this.router.navigate(['/products'])
    }

}
