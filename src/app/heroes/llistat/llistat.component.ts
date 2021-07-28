import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
})
export class LlistatComponent  {

  heroes: string [] = ["Spiderman","IronMan","Hulk","Thor"];
  heroisCaiguts : string []=[];
  esborrarHeroi() {

      console.log("Esborrem heroi")
      
      this.heroisCaiguts.unshift(this.heroes.shift() || '');


  }
  

}
