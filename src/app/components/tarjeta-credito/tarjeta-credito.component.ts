import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {

  listTarjetas: any[] = [
    {titular: 'Juan Perez', numeroTarjeta: '234923485423', fechaExpiracion: '11/23', cvv: '123'},
    {titular: 'Miguel Gonzalez', numeroTarjeta: '256348093423', fechaExpiracion: '11/25', cvv: '453'}

  ]; 

}
