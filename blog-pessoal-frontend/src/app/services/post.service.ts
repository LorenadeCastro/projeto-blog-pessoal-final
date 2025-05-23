import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/postagens';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl);
  }

  create(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiUrl, post);
  }

  update(post: PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(this.apiUrl, post);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
