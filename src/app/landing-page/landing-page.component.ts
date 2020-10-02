import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import{ ServiceService } from '../service.service'
//DECORADORES
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
//Clase principal del componente de la logica de negocio

export class LandingPageComponent implements OnInit {
  //Nombre : Tipo = Valor
  status : boolean = false;
  products = [];

  info : String = 'No hay datos'
  nameButton : String = 'Mostrar';


  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    // this.serviceService.getProduct("products/").subscribe((data : any[]) =>{
    //   console.log(data);
    //   this.products = data;
    // });
  }
  sendService(){
    //this.info = 'Si hay datos'
   

    
  }
  cleanService(){
    this.products = [];
  }

  showHide(){
    this.status= ! this.status;//Toggle
    if(this.status){
      this.nameButton = 'Ocultar';
    }else{
      this.nameButton = 'Mostrar'
    }
  }
  

}
