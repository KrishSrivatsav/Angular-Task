import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {
  @Input() salary;
  @Input() fcolor;
  @Input() bordertext;
  @Input() barr;
  
  constructor() { }

  ngOnInit() {
  }

}
