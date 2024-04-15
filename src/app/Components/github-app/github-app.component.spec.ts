import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAppComponent } from './github-app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { GithubService } from '../../Services/github.service';

describe('GithubAppComponent', () => {
  let component: GithubAppComponent;
  let fixture: ComponentFixture<GithubAppComponent>;
  let githubService: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [GithubAppComponent, AppComponent],
      providers: [GithubService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubAppComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchUser method on form submit', () => {
    const searchSpy = spyOn(component, 'searchUser');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(searchSpy).toHaveBeenCalled();
  });

  it('should call fetchRepositories method on searchUser method call', () => {
    const fetchSpy = spyOn(component, 'fetchRepositories');
    component.searchUser();
    expect(fetchSpy).toHaveBeenCalled();
  });

  it('should set githubProfile property on getProfile method call success', () => {
    const data = {
      name: 'Test User',
      login: 'testuser',
      avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      bio: 'Test User Bio'
    };
    const getProfileSpy = spyOn(githubService, 'getProfile').and.returnValue(of(data));
    component.searchUser();
    expect(component.githubProfile).toEqual(data);
  });

  it('should set githubRepos property on getRepos method call success', () => {
    const data = [
      {
        name: 'Test Repo 1',
        description: 'Test Repo 1 Description',
        html_url: 'https://github.com/testuser/testrepo1'
      },
      {
        name: 'Test Repo 2',
        description: 'Test Repo 2 Description',
        html_url: 'https://github.com/testuser/testrepo2'
      }
    ];
    const getReposSpy = spyOn(githubService, 'getRepos').and.returnValue(of(data));
    component.fetchRepositories();
    expect(component.githubRepos).toEqual(data);
  });

  it('should set totalPages property on fetchRepositories method call success', () => {
    const data = [
      {
        name: 'Test Repo 1',
        description: 'Test Repo 1 Description',
        html_url: 'https://github.com/testuser/testrepo1'
      },
      {
        name: 'Test Repo 2',
        description: 'Test Repo 2 Description',
        html_url: 'https://github.com/testuser/testrepo2'
      },
      {
        name: 'Test Repo 3',
        description: 'Test Repo 3 Description',
        html_url: 'https://github.com/testuser/testrepo3'
      }
    ];
    component.githubRepos = data;
    component.pageSize = 2;
    component.fetchRepositories();
    expect(component.totalPages).toEqual(1);
  });

  it('should set currentPage property on onPageChange method call', () => {
    component.onPageChange(2);
    expect(component.currentPage).toEqual(2);
  });

  it('should set pageSize property on onPageSizeChange method call', () => {
    component.onPageSizeChange({ target: { value: 25 } });
    expect(component.pageSize).toEqual(25);
  });

});
