import { Player } from "../Player/Player";
import { Card } from "./Card";

export class WaitingCardStack{
    public cardsData:Array<CardData> = new Array<CardData>();
    public cards:Array<Card> = new Array<Card>();

    constructor(cards_data:Array<CardData>){
        this.cardsData = cards_data
    }
    public init(){
        this.cardsData.forEach(card_data => {
            let i = 0
            while (i < card_data.amount) {
                this.cards.push(card_data.card);
            }
        })
        this.shuffle();
    }
    private shuffle(){
        let unsorted = this.cards.length - 1
        while (unsorted > 0) {
            let random_index = Math.floor(Math.random() * (unsorted + 1))
            let target_card = this.cards[random_index]
            this.cards.splice(random_index, 1)
            this.cards.push(target_card);
            unsorted--;
        }
    }
    public getCard(player:Player,amount:number){
        let i = 0
        while(i < amount){
            if(player.addCard(this.cards[0])){
                this.cards.splice(0,1);
                i ++;
            } else {
                return i
            }
        }
        return i
    }
}

export interface CardData{
    card:Card;
    amount:number;
}