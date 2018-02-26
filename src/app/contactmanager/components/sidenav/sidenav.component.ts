import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  users=[];
  errorMsg:null;
  private mediaMatcher:MediaQueryList=matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone:NgZone,private _service:UserService) {
    this.mediaMatcher.addListener(mql=>
    zone.run(()=>  this.mediaMatcher=mql));
   }

  ngOnInit() {
    this._service.getEmployees().subscribe(data => this.users = data,
      error => this.errorMsg = error);
  }
  isScreenSmall():boolean{
    return this.mediaMatcher.matches;
  }

}
