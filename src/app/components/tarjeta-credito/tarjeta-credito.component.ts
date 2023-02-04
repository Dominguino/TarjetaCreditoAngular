import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {

  listTarjetas: any[] = [
    {titular: 'Juan Perez', numeroTarjeta: '234923485423', fechaExpiracion: '11/23', cvv: '123'},
    {titular: 'Miguel Gonzalez', numeroTarjeta: '256348093423', fechaExpiracion: '11/25', cvv: '453'},
    {titular: 'Miguel Gonzalez', numeroTarjeta: '256348093423', fechaExpiracion: '11/25', cvv: '453'}

  ]; 
  form: FormGroup; 

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: [''], 
      numeroTarjeta: [''],
      fechaExpiracion: [''], 
      cvv: ['']
    })
   
  }

  ngOnInit(): void{}


  agregarTarjeta(){
    console.log(this.form)
  }

  

}
