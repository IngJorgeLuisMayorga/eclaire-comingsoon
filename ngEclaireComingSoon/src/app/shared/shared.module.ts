import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PicComponent } from './pic/pic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent, PicComponent],
  exports: [HeaderComponent, FooterComponent, MenuComponent, PicComponent]
})
export class SharedModule { }
