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


  constructor(private furnitureService: FurnitureService) { }


  /*onSearch() {
    console.log(this.searchValue)
    this.furnitures = this.furnitureService.getFurnitures().filter((el) => el.title.includes(this.searchValue));
  }*/

  ngOnInit(): void {
    this.furnitures = this.furnitureService.getFurnitures();
  }

}
