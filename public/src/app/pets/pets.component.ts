import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['../app.component.css', './pets.component.css']
})
export class PetsComponent implements OnInit {

  private allPets: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Pets");
    this.getPets();
  }

  getPets(){
    let observable = this._httpService.getPets();
    observable.subscribe( (data: any) => {
      let temp = data.slice(0);
      temp.sort((a, b) => {
        var x = a.pet_type.toLowerCase();
        var y = b.pet_type.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.allPets = temp;
    });
  }

}
