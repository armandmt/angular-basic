import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { LlistatComponent } from './llistat/llistat.component';


@NgModule ({


    declarations: [

        HeroeComponent,
        LlistatComponent
    ],
    exports: [
        LlistatComponent 
    ],
    imports: [
         CommonModule
    ]


})
export  class HeroesModule {


}