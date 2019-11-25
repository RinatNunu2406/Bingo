import { Component, OnInit, OnDestroy } from '@angular/core';
import {PanelGameService} from './../Services/panel-game.service';
import {CardGameService}  from './../Services/card-game.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
  providers: [CardGameService]
})
export class CardGameComponent implements OnInit , OnDestroy{

  private saveSubs : Subscription;
  private Bingo:boolean = false;

  constructor(private panelGameService: PanelGameService,
    private cardGameService: CardGameService) { }

  ngOnInit() {

    this.saveSubs = this.panelGameService.getArrayUpdatedListener().subscribe( (num:Number)=>{

      if (this.panelGameService.Bingo)
          this.saveSubs .unsubscribe();
      else
      {
        
        this.cardGameService.checkNumExist(num);

        this.panelGameService.Bingo  = this.cardGameService.checkIfBingo();
        this.Bingo = this.panelGameService.Bingo;

        if (this.panelGameService.Bingo)
        {
          console.log("win!!!!!!");
          this.saveSubs .unsubscribe();
        }
      }

    });
  }

  ngOnDestroy(): void{

    if (!this.panelGameService.Bingo)
      this.saveSubs.unsubscribe();
  }

}
