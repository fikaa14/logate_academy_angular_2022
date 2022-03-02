import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdminComponent } from "./admin/admin.component";
import { RoleComponent } from "./admin/roles/role.component";
import { UserPreviewComponent } from "./admin/users/preview/user-preview.component";
import { isAllreadyAuthenticatedGuard } from "./auth/guards/is-already-authenticated.guard";
import { IsAuthenticatedGuard } from "./auth/guards/is-authenticated.guard";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { PlaygroundDetailComponent } from "./playground-detail/playground-detail.component";
import { PlaygroundDetailResolver } from "./playground-detail/playground-detail.resolver";
import { PlaygroundComponent } from "./playground/playground.component";
import { PlaygroundGuard } from "./playground/playground.gurad";
import { RegisterComponent } from "./register/register.component";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [
    {
        path:'student', 
        component: StudentComponent
    },
    {
        path:'playground',
        component: PlaygroundComponent,
        data: { allowEdit: true, hasAcces: true },
        canActivate: [ PlaygroundGuard ]
    },
    {
        path: "playground-detail/:id",
        component: PlaygroundDetailComponent,
        resolve: { param1: PlaygroundDetailResolver}
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [isAllreadyAuthenticatedGuard]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [IsAuthenticatedGuard],
        canActivateChild: [],
        children: [
            { path: 'users', component: UserPreviewComponent },
            { path: 'roles', component: RoleComponent}
        ]
    },
    {
        path:'**',
        redirectTo: 'student'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}