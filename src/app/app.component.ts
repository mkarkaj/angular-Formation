import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  text = "TOTO";
}

////////////////////////////////////////////
//TESTS
class RaceList {
raceService: RaceService;
races: Array<string>;
constructor(raceService: RaceService) {
// the interesting part is `: RaceService`
this.raceService = raceService;
this.raceService.list()
.then(races => this.SetRace(races));
}

SetRace(races){
  this.races = races;
  for(let r of this.races){
    console.log(r);
  }
}
}

const fakeService = {
list: () => {
  return new Promise(function (resolve) {
    resolve(["COCO","TOTO"]);
  });
}
};
const raceList = new RaceList(fakeService);