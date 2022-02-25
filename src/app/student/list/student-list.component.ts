import { Component } from "@angular/core";
import { StudentService } from "src/app/shared/student.service";
import { Student } from "../models/student.module";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent{

    selectedStudent?: Student;

    students: Student[] = [
        { firstName: "Marko", lastName: "Markovic", program: "Java", age: 21},
        { firstName: "Janko", lastName: "Jankovic", program: "WEB", age: 22},
        { firstName: "Petar", lastName: "Petrovic", program: "ML", age: 37}
    ]

    constructor(private studentSerivce: StudentService) {}
    
    showDetails(student: Student): void {
        this.selectedStudent = student;
    }

    handleChangeInDetailComponent(value: any): void{
        console.log(value);
    }

    banStudent(student: Student): void{
        this.studentSerivce.publish(student);
    }
}