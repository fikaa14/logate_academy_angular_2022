import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Student } from "../models/student.module";

@Component({
    selector: 'app-student-detail',
    templateUrl: './student-details.component.html'
})
export class StudentDetailComponent{

    @Input("student") student?: Student;
    @Output("somethingHappenedInDetailComponent") eventEmitter = new EventEmitter<string>();

    constructor() { }

    notifyParentComponent(): void {
        this.eventEmitter.emit("something happened with student " + this.student?.firstName);
    }
}