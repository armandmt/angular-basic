import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
