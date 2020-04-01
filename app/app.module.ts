import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent }   from './star.component';
import { StarFillComponent }   from './starfill.component';
import { RatingComponent }   from './rating.component';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    AppComponent,StarComponent,StarFillComponent,RatingComponent,ProductComponent,ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
