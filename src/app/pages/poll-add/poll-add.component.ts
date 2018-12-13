import { ExampleContryService } from './../../services/example-country.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-add',
  templateUrl: './poll-add.component.html',
  styleUrls: ['./poll-add.component.sass']
})
export class PollAddComponent implements OnInit {

  weather: string;

  constructor(private weatherService: ExampleContryService) { }

  ngOnInit() {
    this.weatherService.getCountry().subscribe(data =>{
      this.weather = data[0].borders;
      console.log(this.weather);
    });
  }

}
