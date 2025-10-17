import { Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full'
  },
  {
    path: 'empleados',
    component: EmpleadoComponent,
    title: 'Gestión de Empleados'
  },
  {
    path: '**',
    redirectTo: '/empleados'
  }
];