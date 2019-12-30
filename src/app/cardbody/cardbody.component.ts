import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardbody',
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {




  constructor() { }
  @Input() pay;
  @Input() time;
  @Input() btext;
  @Input() barr;
  @Input() money;

  ngOnInit() {

  }
}


