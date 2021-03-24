import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./../material/material.module";
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [JokeListComponent, JokeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [JokeListComponent]
})
export class JokeModule { }
