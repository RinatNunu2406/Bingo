import { Injectable, OnInit } from '@angular/core';
import {interval, timer, Subject } from 'rxjs';


const myArrayMaxIndex = 15;
const maxNumInBord = 99;
@Injectable({
  providedIn: 'root'
})
export class PanelGameService{
  public  panelGame = [];
  public myTimer;
  public myTimerSubscribe = null;
  public Bingo = false;

  public validNumberInBord: any = [100];

  private arrayUpdated = new Subject<Number>();

  constructor() {     
    console.log('PanelGameService: const');

    for (let i = 0; i < myArrayMaxIndex ; i++) {
      this.panelGame[i] = i;
     }

     for (let i=0; i <maxNumInBord; i++ )
        this.validNumberInBord[i] = i;

    
      this.StartGame();     
  }

  public StartGame()
  {
    if (this.myTimerSubscribe == null)
       // set timer 
       this.myTimer = interval(1000);
       this.myTimerSubscribe = this.myTimer.subscribe(() =>
       {  
        if (this.Bingo)
        {
          this.StopGame();
          console.log( " GAME OVER !!!");
        }
        else
        {
          for (let i = myArrayMaxIndex-1; i >0 ; i--) {
            this.panelGame[i] = this.panelGame[i-1];
           }
   
           this.panelGame[0] = this.getRandonNumberForPanel();
           this.arrayUpdated.next(this.panelGame[0]);
          }
       })

  }

  StopGame():void{
    this.myTimerSubscribe.unsubscribe();
    this.myTimerSubscribe = null;
  }

  public getArrayUpdatedListener(){
    return this.arrayUpdated.asObservable();
  }

  getRandonNumberForPanel() : number{
    let contLoop  = true;
    let numRand = -1;
    let countNum = 0;

    while (contLoop && countNum <= maxNumInBord)
    {
      countNum++;
      numRand = this.getRandonNumber();
      if (this.validNumberInBord[numRand] !== 'X')
      {
        this.validNumberInBord[numRand]  = 'X';
        contLoop = false;
      }
    }

    return numRand;
  }
  

  public getRandonNumber() : number {
    let randNum = Math.random() * 99;
    randNum = Math.floor(randNum);
    return randNum;
  }
  public getPanelArray(){
    return [...this.panelGame];
  }
}
