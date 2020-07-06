import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container py-3 py-md-5">
      <div class="jumbotron">
        <h2>Contact</h2>
        <form [formGroup]="form">
          <div class="form-group">
            <label>Name</label>
            <input formControlName="name" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input formControlName="name" type="email" class="form-control" />
          </div>
          <button (click)="submit()" type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public submit() {
    console.log(this.form.value);
  }
}
