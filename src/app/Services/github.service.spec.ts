import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get profile data', () => {
    const searchQuery = 'johnpapa';
    const profileData = { name: 'John Papa', bio: 'Angular guru' };

    service.getProfile(searchQuery).subscribe((data) => {
      expect(data).toEqual(profileData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${searchQuery}`);
    req.flush(profileData);
  });

  it('should get repos data', () => {
    const searchQuery = 'johnpapa';
    const reposData = [{ name: 'Repo 1' }, { name: 'Repo 2' }];

    service.getRepos(searchQuery, 1, 2).subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(reposData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${searchQuery}/repos?page=1&per_page=2`);
    req.flush(reposData);
  });
});

