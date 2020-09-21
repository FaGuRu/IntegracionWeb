import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { SaleComponent } from './sale/sale.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OrderComponent,
    ProductComponent,
    ProviderComponent,
    SaleComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
