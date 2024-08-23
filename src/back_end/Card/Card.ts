import { Translator } from "../Translator"
import { UseComponent } from "./Components/UseComponent"

export class Card {
    public id: string
    public name: Translator
    public description: Translator

    public useComponent: UseComponent
    constructor(id:string,name:Translator,description:Translator,use_component?:UseComponent){
        this.id = id;
        this.name = name;
        this.description = description;
        this.useComponent = use_component ?? new UseComponent();
    }
}
