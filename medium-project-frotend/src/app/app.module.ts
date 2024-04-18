import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './companents/navbar/navbar.component';
import { GetAllComponent } from './companents/get-all/get-all.component';
import { CreateComponent } from './companents/create/create.component';
import { GetByIdComponent } from './companents/get-by-id/get-by-id.component';
import { UpdateComponent } from './companents/update/update.component';
import { DeleteComponent } from './companents/Delete/delete.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllComponent,
    CreateComponent,
    GetByIdComponent,
    UpdateComponent,
    DeleteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
