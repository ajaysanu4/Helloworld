import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import bootstrap from "bootstrap";

import { AppComponent } from "./app.component";
import { WorldcupComponent } from "./worldcup/worldcup.component";

@NgModule({
  declarations: [AppComponent, WorldcupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, WorldcupComponent]
})
export class AppModule {}
