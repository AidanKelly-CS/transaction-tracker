import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TransactionInterface{
    icon: IconDefinition;
    category:string;
    total: string;
    store: string;
}