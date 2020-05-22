import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { userInfo } from 'os';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle:string = 'MARHABA';
  connectedUser: User;
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  isConnected(){
    if (this.userService.isConnected()){
    this.connectedUser = this.userService.getConnectedUserinfos();
    } return this.userService.isConnected();
  }



}
