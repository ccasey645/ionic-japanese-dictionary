import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search_language: string = "english";
  search_placeholder_text: string = "";
  search_term:string = "";
  backend_url:string = "http://japanesedict.blairindustriesgroup.com/database/";
  search_params = {'searchTerm':''};

  search_results_list:any[] = [];

  constructor(public navCtrl: NavController, private http: HTTP) {
    if (this.search_language.indexOf("english") > -1){
      this.search_placeholder_text = "Search";
    }else{
      this.search_placeholder_text = "探索";
    }
  }

  /***
   * Search for the term input in the search bar when the magnifying glass is clicked.
   */
  searchForTerm(){
    let complete_url = this.backend_url + this.search_language;
    this.search_params.searchTerm = this.search_term;

    this.http.get(complete_url,{},{})
      .then((search_results) =>{
        console.log(search_results);
        this.search_results_list = search_results.data;
      })
      .catch((error) => {
        console.log(error);
        this.search_results_list.push(error);
      });
  }

  /***
   * Change the language from English to Japanese, and vice-versa when
   * switch language button is clicked.
   */
  changeLanguage(){

  }
}
