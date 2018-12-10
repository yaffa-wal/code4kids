import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.component.html',
  styleUrls: ['./lesson11.component.css']
})
export class Lesson11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  f(){
    var value = document.getElementById("stright").value;//get value
    var car = document.getElementById("car");
    value.trim();
    if(value.startsWith("go stright(")){     
      value = value.substring(value.indexOf('(')+1);
      value = value.replace(/\D/g, "");
    }
    var distance = 10 * value;
    car.style.left=distance+"px";
  }

}
