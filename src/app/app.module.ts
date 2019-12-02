import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";

import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";
import { UrunFilterPipe } from "./product/urun-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

    CategoryComponent,
    ProductComponent,
    UrunFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
