import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  $(".form-group input , .form-group textarea").focus(function(e:any){
  var labelId= (e.target).getAttribute("id");
  // console.log(labelId);
  var label:any=document.getElementById(`${labelId}Label`);
  console.log(labelId);
  label.classList.add("greenColor");
  label.style=("border:0px;");

  });

  $(".form-group input , .form-group textarea").blur(function(e:any){
    var labelId= (e.target).getAttribute("id");
    // console.log(labelId);
    var label:any =document.getElementById(`${labelId}Label`);
    label.classList.remove("greenColor");
    });
  }

}
