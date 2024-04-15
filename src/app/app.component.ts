import { Component} from '@angular/core';
import { GithubService } from './Services/github.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'fyle';
  constructor(
    private apiService: GithubService
  ) {}
}
