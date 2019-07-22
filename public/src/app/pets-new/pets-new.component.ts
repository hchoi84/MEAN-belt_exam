import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pets-new',
  templateUrl: './pets-new.component.html',
  styleUrls: ['../app.component.css', './pets-new.component.css']
})
export class PetsNewComponent implements OnInit {

  private message: any;
  private newPet: any;
  private petFound: boolean = false;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("New");
    this.newPet ={
      name: "",
      pet_type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
      likes: 0,
    }
  }

  createPet(){
    this._httpService.findPetByName(this.newPet.name).subscribe( data => {
      if (data){
        this.petFound = true;
      }else{
        let observable = this._httpService.createPet(this.newPet);
        observable.subscribe( (data: any) => {
          if (data.message){
            this.message = data;
          }else{
            this._router.navigate(['/pets']);
          }
        })
      }
    });
  }

}
