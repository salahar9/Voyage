import { Component } from '@angular/core';
@Component({

  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent {
currentRate=3.5
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
