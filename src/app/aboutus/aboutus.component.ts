// / <reference path= "../../../node_modules/@types/googlemaps/index.d.ts" />
// import { } from '@types/googlemaps';

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  constructor() {}
  @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  lat: number = 17.000538;
  lon:number = 81.804031;
  zoom = 13;
  ngOnInit(): void {
   
  }
}

