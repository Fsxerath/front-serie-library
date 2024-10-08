import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response.dto';
import { PostProgressRequestDto } from '../dtos/request/post.progress.request.dto';
import { PatchProgressRequestDto } from '../dtos/request/patch.progress.request.dto';
import { PaginationResponse } from 'src/app/shared/types/pagination.response.type';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  url = environment.apiBase + '/progress/';
  constructor(private http: HttpClient) {}

  getProgress(
    id: string,
    page: number,
    limit: number
  ): Observable<PaginationResponse<GetProgressResponseDto>> {
    return this.http.get<PaginationResponse<GetProgressResponseDto>>(
      this.url + 'series/' + id,
      {
        params: {
          page: page.toString(),
          limit: limit.toString(),
        },
      }
    );
  }
  postProgress(
    progress: PostProgressRequestDto
  ): Observable<PostProgressRequestDto> {
    return this.http.post<PostProgressRequestDto>(this.url, progress);
  }
  patchProgress(
    editProgress: PatchProgressRequestDto
  ): Observable<PatchProgressRequestDto> {
    const { chapter, resume } = editProgress;
    return this.http.patch<PatchProgressRequestDto>(
      this.url + editProgress.id,
      { chapter, resume }
    );
  }
  deleteProgress(id: string): Observable<void> {
    return this.http.delete<void>(this.url + 'all/' + id);
  }
}
