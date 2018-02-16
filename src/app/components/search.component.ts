import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../SearchService';
import * as _ from 'underscore';
import { PagerService } from '../PagerService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

      // array of all items to be paged
      private allItems: any[];
 
      // pager object
      pager: any = {};
   
      // paged items
      pagedItems: any[];

  @ViewChild('searchForm') searchForm: NgForm;
  basket: any[] = [];
  userName: String ="username";

  constructor(private searchService : SearchService, private pagerService: PagerService) { }

  ngOnInit() {

  }

  processSearch():void{
    this.basket = [];

    this.userName = this.searchForm.value.username;
    this.searchService.getSearchResult(this.searchForm.value.query,this.searchForm.value.result)
      .then((resultJson) => {

     

        
        console.log(">>> Result : ", resultJson);
        for(let i of resultJson.data)
        {
          var strSlug:string = i.slug;
          var strSplit:string[] = strSlug.split("-");
          var strSlugConcat = "";
          for(let s of strSplit)
          {
            if(s != i.id)  
            strSlugConcat += s+" ";
          }
          //putting search result into result list
          this.basket.push({
            // image: "https://media0.giphy.com/media/"+i.id+"/giphy-downsized.gif",
            // image: `https://media0.giphy.com/media/${i.id}/giphy-downsized.gif`,
            username : this.userName,
            image : i.images["downsized"].url,
            id : i.id,
            slug: strSlugConcat,
            disable : false
          });
          console.log( ">>> image url ", i.images["downsized"].url);

          this.allItems = this.basket;
          this.setPage(1);
        }
      })
      .catch(error => {
        console.error(">>> error: ", error)

      });
    this.searchForm.reset();
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
