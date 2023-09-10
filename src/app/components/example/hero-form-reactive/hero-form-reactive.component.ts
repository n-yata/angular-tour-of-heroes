import { Component, OnInit } from '@angular/core';
import { HeroFormReactiveForm } from './hero-form-reactive.form';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['', 'Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm = HeroFormReactiveForm.validateForm;
  heroMessage = HeroFormReactiveForm.validateMessage;
  errorMessages: Map<string, string> = new Map();
  errorIds: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  callValid() {
    let resMap: Map<string, string> = new Map();

    for (const field in this.heroForm.controls) {
      let control = this.heroForm.get(field);

      if (control === null || control?.errors === null) {
        continue;
      }

      let key = this.heroMessage[field];
      for (const error in control.errors) {
        resMap.set(field, key[error]);
        break;
      }
    }

    this.errorMessages = resMap;

    for (const field in this.heroForm.controls) {
      let fieldId = '#' + field;

      if (this.errorMessages.has(field)) {
        $(fieldId).addClass('form-error');
        continue;
      }

      $(fieldId).removeClass('form-error');
    }
  }

  get name() {
    return this.heroForm.get('name')!;
  }

  get power() {
    return this.heroForm.get('power')!;
  }

  get alterEgo() {
    return this.heroForm.get('alterEgo')!;
  }
}

interface heroMessage {
  [key: string]: {
    [key: string]: string;
  };
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
