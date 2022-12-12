import { Component } from '@angular/core';
import { Forms } from './models/Forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA35_EJ2';

  nombre: string = "";
  email: string = "";
  mensaje: string = "";
  spam: number = 0;
  a:number = 0;
  b:number = 0;
  resultSpam : number =0;
  msn: Forms | null = null;

  ngOnInit(): void {
    this.a = this.random();
    this.b = this.random();
    this.resultSpam = this.a + this.b;
  }


  random(): number{
    return Math.floor(Math.random() * 10)+1;
  }


  send(): void{
    if(this.nombre != "" && this.email != "" && this.mensaje != "" && this.spam == this.resultSpam){
      const form : Forms = {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje
      }
      this.msn = form;
    }else alert("Complete todos los datos");
  }


}
