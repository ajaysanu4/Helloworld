import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  food: string;
  name: string = "Ajay";
  year: number = 2019;
  price: number = 200;
  Headings: string = "Welcome to Codex";

  constructor() {
    this.food = "Biriyani";
    console.log("constructor innitialisation");
  }
  IncreasePrice = () => {
    console.log("increase price");
    this.price += 2;
  };
}
