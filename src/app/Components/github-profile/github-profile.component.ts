import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.css'
})
export class GithubProfileComponent {
  @Input() githubProfile:any;
}
