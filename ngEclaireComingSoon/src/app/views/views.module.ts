import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { SharedModule } from "../shared/shared.module";
import {Angular2ImageGalleryModule} from "angular2-image-gallery";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Angular2ImageGalleryModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [HomeComponent, ComingsoonComponent, NotfoundComponent],
  exports: [HomeComponent, ComingsoonComponent, NotfoundComponent]
})
export class ViewsModule { }
