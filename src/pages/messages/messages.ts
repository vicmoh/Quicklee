import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  //dec intance
  onlineItems: any[];
  recentItems: any[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //must dec
    this.onlineItems = [];
    this.recentItems = [];
    // adding the onlineItems for the recent
    var onlineItem = this.additem("avatar-finn", "Finn", "I'm a big deal", "Listen, I've had a pretty messed up day");
    this.onlineItems.push(onlineItem);
    console.log(onlineItem);
    onlineItem = this.additem("avatar-han", "Han", "Look, kid", "I've got enough on my plate as it is, and I");
    this.onlineItems.push(onlineItem);
    console.log(onlineItem);
    onlineItem = this.additem("avatar-rey", "Rey", "I can handle myself", "You will remove these restraints and leave");
    this.onlineItems.push(onlineItem);
    console.log(onlineItem);
    onlineItem = this.additem("avatar-luke", "Luke", "Your thoughts betray you", "I feel the good in you, the conflict");
    this.onlineItems.push(onlineItem);
    console.log(onlineItem);
    // adding people who are online
    var recentItem = this.additem("avatar-poe", "Poe", "New Ride", "I just upgraded my X-Wing. Next time");
    this.recentItems.push(recentItem);
    console.log(recentItem);
    recentItem = this.additem("avatar-ben", "Ben", "Move Along", "These aren't the droids you're looking for");
    this.recentItems.push(recentItem);
    console.log(recentItem);
    recentItem = this.additem("avatar-leia", "Leia", "You're My Only Hope", "I've placed information vital to the survival");
    this.recentItems.push(recentItem);
    console.log(recentItem);
    recentItem = this.additem("avatar-yoda", "Yoda", "Size matters not", "Do or do not. There is no try");
    this.recentItems.push(recentItem);
    console.log(recentItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  additem(newImage:string, newName: string, newStatus: string, newMessage: string){
    var item = {
      image: newImage,
      name: newName,
      status: newStatus,
      message: newMessage 
    };
    return item;
  }//end func

  goToChat(){
    this.navCtrl.push(ChatPage);
  }//end func

}//end class
