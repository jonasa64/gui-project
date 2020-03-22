import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'
import { MatGridListModule } from '@angular/material/grid-list';

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
import { TimehPipe } from './pipes/time.pipe'
import { CreateUserComponent } from './create-user/create-user.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FurnitureService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
