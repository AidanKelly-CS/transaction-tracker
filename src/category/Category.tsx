import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import './Category.css';
import { CategoryInterface } from './CategoryInterface';



export default function Category({icon, color, main, selected, onClick, label=""}: CategoryInterface) {
    
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