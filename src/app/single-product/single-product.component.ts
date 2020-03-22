import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../services/furniture.service'
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  furnitieures = [];
  funiture: {
    title: string,
    img: string
    Beskrivelse: string,
    Vurdering: number,
    Showroom: string,
    tid: string,
    isDelux: boolean

  };


  constructor(private furnitureService: FurnitureService) { }




  ngOnInit(): void {
    this.furnitieures = this.furnitureService.getFurnitures();
    this.funiture = this.furnitieures.find((el) => el.title === 'Hyndesæt til Hans J. Wegners Y- stol. Cognacfarvet læder. (6)');

  }

  buy() {

  }




}
