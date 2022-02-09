import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LICEntryComponent } from './licentry/licentry.component';
import { FormsModule  } from '@angular/forms'


@NgModule({
  declarations: [LICEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LifeEntryModule { }
