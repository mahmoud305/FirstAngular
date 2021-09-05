import { Component, OnInit } from '@angular/core';
declare var $:any;

var imgArray :any= Array.from(document.querySelectorAll(".rowItem img") );

for(var i=0;i<imgArray.length;i++){
  imgArray[i].addevent
}


@Component({
  selector: 'app-portofolia',
  templateUrl: './portofolia.component.html',
  styleUrls: ['./portofolia.component.css']
})
export class PortofoliaComponent implements OnInit {

  constructor() { }
 closeLightBox(e:any){
    let lightBox :any=document.querySelector("#lightBox");
    lightBox.style.display = "none";
  }
  ngOnInit(): void {


  //  $("#lightBox").click(function(e:any){
  //   if (e.target==document.querySelector("#lightBox"))
  //   closeLightBox();
  //  });
  }

 

  showImg(e:any){
    // alert($(e.target).next().getAttr("src")+"\n fff"); 
    console.log(  $(e.target).prev()  );
    
    
  }

}

