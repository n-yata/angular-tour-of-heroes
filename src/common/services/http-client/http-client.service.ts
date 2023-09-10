import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, timeout, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private endpoint: string = 'https://b.hatena.ne.jp/entry/json/';

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response',
  };

  constructor(private http: HttpClient) {}

  /**
   * Getリクエスト
   * @param url
   * @param strings
   * @returns
   */
  get(url: string, strings?: Map<string, string>): Observable<any> {
    url = this.endpoint + url;

    let params = new URLSearchParams();
    if (strings !== undefined) {
      strings.forEach((key, value) => {
        params.set(key, value);
      });
      url = `${url}?${params.toString()}`;
    }

    return this.http
      .get<any>(url, this.httpOptions)
      .pipe(
        timeout(10000),
        this.backoff(3, 250),
        catchError(this.handleError<any>()),
      );
  }

  /**
   * Postリクエスト
   * @param url
   * @param body
   * @returns
   */
  post(url: string, body: {} = {}): Observable<any> {
    url = this.endpoint + url;

    return this.http
      .post<any>(url, body, this.httpOptions)
      .pipe(
        timeout(10000),
        this.backoff(3, 250),
        catchError(this.handleError<any>()),
      );
  }

  /**
   * Delete リクエスト
   * @param url
   * @param strings
   * @returns
   */
  delete(url: string, strings?: Map<string, string>): Observable<any> {
    url = this.endpoint + url;

    let params = new URLSearchParams();
    if (strings !== undefined) {
      strings.forEach((key, value) => {
        params.set(key, value);
      });
      url = `${url}?${params.toString()}`;
    }

    return this.http
      .delete<any>(url, this.httpOptions)
      .pipe(
        timeout(10000),
        this.backoff(3, 250),
        catchError(this.handleError<any>()),
      );
  }

  /**
   * Put リクエスト
   * @param url
   * @param body
   * @returns
   */
  put(url: string, body: {} = {}): Observable<any> {
    url = this.endpoint + url;

    return this.http
      .put<any>(url, body, this.httpOptions)
      .pipe(
        timeout(10000),
        this.backoff(3, 250),
        catchError(this.handleError<any>()),
      );
  }

  /**
   * Patch リクエスト
   * @param url
   * @param body
   * @returns
   */
  patch(url: string, body: {} = {}): Observable<any> {
    url = this.endpoint + url;

    return this.http
      .patch<any>(url, body, this.httpOptions)
      .pipe(
        timeout(10000),
        this.backoff(3, 250),
        catchError(this.handleError<any>()),
      );
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
