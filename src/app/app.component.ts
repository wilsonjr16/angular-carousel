import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mySlideOptions={
    margin:25,
    dot: false, 
    nav: true,    
    responsiveClass: true,
    responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 3,
          nav: true,
          loop: false
        },
        1500: {
          items: 3,
          nav: true,
          loop: false
        }
      }
    };

  mySlideImages = [
    {
      text: "slide1",
      image: "assets/slide1.jpg"
    },
    {
      text: "slide2",
      image: "assets/slide2.jpg"
    },
    {
      text: "slide3",
      image: "assets/slide3.jpg"
    },
    {
      text: "slide4",
      image: "assets/slide4.jpg"
    },
    {
      text: "slide5",
      image: "assets/slide5.jpg"
    },
    {
      text: "slide6",
      image: "assets/slide6.jpg"
    }
  ]

  // items: Array<any> = [];

  // constructor(){
  //   this.items = [
  //     {name: 'assets/slide1.jpg'},
  //     {name: 'assets/slide2.jpg'},
  //     {name: 'assets/slide3.jpg'},
  //     {name: 'assets/slide1.jpg'},
  //     {name: 'assets/slide2.jpg'},
  //     {name: 'assets/slide3.jpg'},
  //   ];
  // }
}
