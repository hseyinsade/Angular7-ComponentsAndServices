import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
declare let alertify: any;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "HP Probook 450 G6",
      imageUrl: "./../../assets/img/1.jfif"
    },
    {
      id: 2,
      name: "Telefon",
      price: 1200,
      categoryId: 4,
      description: "Samsung j4+ 1",
      imageUrl: "./../../assets/img/1.jfif"
    },
    {
      id: 3,
      name: "Laptop",
      price: 2500,
      categoryId: 3,
      description: "HP Probook 450 G6",
      imageUrl: "./../../assets/img/1.jfif"
    },
    {
      id: 4,
      name: "Telefon",
      price: 1200,
      categoryId: 4,
      description: "Samsung j4+ 1",
      imageUrl: "./../../assets/img/1.jfif"
    },
    {
      id: 5,
      name: "Laptop",
      price: 2500,
      categoryId: 5,
      description: "HP Probook 450 G6",
      imageUrl: "./../../assets/img/1.jfif"
    },
    {
      id: 6,
      name: "Telefon",
      price: 1200,
      categoryId: 6,
      description: "Samsung j4+",
      imageUrl: "./../../assets/img/1.jfif"
    }
  ];

  ngOnInit() {}

  addToCart(urun) {
    alertify.success(urun.name + " Seçildi..", function() {
     
    });
  }
}
