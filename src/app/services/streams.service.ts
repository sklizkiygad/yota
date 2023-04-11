import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class streamsService {

  constructor(private httpClient: HttpClient) {

  }
  public getStreams(url: string): Observable<Number[]> {
    return this.httpClient.get<Number[]>(url);
  }



}
