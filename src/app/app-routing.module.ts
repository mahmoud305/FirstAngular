import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortofoliaComponent } from './portofolia/portofolia.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' ,pathMatch:'full' },
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'portofolia' , component:PortofoliaComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'**' ,component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
