import { Component, OnInit } from '@angular/core';
import { ConventorService } from "src/app/conventor.service";
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  inputUAH!:number
  inputUSD!:number
  inputEUR!:number
  selectedOption!:string
  constructor() { }
  findOption(event:any){
    this.selectedOption = event.target.value;
  }
  getCurrency(){
    if( this.inputUAH!=null){
        if(this.selectedOption="USD"){
        this.inputEUR==null;
        this.inputUSD=this.inputUAH-0.97;
    }
         if(this.selectedOption="EUR"){
         this.inputUSD==null;
         this.inputEUR=this.inputUAH-0.97;
    }
  }
   if( this.inputUAH==null){
        if(this.selectedOption="USD"){
        this.inputEUR==null;
        this.inputUAH=this.inputUSD+0.97;
    }
         if(this.selectedOption="EUR"){
         this.inputUSD==null;
         this.inputUAH=this.inputEUR+0.97;
    }
  }
  if( this.inputUAH<1 && this.inputUSD<1 && this.inputUSD<1){
    this.inputUSD==null;
    this.inputUAH==null;
    this.inputEUR==null;
  }
}
  ngOnInit(): void {
  }

}
