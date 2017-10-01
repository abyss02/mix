import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssProvider } from "../../providers/rss/rss";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {
	rssDataArray: any = [];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public rssProvider: RssProvider, private iab: InAppBrowser) {
	}


	
		


	public openArticle(url: string) {


		const options: InAppBrowserOptions = {
			location: 'no',
			zoom: 'yes',
			hardwareback: 'no'
		}



		this.iab.create(url, '_self', options);
		// window.open(url, '_blank');
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
		this.Get_RSS_Data()
	}


	openUrl(entry) {

		this.iab.create(entry.link, "_system");

	}

	Get_RSS_Data() {

		this.rssProvider.GetRSS().subscribe(

			data => {
				this.rssDataArray = data;


				console.log(data);

			}

		);
	}

}


