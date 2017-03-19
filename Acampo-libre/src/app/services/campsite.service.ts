import{Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class CampsiteService{
  http:any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = "http://localhost:3000/api/v1/campsites";
  }

  getCampsites(data){
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }

  addCampsite(campsite) {
 	 var headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.baseUrl, JSON.stringify(campsite),{headers: headers})
 .map(res => res.json());
 }
}
