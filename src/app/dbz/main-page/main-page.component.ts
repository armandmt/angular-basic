import { Component } from '@angular/core';
import { Personatge } from '../interfaces/dbz.interfaces';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  
  nou: Personatge = {
    nom: "Mestre Jedi",
    poder: 2000000
  }

    // get personatges():Personatge[] {

    //   return this.dbzservice.personatges;
    // }


  constructor () {  }
}
