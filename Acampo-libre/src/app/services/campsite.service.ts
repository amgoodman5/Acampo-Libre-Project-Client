import{Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class CampsiteService{
  http:any;
  baseUrl: String;
  locationUrl:String;
  id:Number;


  constructor(http:Http){
    this.http = http;
    this.baseUrl = "http://localhost:3000/api/v1/campsites";
    this.locationUrl = "http://localhost:3000/location";

  }


 getLocation(data){
       return this.http.get(this.locationUrl)
     .map(res => res.json());
 }

 addLocation(location) {
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.locationUrl, JSON.stringify(location),{headers: headers})
  .map(res => res.json());
}

 deleteCampsite(campsiteId){
    return this.http.delete(this.baseUrl + '/' + campsiteId)
   .map(res => res.json())
 }
}
