import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modules';
import { ComptadorModule } from './comptador/comptador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ComptadorModule,
    DbzModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
