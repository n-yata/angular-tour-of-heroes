import { Component } from '@angular/core';
import { Code404Error } from 'src/common/errors/code404.error';
import { Code500Error } from 'src/common/errors/code500.error';
import { RetryError } from 'src/common/errors/retry.error';
import { HttpClientService } from '../../../../common/services/http-client/http-client.service';

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

  constructor(private httpClient: HttpClientService) {}

  callGet() {
    const map = new Map<string, string>([['url', this.targetUrl]]);
    this.httpClient.get(this.targetUrl, map).subscribe({
      next: (entries) => {
        console.log(entries);
      },
      error: (e) => {
        throw e;
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
