import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrl: './github-profile-data.component.css'
})
export class GithubProfileDataComponent{
  @Input() githubProfile:any;
}
