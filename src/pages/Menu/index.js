import React from 'react'
import allFood from '../../food.json'
import MenuCollapsable from '../../components/MenuCollapsable'
import './index.css'

export default function Menu() {
    return (
        <>
            <h1>Menu</h1>
            {allFood.map(foodGroup => <MenuCollapsable group={foodGroup.group} img={foodGroup.image} food={foodGroup.food} />)}
        </>
    )
}
