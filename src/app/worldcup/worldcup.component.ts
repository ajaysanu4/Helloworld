import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-worldcup",
  templateUrl: "./worldcup.component.html",
  styleUrls: ["./worldcup.component.css"]
})
export class WorldcupComponent implements OnInit {
  path: string = "assets/star-india.jpeg";
  winner: string;
  teams: any = [];
  togglewinner: boolean;

  constructor() {
    this.teams.push({name:"India",wins:2});
    this.teams.push({name:"pakistan",wins:2});
    this.teams.push({name:"Australia",wins:2});
    this.teams.push({name:"WestIndies",wins:2});
    this.teams.push({name:"Bangladesh",wins:2});
    this.teams.push({name:"Shrilanka",wins:2});
    this.teams.push({name:"England",wins:2});
    this.teams.push({name:"Newzeland",wins:2});
    this.teams.push({name:"Afganistan",wins:2});
    this.teams.push({name:"SouthAfrica",wins:2});
  }

  getWinner = Team => {
    console.log(Team);
    this.winner = Team;
  };

  togle = () => {
    this.togglewinner = !this.togglewinner;
  };

  
  ngOnInit() {}
}
