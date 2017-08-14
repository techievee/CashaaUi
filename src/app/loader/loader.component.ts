import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css']
})
export class LoaderComponent  {

  constructor(private _shared:SharedService) { }

 
}