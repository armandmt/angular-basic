import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonatgesComponent } from './personatges/personatges.component';
import { AfegirhComponent } from './afegirh/afegirh.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonatgesComponent,
    AfegirhComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService  
  ]
})
export class DbzModule { }
