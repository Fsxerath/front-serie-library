import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response.dto';
import { PostProgressRequestDto } from '../dtos/request/post.progress.request.dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  url = environment.apiBase + '/progress/';
  constructor(private http: HttpClient) { }

  getProgress(id: string): Observable<GetProgressResponseDto[]>{
    return this.http.get<GetProgressResponseDto[]> (this.url + id);
  }
  postProgress(progress: PostProgressRequestDto): Observable<PostProgressRequestDto>{
    return this.http.post<PostProgressRequestDto>(this.url, progress);
  }
}
