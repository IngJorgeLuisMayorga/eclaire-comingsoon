import { Component, OnInit, Output, Input } from "@angular/core";
import { MnFullpageOptions } from "ngx-fullpage";
@Component({
  selector: "ec-comingsoon",
  templateUrl: "./comingsoon.component.html",
  styleUrls: ["./comingsoon.component.less"]
})
export class ComingsoonComponent implements OnInit {
  public galleryPath = "assets/images/gallery/";

  public gallery = [
    {
      srcLow: "assets/images/cover/cover-compress-vga.jpg",
      srcMid: "assets/images/cover/cover-compress-hd.jpg",
      srcHigh: "assets/images/cover/cover-compress-4k.jpg"
    }
  ];

  public projects = [
    {
      name: "Casa AG",
      path: "any-gyo",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Proyecto Atalaya",
      path: "atalaya",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Casa Martinez",
      path: "brian-martinez",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Proyecto Controles",
      path: "controles",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Casa Jhoana",
      path: "jhoana",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Proyecto Colegio",
      path: "montessori",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    },
    {
      name: "Proyecto Mascotas",
      path: "pawfeet",
      subtitle: "",
      description: "",
      tiles: [
        {
          type: "info",
          pictures: [0, 1, 2, 3]
        },
        {
          type: "picture",
          pictures: [0, 1, 2, 3]
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
    for (let k = 0; k < this.projects.length; k++) {
      for (let j = 0; j < 4; j++) {
        var obj = {
          srcLow: this.galleryPath + this.projects[k].path + "/img" + j + ".jpg",
          srcMid: this.galleryPath + this.projects[k].path + "/img" + j + ".jpg",
          srcHigh: this.galleryPath + this.projects[k].path + "/img" + j + ".jpg"
        };

        this.gallery.push(obj);
      }
    }
  }
}
