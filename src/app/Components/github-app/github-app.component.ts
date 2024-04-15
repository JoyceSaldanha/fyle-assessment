import { Component } from '@angular/core';
import { GithubService } from '../../Services/github.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrl: './github-app.component.css'
})
export class GithubAppComponent{
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos: any[] = [];
  public pagedRepos: any[] = [];
  public errorMessage!: string;
  public currentPage: number = 1;
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [10, 25, 50, 100];
  public totalPages: number = 1;

  constructor(private githubService: GithubService) {}

 searchUser(): void {
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
    });
    this.fetchRepositories();
  }

 onPageChange(page: number): void{
    this.currentPage = page;
    this.fetchRepositories();
  }

 onPageSizeChange(event: any): void {
    this.currentPage = 1;
    this.pageSize = event.target.value;
    this.fetchRepositories();
  }

   fetchRepositories(): void {
    this.githubService.getRepos(this.githubUserQuery,this.currentPage,this.pageSize).subscribe((data) => {
      this.githubRepos = data;
      this.pagedRepos = data;
      this.totalPages = Math.ceil(this.githubRepos.length/this.pageSize)
    })
  }

   getPageRange(): number[] {
    const range = [];
    const maxPages = 9;

    const startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(this.totalPages, startPage + maxPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  }
}
