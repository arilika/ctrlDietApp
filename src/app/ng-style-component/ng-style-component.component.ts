import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-component',
  templateUrl: './ng-style-component.component.html',
  styleUrls: ['./ng-style-component.component.css']
})
export class NgStyleComponentComponent implements OnInit {
  color: string;
  fontSize: number;
  margin: number;
  constructor() { }

  ngOnInit(): void {
    this.fontSize = 20;
    this.color = '#b80d57';
    this.margin = 20;
  }

}
