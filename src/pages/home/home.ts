import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //vars
  listOfCards;
  showFriends;

  //constructor
  constructor(public navCtrl: NavController) {}

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

  getCardList(){
    this.listOfCards.push(this.addCard("Mark", "5/1/18", "Within 100m", "1h ago"));
    this.listOfCards.push(this.addCard("Parth", "5/1/18", "Within 2km", "2h ago"));
    this.listOfCards.push(this.addCard("Vick", "5/1/18", "Within 5km", "5h ago"));
  }
  
}