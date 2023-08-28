import { Component } from '@angular/core';
import { Code404Error } from 'src/common/errors/code404.error';
import { Code500Error } from 'src/common/errors/code500.error';
import { RetryError } from 'src/common/errors/retry.error';

@Component({
  selector: 'app-tmp',
  templateUrl: './tmp.component.html',
  styleUrls: ['./tmp.component.css'],
})
export class TmpComponent {
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
