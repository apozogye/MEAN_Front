import { Component } from '@angular/core';
import { EmpleadoComponent } from "./components/empleado/empleado.component";

@Component({
  selector: 'app-root',
  imports: [EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndAngular';
}
