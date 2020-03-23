import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
@Input() funiture : { title : string,  
                      img: string
                      Beskrivelse : string,
                      Vurdering : number,
                      Showroom : string,
                      tid : string,
                      isDelux: boolean
                    };

  constructor() { }

  ngOnInit(): void {
  }

}
