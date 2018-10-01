/**
 * Import  "Angular Modules"
 *
 */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';

/**
 *  Import "vendors"
 */
import { MnFullpageModule } from 'ngx-fullpage';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';


/**
 *  Import "modules"
 *
 */
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { RoutingModule } from './routing/routing.module';

/**
 *  Import "components"
 */
import { AppComponent } from './app.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FlexLayoutModule,
    SharedModule,
    ViewsModule,
    RoutingModule,
    ModalGalleryModule.forRoot(),
    MnFullpageModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
