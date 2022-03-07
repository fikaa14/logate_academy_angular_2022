import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, Observable, pipe, Subject, switchMap, takeUntil } from "rxjs";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy {

    products?: any[];
    productSearchForm!: FormGroup;
    page: number = 0;
    size: number = 4;
    memoryLeakSubject = new Subject();
    enableButton: boolean = false;


    constructor(
        private productService: ProductService
    ) { }

    ngOnDestroy(): void {
        this.products = [];
        this.memoryLeakSubject.complete();
    }

    loadMore() {
        this.page++;
        const searchTerm:string = this.productSearchForm.get('searchTerm')?.value;
        const products$: Observable<any> = this.productService.searchByTermPageable(searchTerm, this.page, this.size);
        products$.pipe(
            takeUntil(this.memoryLeakSubject)
        ).subscribe(data => {
            this.products = this.products?.concat(data);
            if(data.length < this.size) {
                this.enableButton = true;
            } else {
                this.enableButton = false;
            }
            console.log("Products length: ", this.products?.length);
        });
    }

    ngOnInit(): void {
        this.initializeForm();

        this.productSearchForm.get('searchTerm')?.valueChanges
            .pipe(
                debounceTime(500),
                switchMap(value => {
                    this.page = 0;
                    return this.productService.searchByTermPageable(value, this.page, this.size);  
                })
            ).subscribe(data => {
                this.products = data;
                if(this.products?.length === 4) {
                    this.enableButton = false;
                }
            }, error => {
                console.log(error);
                // this.products = [];
            });
    }

    private initializeForm(): void {
        this.productSearchForm = new FormGroup({
            searchTerm: new FormControl(null)
        });
    }
}