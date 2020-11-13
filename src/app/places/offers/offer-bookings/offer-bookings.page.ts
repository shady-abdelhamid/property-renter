import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.interface';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  loadedPlace: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtr: NavController,
    private placesService: PlacesService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
}