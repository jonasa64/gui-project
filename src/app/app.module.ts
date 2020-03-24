import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


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
import { TimehPipe } from './pipes/time.pipe';

import { CheckoutComponent } from './checkout/checkout.component';
import { SingleProductComponent } from './single-product/single-product.component'
import { CreateUserComponent } from './create-user/create-user.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPageComponent } from './my-page/my-page.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';


import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
// import { AuthGuard } from './services/authguard.service';




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
    FrontPageComponent,
    NotFoundComponent,
    LoginComponent,
    ConfirmationComponent,
    MyPageComponent

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
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [FurnitureService, LoginService],
  bootstrap: [AppComponent]

})
export class AppModule { }
