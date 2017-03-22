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
    this.baseUrl = "https://acampo.herokuapp.com/location";
    // this.locationUrl = "http://localhost:3000/location";

  }


 getLocation(data){
       return this.http.get(this.baseUrl)
     .map(res => res.json());
 }

 addLocation(location) {
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post(this.baseUrl, JSON.stringify(location),{headers: headers})
  .map(res => res.json());
}

 deleteLocation(data){
    return this.http.delete(this.baseUrl + '/' + 'id')
   .map(res => res.json())
 }
}
