import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Modulo paginas
import { PagesModule } from './pages/pages.module';

//Modulo de servicios
import { ServiceModule } from './services/service.module';

//Rutas
import { APP_ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ServiceModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
