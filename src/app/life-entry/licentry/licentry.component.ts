import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licentry',
  templateUrl: './licentry.component.html',
  styleUrls: ['./licentry.component.scss']
})
export class LICEntryComponent implements OnInit {
  advance = false;
  current = false;
  nominee = false;
  neft = false;
  more = false;
  doc = false;
  notes = false;
  activeState = 'Current Status';
  togglestate = 'YES'
  states = [
    'Current Status',
    'Nominee',
    'NACH & NEFT',
    'More Info',
    'Documents',
    'Notes',
  ]
  ipO = 20;
  ipT = 20;
  ipTh = 1000;
  ipF = 20;
  ipFi = 20;
  ipS = 2000;
  ipSe = 20;
  ipE = 20;
  ipN = 3000;

docTable = [{ "name": "Max", "age": "5", "country": "Anywhere" }]

  toggle = [
    'YES',
    'NO',
  ]
  EditableOne: boolean;
  EditableTwo: boolean;
  EditableThree: boolean;
  

  
  constructor() { }

  ngOnInit(): void {
  }


  addRow() {    
   this.docTable.push({ "name": "M", "age": "4", "country": "Anywhere" })
      console.log(this.docTable);
  }


  deleteRow(index) {  
    if(this.docTable.length ==1) {  
        return false;  
    } else {  
        this.docTable.splice(index, 1);  
        return true;  
    }  
}

  toggleActive(state){
    this.togglestate = state;
  }

  Editable1(event) {
    if ( event.target.checked ) {
        this.EditableOne = true;
   }
   else
        this.EditableOne = false;
}
Editable2(event) {
  if ( event.target.checked ) {
      this.EditableTwo = true;
 }
 else
      this.EditableTwo = false;
}
Editable3(event) {
  if ( event.target.checked ) {
      this.EditableThree = true;
 }
 else
      this.EditableThree = false;
}

ip1(event){
this.ipO = event.target.value;
}
ip2(event){
  this.ipT = event.target.value;
}
ip3(event){
    this.ipTh = event.target.value;
}
ip4(event){
      this.ipF = event.target.value;
}
ip5(event){
  this.ipFi = event.target.value;
}
ip6(event){
  this.ipS = event.target.value;
}
ip7(event){
  this.ipSe = event.target.value;
}
ip8(event){
  this.ipE = event.target.value;
}
ip9(event){
  this.ipN = event.target.value;
}
  showAdv(){
    this.advance = true;
    this.current = true;
    this.nominee = false;
    this.neft = false;
    this.more = false;
    this.doc = false;
    this.notes = false;
    this.activeState = 'Current Status';
  }


setStateAsActive(state) {
  this.activeState = state;
  if(this.activeState == 'Current Status'){
    this.current = true;
    this.nominee = false;
    this.neft = false;
    this.more = false;
    this.doc = false;
    this.notes = false;
  }
  if(this.activeState == 'Nominee'){
    this.current = false;
    this.nominee = true;
    this.neft = false;
    this.more = false;
    this.doc = false;
    this.notes = false;
  }
  if(this.activeState == 'NACH & NEFT'){
    this.current = false;
    this.nominee = false;
    this.neft = true;
    this.more = false;
    this.doc = false;
    this.notes = false;
  }
  if(this.activeState == 'More Info'){
    this.current = false;
    this.nominee = false;
    this.neft = false;
    this.more = true;
    this.doc = false;
    this.notes = false;
  }
  if(this.activeState == 'Documents'){
    this.current = false;
    this.nominee = false;
    this.neft = false;
    this.more = false;
    this.doc = true;
    this.notes = false;
  }
  if(this.activeState == 'Notes'){
    this.current = false;
    this.nominee = false;
    this.neft = false;
    this.more = false;
    this.doc = false;
    this.notes = true;
  }

}
  
}
