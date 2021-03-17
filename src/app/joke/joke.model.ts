export class Joke {
    constructor(private _id :number, private _setup: string, private _punchline: string) {}
    get id(): number {
      return this._id;
    }
    get setup(): string {
      return this._setup;
    }
    get punchline(): string {
      return this._punchline;
    }
    static fromJSON(json: any): Joke {
      return new Joke(json.id, json.setup, json.punchline);
    }
  }