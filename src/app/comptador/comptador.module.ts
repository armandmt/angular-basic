import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComptadorComponent } from './comptador/comptador.component';


@NgModule ({


    declarations: [
            ComptadorComponent  
    ],
    exports: [
         ComptadorComponent
            ],
    imports: [
         CommonModule
    ]


})
export  class ComptadorModule {


}