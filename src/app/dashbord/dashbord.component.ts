import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }
  cards = [
    {
      period: 'Monthly',
      currency: '$',
      salary: '30,000',
      bordertext: 'success'
    },
    {
      period: 'Annual',
      currency: '$',
      salary: '50,000',
      bordertext: 'success'
    },
    {
      period: 'Quaterly',
      currency: '$',
      salary: '20,000',
      bordertext: 'success'
    },
    {
      period: 'Annual',
      currency: '$',
      salary: '80,000',
      bordertext: 'success'
    }
  ];

  ngOnInit() {

  }


  addfn() {

    this.cards.push(
      {
        period: 'Annual',
        currency: '$',
        salary: '80,000',
        bordertext: 'primary'
      });


  }

}
