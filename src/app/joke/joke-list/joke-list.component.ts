import { Component, OnInit } from '@angular/core';
import { JokeDataService } from '../joke-data.service';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  constructor(private _jokeDataService : JokeDataService) { }

  getRandomJoke() : void {
    this._jokeDataService.getRandomJoke();
  }

  get jokes() : Array<Joke> {
    return this._jokeDataService.jokes;
  }

  ngOnInit(): void {
  }

}
