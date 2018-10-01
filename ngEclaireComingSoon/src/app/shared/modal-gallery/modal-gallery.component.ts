import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ec-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.less']
})
export class ModalGalleryComponent  implements OnInit {

  constructor() { }

  public UX = {
    HOVER : true
  }

  public UI = {
    imgList : [],
    imgCount : 0,
    imgSrc : "../../../assets/images/gallery/img0.jpg"
  }

  @Input('tiles')
  tiles: [{}];

  @Input('HOVER')
  HOVER: boolean;

  @Input('kImg')
  kImg: number;


  @Output()
  closeModalEvent = new EventEmitter();

  ngOnInit() {
    this.UI.imgList = this.tiles.filter( tile => {
      return tile["src"];
    })
  }

  ngOnChanges(): void {
    this.UI.imgCount = this.kImg + 0;
  }

  nextImgSrc(){
    if(this.UI.imgCount < (this.UI.imgList.length - 1)){
      this.UI.imgCount = this.UI.imgCount + 1;
    }else{
      this.UI.imgCount = 0;
    }
    this.UI.imgSrc = this.UI.imgList[this.UI.imgCount].src;
    console.log(this.UI.imgCount)
  }

  prevImgSrc(){
    if(this.UI.imgCount > 0){
      this.UI.imgCount = this.UI.imgCount - 1;
    }else{
      this.UI.imgCount = this.UI.imgList.length - 1;
    }
    this.UI.imgSrc = this.UI.imgList[this.UI.imgCount].src;
    console.log(this.UI.imgCount)
  }


closeModal(){
  this.closeModalEvent.emit();
}


}
