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
  avatar: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    this.pins = [];
    this.distance = 30;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFriendPage');
  }

  addPin(newLocation){
    var pin = {
      image: "../assets/imgs/pin.png",
      location: newLocation
    }
    this.pins.push(pin);
  }

  showAvatar(){
    
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose catagories',
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
        this.addPin("location1 pin");
        this.addPin("location2 pin");
        this.addPin("location3 pin");
      }
    });
    alert.present();
  }
}
