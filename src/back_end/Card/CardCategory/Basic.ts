import { Translator } from "../../Translator";
import { Card } from "../Card";
import { CardCategory } from "../CardCategory";

let attack_1_name_trans:Translator = {
    'en_US': 'Attack I',
    'zh_CN': '攻击I'
}
let attack_1_desc_trans:Translator = {
    'en_US': 'Attack I',
    'zh_CN': '攻击I'
}
let Attack1 = new Card('attack_1',attack_1_name_trans,attack_1_desc_trans)

let attack_2_name_trans:Translator = {
    'en_US': 'Attack II',
    'zh_CN': '攻击II'
}
let attack_2_desc_trans:Translator = {
    'en_US': 'Attack II',
    'zh_CN': '攻击II'
}
let Attack2 = new Card('attack_2',attack_2_name_trans,attack_2_desc_trans)

let defence_1_name_trans:Translator = {
    'en_US': 'Attack I',
    'zh_CN': '攻击I'
}
let defence_1_desc_trans:Translator = {
    'en_US': 'Attack I',
    'zh_CN': '攻击I'
}
let Defence1 = new Card('defence_1',defence_1_name_trans,defence_1_desc_trans)

export class BasicCard extends CardCategory{
    static readonly Attack1:Card = Attack1
    static readonly Attack2:Card = Attack2
    static readonly Defence1:Card = Defence1
}