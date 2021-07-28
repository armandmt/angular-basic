import { Component } from '@angular/core';


@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'



})
export class HeroeComponent {

    nom : string = 'IronMan';
    edat: number = 45;

    get nomCapitalitzat() {

        return this.nom.toUpperCase();
    }
    obtenirNom (): string {

        return `${this.nom} - ${this.edat}`
    }

    canviarNom():void  {

        this.nom = "Spiderman";

    }
    canviarEdat():void {

        this.edat = 30;
    }
     

}