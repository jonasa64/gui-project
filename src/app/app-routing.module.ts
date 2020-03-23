import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { SearchComponent } from './search/search.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyPageComponent } from './my-page/my-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';





const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found' },
  { path: 'product-carousel', component: ProductCarouselComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'my-page', component: MyPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
