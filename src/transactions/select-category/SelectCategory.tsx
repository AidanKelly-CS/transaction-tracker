import { faCar, faFilm, faGamepad, faGift, faGlassMartiniAlt, faHeart, faHotdog, faPlaneDeparture, faRoute, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import Category from '../category/Category';
import { CategoryInterface } from '../category/CategoryInterface';
import './SelectCategory.css';


export default function SelectCategory({setSelectedCategories, clear, resetClearCategories}) {

    useEffect(() => {
        if(clear){
            clearCategories();
            resetClearCategories();
        }
    }, [clear]); 
    
    function select(label: string){
        const updatedCategories = [...categories];
        updatedCategories.forEach((category, i) => {
            if(category.label === label){
                updatedCategories[i].selected = !category.selected;
            }
        });

        setCategories(updatedCategories);
        setSelectedCategories(updatedCategories.filter(category=>category.selected));
    }

    function clearCategories(){
        const updatedCategories = [...categories];
        updatedCategories.forEach((category, i) => {
            updatedCategories[i].selected = false;
        });
    
        setCategories(updatedCategories);
        setSelectedCategories(updatedCategories.filter(category=>category.selected));
    }
    

    const [categories, setCategories] = useState<CategoryInterface[]>(
        [
            {
                icon: faHotdog,
                color:"white",
                main: true,
                onClick: ()=>{select("food")},
                selected: false,
                label: "food"
            },
            {
                icon: faRoute,
                color:"white",
                main: true,
                onClick: ()=>{select("transport")},
                selected: false,
                label: "transport"
            },
            {
                icon: faGamepad,
                color:"white",
                main: true,
                onClick: ()=>{select("entertainment")},
                selected: false,
                label: "entertainment"
            },
            {
                icon: faFilm,
                color:"white",
                main: true,
                onClick: ()=>{select("cinema")},
                selected: false,
                label: "cinema"
            },
            {
                icon: faCar,
                color:"white",
                main: true,
                onClick: ()=>{select("car")},
                selected: false,
                label: "car"
            },
            {
                icon: faHeart,
                color:"white",
                main: true,
                onClick: ()=>{select("date")},
                selected: false,
                label: "date"
            },
            {
                icon: faGlassMartiniAlt,
                color:"white",
                main: true,
                onClick: ()=>{select("drinks")},
                selected: false,
                label: "drinks"
            },
            {
                icon: faPlaneDeparture,
                color:"white",
                main: true,
                onClick: ()=>{select("holiday")},
                selected: false,
                label: "holiday"
            },
            {
                icon: faGift,
                color:"white",
                main: true,
                onClick: ()=>{select("gift")},
                selected: false,
                label: "gift"
            }
        ]
    );
        
    return (
            <>          
            <div className="category-clear" onClick={clearCategories}>
                <p>clear</p>
            </div>
            {
            categories.map(category => {
                const classes = classNames({
                    "category-container":true,
                    "category-container-selected": category.selected
                })
                return (
                    <div className={classes} key={category.label} onClick={category.onClick}>
                    <Category {...category}/>
                    <p>{category.label}</p>
                    </div>
                );
            })
            }
            </>
    );
}
