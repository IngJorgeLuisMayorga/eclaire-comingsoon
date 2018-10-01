import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PicComponent } from './pic/pic.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, MenuComponent, PicComponent,ModalGalleryComponent ],
  exports: [HeaderComponent, FooterComponent, MenuComponent, PicComponent,ModalGalleryComponent ]
})
export class SharedModule { }
