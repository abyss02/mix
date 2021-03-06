import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }

GetRSS()
{
	const RSS_URL: any = 'http://www.health.com/fitness/feed';
    const API: any = 'fxurrtpba8uq1pwvq9r7bpa2vngjj7p2qth2q2g8';
    const count: any = 20;
    const API_URL: any = 'https://api.rss2json.com/v1/api.json';
    const response = this.http.post(API_URL, {'rss_url':RSS_URL, 'api_key': API,'count': count }).map(res => res.json());
    return response;

}

}
