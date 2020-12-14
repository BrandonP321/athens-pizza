import React from 'react'
import allFood from '../../food.json'
import MenuCollapsable from '../../components/MenuCollapsable'
import './index.css'

export default function Menu() {
    return (
        <>
            <div className='menu-hero-container'>
                <img className='menu-hero-img' src='assets/images/menu-hero.jpg' />
                <div className='menu-hero-overlay'>
                    <div className='menu-hero-text'>
                        <h1>Our Menu</h1>
                        <p>this is some text about our menu</p>
                    </div>
                </div>
            </div>
            {allFood.map(foodGroup => <MenuCollapsable group={foodGroup.group} img={foodGroup.image} food={foodGroup.food} />)}
        </>
    )
}
