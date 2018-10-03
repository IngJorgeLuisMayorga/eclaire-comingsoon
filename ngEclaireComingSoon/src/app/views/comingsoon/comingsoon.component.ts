import { Component, OnInit, Output, Input } from "@angular/core";
import { MnFullpageOptions } from "ngx-fullpage";


import { SwiperModule, SwiperConfigInterface,SwiperScrollbarInterface,SwiperPaginationInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';


@Component({
  selector: "ec-comingsoon",
  templateUrl: "./comingsoon.component.html",
  styleUrls: ["./comingsoon.component.less"]
})
export class ComingsoonComponent implements OnInit {
  public UX = {
    HOVER : false
  }
  public galleryPath = "assets/images/gallery/";
  public projects = [
    {
      name: "Casa AG",
      path: "any-gyo",
      icon : "vivienda",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    },
    {
      name: "Proyecto Atalaya",
      path: "atalaya",
      icon : "vivienda",
      subtitle: "",
      description: "",
      pictures : [],
    },
    {
      name: "Casa Martinez",
      path: "brian-martinez",
      icon : "vivienda",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    },
    {
      name: "Proyecto Controles",
      path: "controles",
      icon : "oficinas",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    },
    {
      name: "Casa Jhoana",
      path: "jhoana",
      icon : "vivienda",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    },
    {
      name: "Proyecto Colegio",
      path: "montessori",
      icon : "oficinas",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    },
    {
      name: "Proyecto Mascotas",
      path: "pawfeet",
      icon : "oficinas",
      subtitle: "",
      description: "",
      pictures : [0,1,2,3]
    }
  ];
  public tiles = [];


  public type: string = 'component';
  public disabled: boolean = false;
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    spaceBetween: 0

  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  public index = 0;


  constructor() {}

  ngOnInit() {

    for(let kProject = 0; kProject < this.projects.length; kProject++){
      for(let kTile = 0; kTile < this.projects[kProject].pictures.length;kTile++){
        var imgSrc = this.galleryPath + this.projects[kProject].path + "/img" + kTile + ".jpg";
        if(kTile==0){
          this.tiles.push({
            name : this.projects[kProject].name,
            icon : this.galleryPath  + "/../../icons/" + this.projects[kProject].icon + ".png",
            subtitle : this.projects[kProject].subtitle,
            description : this.projects[kProject].description
          });
        }
        this.tiles.push({
          src : imgSrc
        });
    }
    }



  }


  openModal(k){
    this.UX.HOVER=true;
    this.index = k;
  }



}
