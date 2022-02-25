import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit{

    constructor(private activatedRoute: ActivatedRoute)
    {}

    ngOnInit(): void {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        console.log(queryParams);
    }
}
