import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrl: './github-profile-card.component.css'
})
export class GithubProfileCardComponent {
  @Input() githubProfile:any;

}
