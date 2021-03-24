import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./../material/material.module";
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [JokeListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [JokeListComponent]
})
export class JokeModule { }
