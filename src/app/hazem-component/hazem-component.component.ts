import { Component } from '@angular/core';
import { Cons } from 'rxjs';

@Component({
  selector: 'app-hazem-component',
  standalone: true,
  imports: [],
  templateUrl: './hazem-component.component.html',
  styleUrl: './hazem-component.component.css'
})
export class HazemComponentComponent {
  
person:Persons;
  
constructor(){
  this.person={
    id:2,
    name:"Hazem",
    age:23
  }  
}  
  
  
  
  
  
  
  
  // name="Fahem";
  // addrass:any;
  // names:any[]=["hazem","Fahem",1,2,3,4];
  // age:number=22;
  // constructor(){
  //  this.name="Ali";
  //  this.age=4;
  //  this.changename();
  
  // }
  // changenames(){
  //   return this.name="Alyaari";
  // }
  //   changename(){
  //   this.name="Mohammed";
  //  }
}


interface Persons{
id:number,
name:string,
age:number
}