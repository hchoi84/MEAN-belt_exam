import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['../app.component.css', './pets-edit.component.css']
})
export class PetsEditComponent implements OnInit {

  private newPet: any;
  private petInfo: any;
  private petId: string;
  private petFound: boolean = false;
  private message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _titleService: Title,
  ) { }

  ngOnInit() {
    this._titleService.setTitle("Edit");
    this._route.params.subscribe((params: Params) => this.petId = params.id);
    this.getPetInfo();
  }

  getPetInfo(){
    let observable = this._httpService.getPetInfo(this.petId);
    observable.subscribe ( data => {
      console.log("Pet data:" , data);
      this.newPet = data;
    })
  }

  editPet(){
    this._httpService.findPetByName(this.newPet.name).subscribe( data => {
      if (data){
        this.petFound = true;
      }else{
        let observable = this._httpService.updatePetInfo(this.newPet);
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
