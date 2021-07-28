import { Component } from '@angular/core';



interface Personatge {

  nom: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  personatges: Personatge [] = [
    {
      nom: "Goku",
      poder: 15000
     },
     {
       nom: "Vegeta",
       poder: 8500
     }
    
    ]
  nou:Personatge = {
    nom: '',
    poder: 0
  }

  afegir () {

    if (this.nou.nom.trim().length === 0) {
      return;
    }

    console.log(this.nou)


    this.personatges.push(this.nou)
    console.log(this.personatges)
    //this.nou.nom=''  
    //this.nou.poder=0

    this.nou = {
      nom:'',
      poder:0
    }
  
  }
}
