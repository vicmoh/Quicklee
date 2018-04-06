import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  queries: {
    content: new ViewChild('content')
  }
})
export class ChatPage {
  @ViewChild('scroll') scroll: any;
  listOfTexts: any[];
  message: string;
  text: any;
  listOfEvents: any[];
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {
    this.listOfTexts = [];
    this.listOfEvents = [];
    var personJsonString = localStorage.getItem('person');
    console.log("json person string = " + personJsonString);
    this.person = JSON.parse(personJsonString);
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.scroll.scrollToBottom(300);
    }, 1000);
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(){
    //get the ngModal input message and send 
    if(this.message == ""){
      console.log("message is empty");
      return;
    }//end if
    this.text = this.message;
    this.message = "";
    console.log("text message = " + this.text);
    this.listOfTexts.push(this.text);
    console.log("end of sendMessage()");
    // this.scroll.scrollToBottom();
    setTimeout(() => {
      this.scroll.scrollToBottom(300);
    }, 1000);
  }//end func

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Option',
      buttons: [{
          text: 'Add Event',
          role: 'destructive',
          handler: () => {
            console.log('Event clicked');
            this.showPromptEvent();
          }
        },{
          text: 'Add Image',
          handler: () => {
            console.log('Image clicked');
          }
        },{
          text: 'Add Video',
          handler: () => {
            console.log('Add clicked');
          }
        },{
          text: 'Add File',
          handler: () => {
            console.log('File clicked');
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

  showPromptEvent() {
    let prompt = this.alertCtrl.create({
      title: 'Add Event',
      message: "Enter your event, and we will automatically find the best time for you",
      inputs: [{
        name: 'event',
        placeholder: 'Event'
      }],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },{
        text: 'Save',
        handler: data => {
          console.log('Saved clicked');
          console.log("data.event = " + data.event)
          this.refresh();
          this.listOfEvents.push(data.event);
        }
      }]
    });
    prompt.present();
  }//end func

  refresh(){
    setTimeout(() => {
      this.scroll.scrollToBottom(300);
    }, 1000);
  }

}
