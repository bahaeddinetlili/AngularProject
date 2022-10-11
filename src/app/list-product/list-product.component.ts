import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  public priceMax: number ;
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App'
    this.list = [
     {
        id :12,
        name :'T-shirt 1',
        price : 150,
        quantity : 179,
        nbrLike: 0,
        picture: 'https://www.exist.com.tn/78171-large_default/t-shirt.jpg',
        description: 'nice-tShirt'


      
     },

     {
      id :11,
      name :'T-shirt 4',
      price : 100,
      quantity : 19,
      nbrLike: 0,
      picture: 'https://cdn.cliqueinc.com/posts/295572/paris-outfit-ideas-295572-1633443397996-promo.700x0c.jpg',
      description: 'nice-tShirt'


    
   }


    ]
  }
 incrementLike(product:Product):void{
  let i =this.list.indexOf(product);
  if(i!=-1)
  this.list[i].nbrLike++
}
decrementAchat(product:Product):void{
  let i =this.list.indexOf(product);
  if(i!=-1)
  this.list[i].nbrLike++
}
}
