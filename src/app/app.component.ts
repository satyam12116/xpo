import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xpo';
  menuType: string = 'default';
  constructor(private ss:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.ss.sharedSubject.subscribe(res=>{
      this.menuType=res?.state?res?.state:'default'
    })
  }
  handler(){
    this.ss.sharedSubject.next({state:'default',userId:'',emailId:''})
    this.router.navigate([''])
  }
}