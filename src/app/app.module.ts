import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GithubAppComponent } from './Components/github-app/github-app.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './Components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './Components/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './Components/github-repos/github-repos.component';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
