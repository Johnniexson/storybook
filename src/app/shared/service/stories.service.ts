import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const BASE_URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  createStory(data): Observable<any> {
    return this.httpClient.post<any>(`${BASE_URL}/stories`, data);
  }

  getStory(storyID): Observable<any> {
    return this.httpClient.get<any>(`${BASE_URL}/stories/${storyID}`);
  }

  updateStory(storyID, status): Observable<any> {
    return this.httpClient.get<any>(`${BASE_URL}/stories/${storyID}/${status}`);
  }

  getStories(): Observable<any> {
    return this.httpClient.get<any>(`${BASE_URL}/stories`);
  }
}
