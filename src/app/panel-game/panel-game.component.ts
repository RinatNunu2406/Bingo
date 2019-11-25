import { Component, OnInit, Input } from '@angular/core';
import {PanelGameService} from './../Services/panel-game.service'

@Component({
  selector: 'app-panel-game',
  templateUrl: './panel-game.component.html',
  styleUrls: ['./panel-game.component.css']
})
export class PanelGameComponent implements OnInit {

  constructor(private panelGameService: PanelGameService) { }
    ngOnInit() {
  }
}
