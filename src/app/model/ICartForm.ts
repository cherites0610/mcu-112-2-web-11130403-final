import { FormControl } from '@angular/forms';

export interface ICartForm {
  name: FormControl<string | null>;
  address: FormControl<string | null>;
  phone: FormControl<number | null>;
}