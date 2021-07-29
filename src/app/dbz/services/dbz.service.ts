import { Injectable } from "@angular/core";
import { Personatge } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

    private _personatges: Personatge [] = [
        {
          nom: "Goku",
          poder: 15000
         },
         {
           nom: "Vegeta",
           poder: 8500
         }
        
    ]

    get personatges() {

        return [...this._personatges];
    }
    constructor() {

         
    }

    afegirPersonatge(personatge:Personatge) {

        this._personatges.push(personatge);
    }

}