import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/service/tarjeta.service';


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

  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService){
    
    this.form = this.fb.group({
      titular: ['', Validators.required], 
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]], 
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   
  }

  ngOnInit(): void{
    this.obtenerTarjetas(); 
  }


  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data); 
    }, error=> {
      console.log(error); 
    })
  }

  agregarTarjeta(){
    console.log(this.form)

    const tarjeta: any = {
      titular: this.form.get('titular')?.value, 
      numeroTarjeta: this.form.get('numeroTarjeta')?.value, 
      fechaExpiracion: this.form.get('fechaExpiracion')?.value, 
      cvv: this.form.get('cvv')?.value, 

    }
    this.listTarjetas.push(tarjeta); 

    this.toastr.success('La tarjeta fue registrada con éxito', 'Tarjeta Registrada');    
    this.form.reset(); 

  }

  eliminarTarjeta(index: number){
    this.listTarjetas.splice(index, 1); 
    this.toastr.error('La tarjeta fue eliminada con exito', 'La tarjeta fue eliminada');

  }

  

}
