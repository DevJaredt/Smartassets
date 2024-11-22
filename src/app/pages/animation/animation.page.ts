import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {
  constructor(private readonly _navCtrl: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this._navCtrl.navigateForward('/principal');
    }, 3000);
  }
}
