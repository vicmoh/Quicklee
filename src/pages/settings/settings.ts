import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
// import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  //dec vars
  person: any;
  firstName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.person = navParams.get('person');
    // console.log("person = ", this.person);
    var personJSON = localStorage.getItem('person');
    console.log("personJSON = "+personJSON);
    var person = JSON.parse(personJSON);
    console.log("value = ", person);
    this.person = person;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logout(){
    this.navCtrl.popToRoot();
    this.navCtrl.setRoot(LoginPage);
  }
}
