import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-index',
  templateUrl: './error-index.component.html',
  styleUrls: ['./error-index.component.css']
})
export class ErrorIndexComponent {

  location = inject(Location)

  return(): void {
    this.location.back();
  }
}
