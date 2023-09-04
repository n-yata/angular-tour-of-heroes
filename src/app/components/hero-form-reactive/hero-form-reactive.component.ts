import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../../shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../../shared/alter-ego.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css'],
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['', 'Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm!: FormGroup;
  heroMessage: {
    [key: string]: {
      [key: string]: string;
    };
  } = {};
  errorMessages: Map<string, string> = new Map();
  errorIds: string[] = [];

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup(
      {
        name: new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidator(/bob/i),
        ]),
        alterEgo: new FormControl(this.hero.alterEgo, {
          asyncValidators: [
            this.alterEgoValidator.validate.bind(this.alterEgoValidator),
          ],
          updateOn: 'blur',
        }),
        power: new FormControl(this.hero.power, Validators.required),
      },
      { validators: identityRevealedValidator },
    );
    this.heroMessage = {
      name: {
        required: 'Name is required.',
        minlength: 'Name must be at least 4 characters long.',
        forbiddenName: 'Name cannot be Bob.',
      },
      alterEgo: {
        uniqueAlterEgo: 'Alter ego is already taken.',
      },
      power: {
        required: 'Power is required.',
      },
      heroForm: {
        identityRevealed: 'Name cannot match alter ego.',
      },
    };
  }

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
