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

  table = [
    1
  ]
  toggle = [
    'YES',
    'NO',
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(state){
    this.togglestate = state;
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
