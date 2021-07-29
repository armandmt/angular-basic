import { Component, Input } from '@angular/core';
import { Personatge } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-afegirh',
  templateUrl: './afegirh.component.html',
})
export class AfegirhComponent  {


  @Input() nou:Personatge = {
    nom: '',
    poder: 0
  };
  // @Output() onNouPersonatge: EventEmitter<Personatge> = new EventEmitter();


  constructor(private dbzservice: DbzService) {


  }
  afegir () {

    if (this.nou.nom.trim().length === 0) {
      return;
    }
    // this.onNouPersonatge.emit(this.nou);

    this.dbzservice.afegirPersonatge(this.nou);

    //this.nou.nom=''  
    //this.nou.poder=0

    this.nou = {
      nom:'',
      poder:0
    }
  
  }

}

