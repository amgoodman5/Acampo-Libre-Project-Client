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
      icon:"../../assets/logo.png",
      zoom: 8,
      clickable: true,
      type: 'flat',

      mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement,mapOptions);
  }

  getMarkers() {
    this.http.get('https://acampo.herokuapp.com/location')
      .map((res) => res.json())
      .subscribe(data => {
        this.addMarkersToMap(data);
      });

  }


  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let campSite = new google.maps.Marker({ position: position, title: marker.title });
      let infoWindow = new google.maps.InfoWindow({content: marker.description })
      campSite.setMap(this.map);

        google.maps.event.addListener(marker, 'click', () => {
        console.log(`hello`);
        infoWindow.open(this.map, marker);

      // return function() {


        });

      }

    }


        // infoWindow.open(this.map, marker);
    }
    // for (var i = 0; i < vm.locations.length; i++) {
    //             if (toyService.distance(vm.centerLat, vm.centerLng, vm.locations[i].latitude, vm.locations[i].longitude, 'M') < vm.radius) {
    //                 marker = new google.maps.Marker({
    //                     position: new google.maps.LatLng(vm.locations[i].latitude, vm.locations[i].longitude),
    //                     map: map,
    //                     icon: `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${vm.locations[i].id}|FF0000|000000`
    //                 });
    //                 // collect each new marker in an array
    //                 vm.markers.push(marker);
    //                 vm.proximal.push(vm.locations[i])
    //                 // set the marker based on the map
    //                 marker.setMap(map);
    //                 google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //                     return function() {
    //                         vm.toyId = vm.proximal[vm.proximal.length-1].id;
    //                         infowindow.setContent(`<a href="/toysearch/${vm.toyId}">${vm.locations[i].description}</a>`);
    //                         infowindow.open(map, marker);
    //                     }
    //                 })(marker, i));
    //             }
    //         }
