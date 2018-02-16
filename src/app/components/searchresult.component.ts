import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

import * as _ from 'underscore';
import { PagerService } from '../PagerService';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

        // array of all items to be paged
        private allItems: any[];
 
        // pager object
        pager: any = {};
     
        // paged items
        pagedItems: any[];
  

  @Input() contents: any[] = [];

  constructor(private http: HttpClient,private pagerService: PagerService) { }

  ngOnInit() {
    this.allItems = this.contents;
    this.setPage(1);
  }

  onClicked(item:any):void {
    console.log(">>> username = ", item.username);
    console.log(">>> imageID = ", item.id);
    console.log(">>> saveUrl = ", `/gify_server/saveGif/${item.username}-${item.id}`);
   // this.http.get(`/gify_server/saveGif/${item.username}-${item.id}`);
    this.http.get(`/giphy_server/savegiphy/${item.username}-${item.id}`).subscribe({ error: e => console.error(e) });
 
    //disabling button after click
    item.disable = true;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
