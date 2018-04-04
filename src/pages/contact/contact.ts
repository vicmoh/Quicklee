import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //vars
  items: any[];
  item: any;

  //constructor
  constructor(public navCtrl: NavController) {
    this.items = [];
    //date
    var tempDate = "April 1, 2018";
    var item;
    //add items
    item = this.addItem("Justing Bieber", tempDate, "Studying at McLaughlin Library", 1, 1, "bieber");
    console.log(item);
    this.items.push(item);
    item = this.addItem("Parthy Boy", tempDate, "Partayy at Brass tap boyzz", 5, 5, "why");
    console.log(item);
    this.items.push(item);
    item = this.addItem("Vic Developer", tempDate, "Pi lab is my home.", 1, 1, "vic");
    console.log(item);
    this.items.push(item);
  }//end constructor

  addItem(newName: string, newDate: string, newStatus: string, newDistance: number, newTime: number, newImage: string){
    var item = {
      name: newName,
      date: newDate,
      status: newStatus,
      distance: newDistance, 
      time: newTime,
      image: newImage
    };
    return item;
  }//end func
}
