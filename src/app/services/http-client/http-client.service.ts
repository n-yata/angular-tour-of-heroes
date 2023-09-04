import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private endpoint: string = 'https://b.hatena.ne.jp/entry/json/';

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http
      .get<any>(url)
      .pipe(this.backoff(3, 250), catchError(this.handleError<any>()));
  }

  /**
   * 指数関数的バックオフ
   * @param maxTries
   * @param initialDelay
   * @returns
   */
  private backoff(maxTries: number, initialDelay: number) {
    return retry({
      count: maxTries,
      delay: (error, retryCount) => timer(initialDelay * retryCount ** 2),
    });
  }

  /**
   * 失敗したHttp操作を処理
   * アプリを持続させる
   * @param operation 失敗した操作の名前
   * @param result observableな結果として返す任意の値
   * @returns result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 404) {
        console.error(error);
      } else if (error.status === 500) {
        console.error(error);
      } else {
        throw new Error();
      }

      return of(result as T);
    };
  }
}
