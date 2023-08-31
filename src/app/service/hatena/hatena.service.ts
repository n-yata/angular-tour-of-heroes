import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HatenaService {
  private endpoint: string = 'https://b.hatena.ne.jp/entry/json/';

  constructor(private http: HttpClient) { }

  requestGet(url: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('url', url);
    return this.http.get<any>(`${this.endpoint}?${params.toString()}`);
  }
}
