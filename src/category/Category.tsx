import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import './Category.css';

interface Category{
    icon: IconDefinition;
    color:string;
    main: boolean;
    onClick: any;
    selected: boolean;
}

export default function Category({icon, color, main, selected, onClick}: Category) {
    
    let classes = classNames({
        "category":true,
        "sub-category":!main,
        "main-category": main,
        "selected":selected
    });

    return (
        <div className={classes} onClick={onClick}>
            <FontAwesomeIcon icon={icon} color={color} size={main?"2x":"1x"} />
        </div>
    );
}
