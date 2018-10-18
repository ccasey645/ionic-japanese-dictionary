import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {FavoritesPage} from "../favorites/favorites";
import {SearchHistoryPage} from "../search-history/search-history";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = SearchHistoryPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
