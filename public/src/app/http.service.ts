import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // dependency injection

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // Create Pet
  createPet(pet){ return this._http.post("/pets", pet); }
  // Read Pet
  findPetByName(name){ return this._http.get(`/pets/${name}`); }
  getPets(){ return this._http.get("/pets"); }
  getPetInfo(id){ return this._http.get(`/pets/find/${id}`); }
  // Update Pet
  likePet(petInfo){ return this._http.put(`/pets/like/${petInfo._id}`, petInfo); }
  updatePetInfo(petInfo){ return this._http.put(`/pets/update/${petInfo._id}`, petInfo); }
  // Delete Pet
  deletePet(id){ return this._http.delete(`/pets/delete/${id}`); }
}
