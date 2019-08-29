import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { Pipe } from '../.pipe';
import { GithubSearchPipe } from './github-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective,
    Pipe,
    GithubSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
