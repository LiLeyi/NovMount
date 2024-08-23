import { BasicCard } from "../CardCategory/Basic"
import { CardData, WaitingCardStack } from "../WaitingCardStack"

export class NormalWaitingCardStack extends WaitingCardStack {
    constructor() {
        let cards_data: Array<CardData> = [
            {
                card: BasicCard.Attack1,
                amount: 3
            },
            {
                card: BasicCard.Attack2,
                amount: 3
            },
            {
                card: BasicCard.Defence1,
                amount: 3
            }
        ]
        super(cards_data)
    }
}