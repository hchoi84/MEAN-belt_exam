import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets/pets.component';
import { PetsNewComponent } from './pets-new/pets-new.component';
import { PetsInfoComponent } from './pets-info/pets-info.component';
import { PetsEditComponent } from './pets-edit/pets-edit.component';


const routes: Routes = [
  { path: "pets", component: PetsComponent },
  { path: "pets/new", component: PetsNewComponent },
  { path: "pets/:id", component: PetsInfoComponent },
  { path: "pets/:id/edit", component: PetsEditComponent },
  
  { path: "", pathMatch: 'full', redirectTo: '/players/list'},
  { path: '**', component: PetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
