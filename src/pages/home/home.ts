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
  }

  addItem(newName: string, newDate: string, newStatus: string, newDistance: number, newTime: number){
    var item = {
      name: newName,
      date: newDate,
      status: newStatus,
      distance: newDistance, 
      time: newTime
    };
    return item;
  }

  //add button
  cardButton(setIcon: string, setText: string): string{
    var guiString = "<ion-col>";
    + "<button ion-button icon-left clear small>";
    + "<ion-icon name=\""+setIcon+"\"></ion-icon>";
    + "<div>"+setIcon+"</div>";
    + "</button>";
    + "</ion-col>";
    return guiString;
  }

  //add new cards
  addCard(newName: string, newDate: string, newDistance: string, newTime: string): string{
    // set header
    var name = "<h2>"+ newName + "</h2>";
    var date = "<p>"+newDate+"</p>";
    var item = "<ion-item>"+ name + date +"</ion-item>";
    var time =  "<ion-col center text-center>"
              + "<ion-note>"
              + newTime
              + "</ion-note>"
              + "</ion-col>"
  
    // set the card
    var b1 = this.cardButton("pin", newDistance);
    var b2 = this.cardButton ("text", "Messeges");
    var row = "<ion-row>" + b1 + b2 + "</ion-row>";
    var card = "<ion-card>"+item + row + time + "</ion-card>";
    //this.listOfCards.push(card)
    return card;
  }
}