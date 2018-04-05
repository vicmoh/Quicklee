import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  //dec vars
  firstName: string;
  lastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToTabs(){
    //save the person name
    console.log("firstName = " + this.firstName + ", lastName = " + this.lastName);
    var person = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    var personString = JSON.stringify(person);
    localStorage.setItem('person', personString);
    this.navCtrl.push(TabsPage);
  }

}
