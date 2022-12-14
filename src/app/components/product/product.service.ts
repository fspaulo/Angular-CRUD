import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root' // padrão singleton
})
/**
 * Service é responsável pelas tratativas de lógicas, banco....
 * */
export class ProductService {
    baseURL = 'http://localhost:3001/products';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: isError ? ['msg-error'] : ['msg-success']
        });
    }

    create(product: Product): Observable<Product> {
        // retorna um Observable de Produto
        return this.http.post<Product>(this.baseURL, product).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e)) // trata errors
        );
    }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURL).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e)) // trata errors
        );
    }

    readById(id: number): Observable<Product> {
        const url = `${this.baseURL}/${id}`;
        return this.http.get<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e)) // trata errors
        );
    }

    update(id: number, product: Product): Observable<Product> {
        // retorna um Observable de Produto
        const url = `${this.baseURL}/${id}`;

        return this.http.put<Product>(url, product).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e)) // trata errors
        );
    }

    delete(id: number): Observable<Product> {
        const url = `${this.baseURL}/${id}`;

        return this.http.delete<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e)) // trata errors
        );
    }

    errorHandler(e: any): Observable<any> {
        console.log(e);
        // Verificar os erros aqui 400...
        this.showMessage('Ocorreu um Erro!', true);
        return EMPTY;
    }
}
