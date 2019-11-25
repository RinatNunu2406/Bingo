import { Component } from '@angular/core';
import {PanelGameService} from './Services/panel-game.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGame1';

  constructor(private panelGameService:PanelGameService){
    
  }
  public StartGame() {
    this.panelGameService.StartGame(); 
  }

  // public StartGame(event: Event) : void {
  //   // console.log(‘Click!’, event)
  //   this.panelGameService.startGame(); 
  // }
}
