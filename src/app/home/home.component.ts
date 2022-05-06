import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, EventData } from '@nativescript/core'
import { User } from "../../model/user"

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public user: User;

  constructor() {
    // Use the component constructor to inject providers.
    this.user = new User();
    this.user.id  = "1";
    this.user.name = "User1";
    

  }

  ngOnInit(): void {
    // Init your component properties here.
  }
  onButtonTap(args: EventData) {
    this.user.id  = "2";
    this.user.name = 'User2';
    }
    
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
