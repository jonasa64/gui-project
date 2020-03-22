import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurnitureService } from './services/furniture.service';
import { SearchPipe } from './pipes/search.pipe';
import { ShowroomPipe } from './pipes/showroom.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { ValationPipe } from './pipes/valuation.pipe'

import { CheckoutComponent } from './checkout/checkout.component';
import { SingleProductComponent } from './single-product/single-product.component'

import { CreateUserComponent } from './create-user/create-user.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { MyPageComponent } from './my-page/my-page.component';
import { TimehPipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductCarouselComponent,
    SearchComponent,
    FurnitureComponent,
    SearchPipe,
    ShowroomPipe,
    CategoryPipe,
    ValationPipe,
    TimehPipe,

    CheckoutComponent,
    SingleProductComponent,

    CreateUserComponent,
    FrontPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,

    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [FurnitureService],
  bootstrap: [AppComponent]

})
export class AppModule { }
