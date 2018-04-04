import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tabs class
  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = MessagesPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
