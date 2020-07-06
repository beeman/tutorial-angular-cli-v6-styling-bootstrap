import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container py-3 py-md-5">
      <div class="jumbotron">
        <h2>About</h2>
      </div>
    </div>
  `,
  styles: [],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
