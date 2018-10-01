import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { SharedModule } from "../shared/shared.module";
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {ModalGalleryModule} from '@ks89/angular-modal-gallery';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';

  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true
  };
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Angular2ImageGalleryModule,
    ModalGalleryModule,
    MnFullpageModule.forRoot(),
    SwiperModule,
    FlexLayoutModule
  ],providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [HomeComponent, ComingsoonComponent, NotfoundComponent],
  exports: [HomeComponent, ComingsoonComponent, NotfoundComponent]
})
export class ViewsModule { }
