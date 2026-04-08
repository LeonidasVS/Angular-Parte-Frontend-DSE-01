import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  imports: [CommonModule],
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})
export class ClientesList {
  Clientes=[
    {codigo: 'C001', nombre: 'Juan Perez', dui: '12345678-9', telefono: '5555-1234', estado: 'Activo'},
    {codigo: 'C002', nombre: 'Maria Lopez', dui: '98765432-1', telefono: '5555-5678', estado: 'Inactivo'},
    {codigo: 'C003', nombre: 'Carlos Gomez', dui: '45678912-3', telefono: '5555-9012', estado: 'Activo'},
  ]
}
