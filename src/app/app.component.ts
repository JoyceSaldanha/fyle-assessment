import { Component ,OnInit} from '@angular/core';
import { GithubService } from './Services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fyle';
  constructor(
    private apiService: GithubService
  ) {}

  ngOnInit() {
    this.apiService.getProfile('johnpapa').subscribe(console.log);
  }
}
