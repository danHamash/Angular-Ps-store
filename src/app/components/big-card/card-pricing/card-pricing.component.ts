import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: false,
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit{


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
