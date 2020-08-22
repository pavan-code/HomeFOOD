import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss']
})
export class CuisinesComponent implements OnInit {

  constructor() { }
  dishes =  [
    {
        "image" : "./assets/images/dish1.jpg"
    },
    {
        "image" : "./assets/images/dish2.png"
    },
    {
        "image" : "./assets/images/dish3.jpg"
    },
    {
        "image" : "./assets/images/dish4.jpg"
    },
    {
        "image" : "./assets/images/dish5.jpg"
    },
    {
        "image" : "./assets/images/dish6.jpg"
    },
 
]
  ngOnInit(): void {
  }

}
