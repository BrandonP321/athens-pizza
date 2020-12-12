import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import './index.css'

export default function MenuCollapsable(props) {
    // indicates whether collapse is open or not
    const [open, setOpen] = useState(false)


    const { name, desc } = props
    console.log(props)
    return (
        <div className='menu-group'>
            <div
                className={open ? 'menu-collapse-header show-collapse' : 'menu-collapse-header'}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <img src={props.img} />
                <div className='menu-header-img-dark-overlay'></div>
                <div className='menu-header-overlay'>
                    <div className='menu-header-text'>
                        <h2>{props.group}
                        <span className='menu-dropdown-icon-container'><i className="menu-dropdown-icon fas fa-plus"></i></span>
                        </h2>
                    </div>
                </div>
            </div>
            <Collapse in={open}>
                <div className='menu-collapse-body'>
                    <h2>{props.group}</h2>
                    <p className='menu-group-desc'>This is a description of this food group</p>
                    <div className='menu-food-flex'>
                        {props.food.map(foodItem => {
                            return (
                                <div className='menu-food-item'>
                                    <h3 className='food-name'>{foodItem.name}</h3>
                                    <p className='food-desc'>{foodItem.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}
