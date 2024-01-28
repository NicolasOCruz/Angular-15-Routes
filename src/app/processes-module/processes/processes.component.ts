import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent {

  process: any;

  router = inject(Router)

  activeRouter = inject(ActivatedRoute)

  ngOnInit() {
    this.activeRouter.data.subscribe((data) => {
      if (data['process']) {
          this.process = data['process'];
      } else {
          this.process = null;
      }
  });
    setTimeout(() => {
      if (navigator.onLine) {
        this.router.navigate(['/errors/http'], { replaceUrl: true });
      } else {
        this.router.navigate(['/errors/connection'], { replaceUrl: true });
      }
      
    }, 5000);
  }
}
