export class Denfence{
    public amount:number;
    public type:DamageType
    constructor(amount:number,type:DamageType){
        this.amount=amount;
        this.type=type;
    }

}
export enum DamageType{
    Physical,
    Magic,
    True
}