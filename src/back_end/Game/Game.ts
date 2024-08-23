import { WaitingCardStack } from "../Card/WaitingCardStack";
import { NormalWaitingCardStack } from "../Card/WaitingCardStacks/NormalWaitingCardStack";
import { Player } from "../Player/Player";
import { GameSession } from "./GameSession";

export class Game{
    public players:Array<Player>;
    public inviteCode:number;
    public password:string|null;
    public cardStack:WaitingCardStack = new NormalWaitingCardStack()//以后这里可以选牌组
    public playPlayerIndex: number
    public playOrder:1|-1 = 1
    constructor(owner:Player,password:string|null, invite_code:number){
        this.players = [owner];
        this.password = password;
        this.inviteCode = invite_code;
        this.playPlayerIndex = Math.floor(Math.random()*this.players.length + 1);
    }
    public playerJoin(player:Player){
        this.players.push(player);
    }
    public end(game_session:GameSession){

    }
    public start(){
        this.players.forEach(player=>{
            this.cardStack.getCard(player,5)//发牌数以后记得改
        })
    }
    public nextPlayer(){
        if(this.playPlayerIndex + this.playOrder >= this.players.length) {
            this.playPlayerIndex = 0
        } else if (this.playPlayerIndex + this.playOrder < 0) {
            this.playPlayerIndex = this.players.length - 1
        }
        let pl = this.players[this.playPlayerIndex]
        if (pl.cannotMoveRound > 0){
            pl.cannotMoveRound --
            //这里以后可以加一个无法行动的提示
            this.nextPlayer()
        }
    }
}