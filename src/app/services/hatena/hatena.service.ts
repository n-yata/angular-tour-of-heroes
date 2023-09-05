import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HatenaService {
  private endpoint: string = 'https://b.hatena.ne.jp/entry/json/';

  constructor(private http: HttpClient) {}

  requestGet(strings: Map<string, string>): Observable<any> {
    let url: string = this.endpoint;

    let params = new URLSearchParams();
    if (strings) {
      strings.forEach((key, value) => {
        params.set(key, value);
      });
      url = `${url}?${params.toString()}`;
    }

    return this.http.get<any>(url);
  }
}
