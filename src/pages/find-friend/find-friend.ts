import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the FindFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-friend',
  templateUrl: 'find-friend.html',
})
export class FindFriendPage {

  distance: any;
  testRadioOpen: boolean;
  testRadioResult;
  pins: any[];
  profiles: any[];
  currentProfile: any;
  x: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    this.pins = [];
    this.profiles = [];
    this.distance = 30;
    this.currentProfile = {};
    this.x = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFriendPage');
  }

  addPin(newLocation, newFunc){
    var pin = {
      image: "../assets/imgs/pin.png",
      location: newLocation,
      function: newFunc
    }
    console.log("pin function = " + pin.function);
    this.pins.push(pin);
  }

  showPerson(newImage, newName, newStatus){
    this.x = this.x + 1;
    var profile = {
      image: newImage,
      name: newName,
      status: newStatus,
      x: this.x
    };
    console.log("showPerson("+profile.x+")");
    this.profiles.push(profile);
    // this.currentProfile = profile;
  }

  getPerson(x){
    console.log("getPerson("+this.x+")");
    if(this.x == 0){
      this.getPerson1();
    }else if(this.x == 1){
      this.getPerson2();
    }else if(this.x == 2){
      this.getPerson3();
      this.x=0;
    }
  }

  showAccept() {
    let alert = this.alertCtrl.create({
      title: 'New Event!',
      subTitle: 'Event has been confirmed!',
      buttons: ['OK']
    });
    alert.present();
    setTimeout(() => {
      this.navCtrl.pop();
    }, 1000);
  }

  getPerson1(){
    this.profiles.pop();
    this.showPerson("avatar-yoda", "Yoda", "Training my force I am...");
  }

  getPerson2(){
    this.profiles.pop();
    this.showPerson("avatar-rey", "Rey", "Working on Angel of Death, help me!");
  }

  getPerson3(){
    this.profiles.pop();
    this.showPerson("avatar-luke", "luke", "Suh dude, need studay budday");
  }

  closeProfile(){
    this.profiles.pop();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Catagories',
      buttons: [{
          text: 'Social',
          handler: () => {
            console.log('Event clicked');
            this.showRadio();
          }
        },{
          text: 'School',
          handler: () => {
            console.log('Image clicked');
            this.showRadio();
          }
        },{
          text: 'Study',
          handler: () => {
            console.log('Add clicked');
            this.showRadio();
          }
        },{
          text: 'Business',
          handler: () => {
            console.log('File clicked');
            this.showRadio();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }//end func

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Option');

    alert.addInput({
      type: 'radio',
      label: 'Physics',
      value: 'physics',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'CIS',
      value: 'cis'
    });

    alert.addInput({
      type: 'radio',
      label: 'Chemistry',
      value: 'chemistry'
    });

    alert.addInput({
      type: 'radio',
      label: 'Econ',
      value: 'econ'
    });

    alert.addInput({
      type: 'radio',
      label: 'Engineering',
      value: 'engineering'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.addPin("location1 pin", "getPerson1()");
        this.addPin("location2 pin", "getPerson2()");
        this.addPin("location3 pin", "getPerson3()");
      }
    });
    alert.present();
  }
}
