import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, switchMap } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    products: any[] = [];
    productSearchFrom!: FormGroup;

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.initializeForm();

        this.productSearchFrom.get('searchTerm')?.valueChanges
            .pipe(
                debounceTime(500),
                switchMap(value => {
                    return this.productService.searchByTerm(value);
                })
            ).subscribe(data => {
                this.products = data;
            }, error => {
                console.log(error);
                // this.products = [];
            });
    }

    private initializeForm(): void {
        this.productSearchFrom = new FormGroup({
            searchTerm: new FormControl(null)
        });
    }
}