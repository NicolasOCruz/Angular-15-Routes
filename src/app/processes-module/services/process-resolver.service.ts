import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProcessResolver implements Resolve<any> {

  //myService = inject("my-service")

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /*const processId = route.params['processId']

    if (processId) {
      return this.myService.get(processId)
    } else {
      return null;
    }*/
  }
}
