import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
      item = this.addItem("Justing Bieber", tempDate, "Studying at McKinnon", 1, 1);
      console.log(item);
      this.items.push(item);
      item = this.addItem("Parthy Boy", tempDate, "Partayy at Brass tap boyzz", 5, 5);
      console.log(item);
      this.items.push(item);
      item = this.addItem("Vic Creator", tempDate, "Pi lab is my home", 1, 1);
      console.log(item);
      this.items.push(item);
  }//end constructor

  addItem(newName: string, newDate: string, newStatus: string, newDistance: number, newTime: number){
    var item = {
      name: newName,
      date: newDate,
      status: newStatus,
      distance: newDistance, 
      time: newTime
    };
    return item;
  }//end func
}