import { Card } from "../Card/Card";

export class Player{
    public name:string;
    public hand:Array<Card>=[];
    public cannotMoveRound:number = 0;

    //基础属性，以后还可以改
    public handMax:number = 5
    public maxHealth = 5;
    public health:number = this.maxHealth;
    public maxMana = 5;
    public mana:number = this.maxMana;
    constructor(name:string){
        this.name=name;
    }
    addCard(card:Card){
        if (this.hand.length < this.handMax){
            this.hand.push(card);
            return true
        } else {
            return false
        }
    }
    useCard(index:number){

    }
}