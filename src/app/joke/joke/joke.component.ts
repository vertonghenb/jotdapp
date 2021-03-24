import { Component, Input, OnInit } from '@angular/core';
import { JokeDataService } from '../joke-data.service';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() public joke: Joke

  constructor(private _jokeDataService : JokeDataService) { }

  deleteJoke(){
    this._jokeDataService.deleteJoke(this.joke.id);
  }

  ngOnInit(): void {
  }

}
