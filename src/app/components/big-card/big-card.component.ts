import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

        @Input()
        cardPhoto:string="";

        @Input()
        gameLabel:string=""

        @Input()
        gameTitle:string="";
        @Input()
        gameVersion: string="";
        @Input()
        gameCompatible:string="";
        @Input()
        gameValue:string="";

  constructor(){}
  ngOnInit(): void {

  }

}
