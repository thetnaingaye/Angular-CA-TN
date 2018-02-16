import { Injectable,EventEmitter} from "@angular/core"

import {HttpClient,HttpParams} from "@angular/common/http";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
    url = "https://api.giphy.com/v1/gifs/search";

    constructor(private http: HttpClient) { }

    //get json object from giphy by query 
    getSearchResult(query: string, result: string): Promise<any> {
        const queryParams = new HttpParams()
        .set("api_key","q5PwxSZqO3myudeQowJWbWbBrieR1zFR")
        .set("q",query)
        .set("limit", result)
        .set("offset","0")
        .set("rating","G")
        .set("lang","en");

        return (this.http.get<any>(this.url,{params : queryParams})
          .take(1)
          .toPromise());
    }

    getSavedResult(query: string): Promise<any> {
        return (this.http.get<any>(`/giphy_server/searchgiphy/${query}`)
        .take(1)
        .toPromise());

    }

}



