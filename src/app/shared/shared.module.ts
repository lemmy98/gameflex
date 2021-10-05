import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
