import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {PartiesComponent} from "./parties/parties.component";

import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    PartiesComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
