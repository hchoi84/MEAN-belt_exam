import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pets-info',
  templateUrl: './pets-info.component.html',
  styleUrls: ['../app.component.css', './pets-info.component.css']
})
export class PetsInfoComponent implements OnInit {

  private petId: string;
  private petInfo: any;
  private enableLikeButton: boolean = true;
  private likes: number;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Info");
    this._route.params.subscribe((params: Params) => this.petId = params.id);
    // console.log("pet ID is: ", this.petId);
    this.getPetInfo();
  }

  getPetInfo(){
    let observable = this._httpService.getPetInfo(this.petId);
    observable.subscribe ( data => {
      console.log("Pet data:" , data);
      this.petInfo = data;
      this.likes = this.petInfo.likes;
    })
  }

  likePet(){
    let observable = this._httpService.likePet(this.petInfo);
    observable.subscribe( (data: any) => {
      this.ngOnInit();
      this.enableLikeButton = false;
    })
  }

  deletePet(){
    let observable = this._httpService.deletePet(this.petId);
    observable.subscribe ( data => {
      this._router.navigate(['/pets']);
    })
  }
}
