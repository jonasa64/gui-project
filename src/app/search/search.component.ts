import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../services/furniture.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  furnitures = [];
  searchValue: string;
  value: string;
  Kategori: string;
  vurdering: string;
  tid: string;


  constructor(private furnitureService: FurnitureService) { }


  ngOnInit(): void {
    this.furnitures = this.furnitureService.getFurnitures();
  }

}
