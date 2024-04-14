import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrl: './github-repos.component.css'
})
export class GithubReposComponent {
  @Input() githubRepos: any[] = [];
}
