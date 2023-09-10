import { Component } from '@angular/core';
import { Code404Error } from 'src/common/errors/code404.error';
import { Code500Error } from 'src/common/errors/code500.error';
import { RetryError } from 'src/common/errors/retry.error';
import { HttpClientService } from '../../../../common/services/http-client/http-client.service';
import { SnackBarService } from 'src/common/services/snack-bar/snack-bar.service';
import { SnackBarModel } from 'src/common/services/snack-bar/snack-bar.model';

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
    private httpClient: HttpClientService,
    private snackBar: SnackBarService,
  ) {}

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

  openSnackBar() {
    let param = new SnackBarModel();
    param.message = 'hello snack bar';
    param.action = 'OK';
    param.panelClass = ['green-snackbar'];
    this.snackBar.openSnackBar(param);
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
    let param = new SnackBarModel();
    param.message =
      'エラーが発生しました。しばらく経ってからやり直してください。';
    param.action = 'OK';
    throw new RetryError(param);
  }
}
