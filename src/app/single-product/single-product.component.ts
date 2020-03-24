import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../services/furniture.service';

/**
 * SingleProductComponent
 */
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
    this.funiture = this.furnitieures.find((el) => el.title === 'Karmstol samtida');

  }

  buy() {

  }




}
