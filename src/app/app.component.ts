import {Component, OnInit} from '@angular/core';
import {streamsService} from "./services/streams.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'yota';
  streamsViews:Number[]=[];
  loading:Boolean=false;
  currentRequest:any=null;


  constructor(private streamsService:streamsService) {
  }
  ngOnInit(): void {
    this.loading=true
    this.currentRequest=this.streamsService.getStreams('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=3').subscribe((viewsCount:Number[])=>{
      this.streamsViews=viewsCount
      this.loading=false
    })
  }

  sendRequest(){
    if(!this.loading){
      this.loading=true
      this.currentRequest=this.streamsService.getStreams('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=3').subscribe((viewsCount:Number[])=>{
        this.streamsViews=viewsCount
        this.loading=false
      })
    }
    else{
      this.currentRequest.unsubscribe();
      this.loading=false
    }

  }


}
