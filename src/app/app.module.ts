import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { UserPreviewComponent } from './admin/users/preview/user-preview.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundDetailComponent } from './playground-detail/playground-detail.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ProgramComponent } from './program/program.component';
import { StudentService } from './shared/student.service';
import { StudentDetailComponent } from './student/detail/student-detail.component';
import { StudentListComponent } from './student/list/student-list.component';
import { StudentComponent } from './student/student.component';
import { RoleComponent } from './admin/roles/role.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundComponent,
    StudentComponent,
    StudentListComponent,
    StudentDetailComponent,
    ProgramComponent,
    PlaygroundDetailComponent,
    ContactComponent,
    AboutUsComponent,
    AdminComponent, 
    UserPreviewComponent, 
    RoleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StudentService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
