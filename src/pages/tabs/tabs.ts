import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
