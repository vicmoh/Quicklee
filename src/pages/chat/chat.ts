import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listOfTexts = [];
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

}
