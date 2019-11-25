import { Injectable, ɵConsole } from '@angular/core';
import {PanelGameService} from './panel-game.service'

const sizeOfCard = 3;

@Injectable({
  providedIn: 'root'
})
export class CardGameService {

    public myCard : any = [[1, 11, 111], [2, 22, 222], [3,33,333]];
 // public myCard : any = [[1, 11], [2, 22]];

  constructor(private panelGameService: PanelGameService) { 
    this.myCard.forEach(element => {

        for (let i=0 ; i < sizeOfCard; i++)
        { 
            element[i] = panelGameService.getRandonNumber();
        }
    });
  }

  checkNumExist(num:Number){
    this.myCard.forEach(element =>{
      // element.array.forEach(e2 => {
      //   if (e2 == num)
      //   {
      //     e2 = 'X';

      //     console.log(`numX = ` + num);
      //   }
      // });

      for (let i = 0; i < sizeOfCard; i++)
      {
        if (element[i] == num)
        {
          element[i] = 'X';

          console.log(`numX = ` + num);
        }
      }
    });
  }

  checkIfBingo(){
    let countOfX = 0;
    
    this.myCard.forEach(element => {
      element.forEach(e1 => {
          if (e1 == 'X')
          countOfX++;
      });
    });

    return  (countOfX == sizeOfCard*sizeOfCard);
  }
 }
