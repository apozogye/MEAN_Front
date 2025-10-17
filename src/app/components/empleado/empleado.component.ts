import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
@Component({
  standalone: true,
  selector: 'app-empleado',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  form = new FormGroup({
    _id: new FormControl<string | null>(null),
    nombre: new FormControl<string>(''),
    cargo: new FormControl<string>(''),
    departamento: new FormControl<string>(''),
    sueldo: new FormControl<number>(0)
  })
  empleado: Empleado[] = [];

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: res => {
        this.empleado = res;
      },
      error: err => console.error(err)
    });
  }

  edit(empleado: Empleado) {
    this.form.patchValue(empleado)
  }

  delete(empleado: Empleado) {
    this.form.reset()
    this.empleadoService.deleteEmpleado(empleado._id).subscribe({
      next: res => {
        this.getEmpleados();
      },
      error: err => console.error(err)
    });
  }
  save() {
    var empleado = this.form.value
    if (empleado._id) {
      this.empleadoService.updateEmpleado(empleado._id, empleado as Empleado).subscribe({
        next: res => {
          this.getEmpleados();
          this.form.reset();
        },
        error: err => console.error(err)
      });
    } else {
      this.empleadoService.createEmpleado(empleado as Empleado).subscribe({
        next: res => {
          this.getEmpleados();
          this.form.reset();
        },
        error: err => console.error(err)
      });
    }
  }
}