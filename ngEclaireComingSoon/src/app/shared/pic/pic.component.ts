import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'ec-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.less']
})
export class PicComponent implements OnInit {

  @Input('') srcLow: string;
  @Input('') srcMid: string;
  @Input('') srcHigh: string;

  public state
  public source;

  constructor() {

  }

  ngOnInit() {
    this.state = 'low';
    this.source = this.srcLow;
  }

  nextResolution(){

    if(this.state == 'low'){
      this.state = 'mid';
      this.source = this.srcMid;
    }
    else{
      if(this.state == 'mid'){
        this.state ='high';
        this.source = this.srcHigh;
      }
    }
  }

}
