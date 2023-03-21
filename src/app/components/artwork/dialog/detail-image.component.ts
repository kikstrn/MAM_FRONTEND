import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.css']
})
export class DetailImageComponent implements OnInit {

  @Input()
  url: string;
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
