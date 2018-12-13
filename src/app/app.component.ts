import { Component } from '@angular/core';
import { environment } from '../environments/environment';

const envi = environment.APIEndpoint;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Frontend';
}

console.log("environment: " , envi);
