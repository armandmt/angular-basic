import { Component } from '@angular/core';

@Component ({
    selector: 'app-comptador' ,
    template: `
    
    <h1>{{titol}}</h1>
    <h3>La base és: <strong>{{ base }}</strong></h3>
    <button (click) = "acumular(base)"> +{{ base }} </button>

    <span>{{numero}}</span>

    <button (click) = "acumular(-base)"> -{{ base }} </button>
    `
})
export class ComptadorComponent {

    titol:string = 'Bon dia';
    numero:number = 10;
    base:number = 5;
    // sumar() {
  
    //   this.numero ++;
    // }
  
    // restar() {
  
    //   this.numero --;
    // }
    acumular (valor:number){
      this.numero +=valor;
    }
     
}