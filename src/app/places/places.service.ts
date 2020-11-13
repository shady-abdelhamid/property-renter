import { Injectable } from '@angular/core';
import { Place } from './place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    {
      id: 'p1',
      title: 'Manhattan Mansion',
      description: 'In the heart of New York City.',
      imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price: 149.99,
    },
    {
      id: 'p2',
      title: 'L\'Amour Toujours',
      description: 'A romantic place in Paris!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      price: 189.99
    },
    {
      id: 'p3',
      title: 'The Foggy Palace',
      description: 'Not your average city trip!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      price: 99.99
    }
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }
}
