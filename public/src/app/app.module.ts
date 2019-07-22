import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PetsComponent } from './pets/pets.component';
import { PetsNewComponent } from './pets-new/pets-new.component';
import { PetsInfoComponent } from './pets-info/pets-info.component';
import { PetsEditComponent } from './pets-edit/pets-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsNewComponent,
    PetsInfoComponent,
    PetsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
