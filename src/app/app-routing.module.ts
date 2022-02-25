import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundDetailComponent } from "./playground-detail/playground-detail.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [
    {
        path:'student', 
        component: StudentComponent
    },
    {
        path:'playground',
        component: PlaygroundComponent
    },
    {
        path: "playground-detail/:id",
        component: PlaygroundDetailComponent
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