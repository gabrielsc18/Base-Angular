import { NgModule } from '@angular/core';
import { PollAddComponent } from './poll-add/poll-add.component';

//Modulo de shared
import { SharedModule } from './../shared/shared.module';

//Importantisimo tiene todas las directivas de angular
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  PollAddComponent
  ],
  exports: [
    PollAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})

export class PagesModule{};
