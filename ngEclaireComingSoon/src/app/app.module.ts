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




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ViewsModule,
    RoutingModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
