import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle' ;
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }