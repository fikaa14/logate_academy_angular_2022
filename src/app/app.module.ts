import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundDetailComponent } from './playground-detail/playground-detail.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ProgramComponent } from './program/program.component';
import { StudentService } from './shared/student.service';
import { StudentDetailComponent } from './student/detail/student-detail.component';
import { StudentListComponent } from './student/list/student-list.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundComponent,
    StudentComponent,
    StudentListComponent,
    StudentDetailComponent,
    ProgramComponent,
    PlaygroundDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
