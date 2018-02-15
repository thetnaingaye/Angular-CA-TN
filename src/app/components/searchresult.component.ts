import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {


  @ViewChild('itemForm') itemForm: NgForm;


  @Input() contents: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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


}
