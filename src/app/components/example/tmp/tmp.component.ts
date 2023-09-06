import { Component } from '@angular/core';
import { Code404Error } from 'src/common/errors/code404.error';
import { Code500Error } from 'src/common/errors/code500.error';
import { RetryError } from 'src/common/errors/retry.error';
import { HttpClientService } from '../../../services/http-client/http-client.service';
import { HatenaService } from '../../../services/hatena/hatena.service';

@Component({
  selector: 'app-tmp',
  templateUrl: './tmp.component.html',
  styleUrls: ['./tmp.component.css'],
})
export class TmpComponent {
  res: any;
  targetUrl: string = 'https://angular.jp/';
  count: number = 0;
  comments: string[] = [];

  constructor(
    private hatenaService: HatenaService,
    private httpClient: HttpClientService,
  ) {}

  callGet() {
    const map = new Map<string, string>([['url', this.targetUrl]]);
    this.httpClient.get(this.targetUrl, map).subscribe({
      next: (entries) => {
        console.log(entries);
      },
      error: (e) => {
        throw new Error();
      },
    });
  }

  callHatena() {
    const map = new Map<string, string>([['url', this.targetUrl]]);

    this.hatenaService.requestGet(map).subscribe({
      next: (entries) => {
        console.log(entries);
        if (entries == null) {
          this.comments = [];
          this.count = 0;
          return;
        }
        let result: string[] = [];
        let resultCnt: number = 0;
        entries.bookmarks.forEach(function (value: any) {
          if (value.comment !== '') {
            result.push(value.comment);
            resultCnt++;
          }
        });
        this.comments = result;
        this.count = resultCnt;
      },
      error: (e) => {
        throw new Error();
      },
    });
  }

  throwError() {
    throw new Error();
  }

  throw404Error() {
    throw new Code404Error();
  }

  throw500Error() {
    throw new Code500Error();
  }

  throwRetryError() {
    throw new RetryError();
  }
}
