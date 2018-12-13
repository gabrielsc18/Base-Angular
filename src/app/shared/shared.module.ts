import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
  ],
})

export class SharedModule{};
