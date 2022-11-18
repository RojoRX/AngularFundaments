import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-materialdemo',
  templateUrl: './materialdemo.component.html',
  styleUrls: ['./materialdemo.component.css']
})
export class MaterialdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
