import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapPage {

  @ViewChild('mapContainer') mapContainer: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
    this.getMarkers();
  }
// 37.4122341   //-105.1288924
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(39.742043, -104.991531);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    this.http.get('http://localhost:3000/location')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
  }

  addMarkersToMap(markers) {
    for(let marker of markers) {
      let infowindow = new google.maps.InfoWindow({title: marker.name, description:marker.description});
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let campSite= new google.maps.Marker({position: position, title: marker.title});
      campSite.setMap(this.map);
      marker.maps.event.addListener('click', () => {
    infowindow.open(this.map, marker);
  });
}


  }
}
