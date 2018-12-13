import { ExampleContryService } from './example-country.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [HttpClientModule],
  providers: [ExampleContryService]
})

export class ServiceModule{};
