import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CategoryInterface{
    icon: IconDefinition;
    color:string;
    main: boolean;
    onClick: any;
    selected: boolean;
    label?: string;
}