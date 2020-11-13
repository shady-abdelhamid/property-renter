import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private navCtr: NavController) { }

  ngOnInit() {
  }

  onBookPlace() {
    this.navCtr.navigateBack('/places/tabs/discover');
  }
}
