import { Player } from "../Player/Player";

export class Damage{
    constructor(
        public amount:number,
        public type:DamageType,
        public source:Player,
        public target:Player
    ){
    }
}
export enum DamageType{
    Physical,
    Magic,
    True
}