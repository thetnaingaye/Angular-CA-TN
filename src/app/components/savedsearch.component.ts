import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../SearchService';

@Component({
  selector: 'app-savedsearch',
  templateUrl: './savedsearch.component.html',
  styleUrls: ['./savedsearch.component.css']
})
export class SavedsearchComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;
  basket: any[] = [];
  userName: string ="username";

  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }
  processSearch():void{
    this.basket = [];

    this.userName = this.searchForm.value.username;
    this.searchService.getSavedResult(this.userName)
      .then((resultJson) => {
        console.log(">>> Result : ", resultJson);
        for(let i of resultJson)
        {
          //putting search result into result list
          this.basket.push({
            // image: "https://media0.giphy.com/media/"+i.id+"/giphy-downsized.gif",
            // image: `https://media0.giphy.com/media/${i.id}/giphy-downsized.gif`,
            username : this.userName,
            image : `https://media0.giphy.com/media/${i.imageid}/giphy-downsized.gif`,

          });
      
        }
      })
      .catch(error => {
        console.error(">>> error: ", error)

      });
    this.searchForm.reset();
  }

}
