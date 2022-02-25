import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{

    constructor(private activatedRoute: ActivatedRoute)
    {}

    ngOnInit(): void {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        console.log(queryParams);   
    }
}