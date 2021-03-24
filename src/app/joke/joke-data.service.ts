import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeDataService {
  private _jokes: Array<Joke> = new Array<Joke>();

  constructor(private _http: HttpClient) {}

  get jokes(): Array<Joke> {
    return this._jokes;
  }

  getRandomJoke(): void {
    this._http
      .get(`https://official-joke-api.appspot.com/random_joke`)
      .pipe(map((json) => Joke.fromJSON(json)))
      .subscribe((joke: Joke) => (this._jokes = [...this._jokes, joke]));
  }

  deleteJoke(id: number): void {
    this._jokes = this._jokes.filter((x) => x.id !== id);
  }
}
