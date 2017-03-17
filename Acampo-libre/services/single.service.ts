import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class SingleCampsiteService{
  http:any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = "http://localhost:3000/api/v1/campsites/:id";
  }

  getCampsites(name, limit){
    return this.http.get(this.baseUrl)
      .map(res => res.json())
  }
}
