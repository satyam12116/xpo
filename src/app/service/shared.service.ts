import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  ans!:any;
  sharedSubject = new BehaviorSubject(this.ans);
  constructor() { }
}
