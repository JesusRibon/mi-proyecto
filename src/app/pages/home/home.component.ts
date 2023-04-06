import { Component } from '@angular/core';
import { StartService } from 'src/app/shared/start/start.service';
import { Cliente } from 'src/app/shared/start/model/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public startWars: any;
  public cliente: Cliente = {idcliente: "",nombre:"",apellido:"",estado:true};

  constructor(private  _startService: StartService){

  }

  getAll(): void {
    this._startService.gettAll().subscribe(item =>{
      this.startWars = item;

    })
  }
  getById(id: string): void {
    this._startService.getById(id).subscribe(item =>{
      this.cliente = item;
      console.log(this.cliente);  

    })
  }
}
