import { Player } from "../Player/Player";
import { Game } from "./Game";

export class GameSession{
    public games: Map<number,Game>;
    public inviteCodeMax: number;
    public validInviteCodeArray: Array<number> = [];
    public usingInviteCodeArray: Array<number> = [];

    constructor(invite_code_max:number){
        this.games = new Map<number,Game>();
        this.inviteCodeMax = invite_code_max;
        this.inviteCodeArrayInit()
    }
    private inviteCodeArrayInit(){
        this.usingInviteCodeArray = []
        this.validInviteCodeArray = []
        for(let i=0;i<this.inviteCodeMax;i++){
            this.validInviteCodeArray.push(i);
        }
    }
    private inviteNumberGenerate(){
        let invite_number = Math.floor(Math.random() * (this.validInviteCodeArray.length)) + 1;
        console.log(`valid_invite_code_array:${this.validInviteCodeArray}`)
        console.log('index:',invite_number,)
        return this.validInviteCodeArray[invite_number - 1];
    }
    public startGameRoom(owner:Player,password:string|null){
        if(this.validInviteCodeArray.length == 0){
            return null
        } else {
            let invite_number = this.inviteNumberGenerate();
            let ele_index = this.validInviteCodeArray.indexOf(invite_number);
            if(ele_index != -1){
                this.validInviteCodeArray.splice(ele_index,1);
            }
            this.usingInviteCodeArray.push(invite_number);
            let game = new Game(owner,password,invite_number);
            this.games.set(invite_number,game)
            return game
        }
    }
    public getAllPublicInviteNumbers(){
        let arr:Array<number> = [];
        this.usingInviteCodeArray.forEach(invite_number=>{
            if(this.games.get(invite_number)?.password == "" || this.games.get(invite_number)?.password == null){
                arr.push(invite_number);
            }
        })
        return arr;
    }
    public getAllPrivateInviteNumbers(){
        return this.usingInviteCodeArray.filter(item => !this.getAllPublicInviteNumbers().includes(item));
    }
    public deleteGame(invite_code:number){
        this.validInviteCodeArray.push(invite_code);
        let ele_index = this.usingInviteCodeArray.indexOf(invite_code)
        if(ele_index != -1){
            this.usingInviteCodeArray.splice(ele_index,1);
        }
        this.games.delete(invite_code)
    }
}