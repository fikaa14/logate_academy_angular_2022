import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-playground-detail',
    templateUrl: './playground-detail.component.html'
})
export class PlaygroundDetailComponent implements OnInit{

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        console.log(params);
        
    }
}