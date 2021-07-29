import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personatges',
  templateUrl: './personatges.component.html',
})
export class PersonatgesComponent   {

  // @Input()  personatgets:Personatge [] = [];

  get personatges() {
    return this.dbzservice.personatges;
  }
  constructor(private dbzservice: DbzService ) {

  }

}
