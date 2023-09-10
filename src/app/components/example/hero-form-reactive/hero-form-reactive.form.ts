import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';

export class HeroFormReactiveForm {
  static validateForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i),
    ]),
    alterEgo: new FormControl(''),
    power: new FormControl('', Validators.required),
  });

  static validateMessage: {
    [key: string]: {
      [key: string]: string;
    };
  } = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 4 characters long.',
      forbiddenName: 'Name cannot be Bob.',
    },
    alterEgo: {},
    power: {
      required: 'Power is required.',
    },
  };
}
