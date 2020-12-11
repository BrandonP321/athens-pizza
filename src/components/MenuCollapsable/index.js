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
                className={open ? 'menu-collapse-header show-collapse': 'menu-collapse-header'}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <img src={props.img} />
                <div className='menu-header-overlay'>
                    <h2>{props.group}</h2>
                </div>
            </div>
            <Collapse in={open}>
                <div className='menu-collapse-body'>
                    <h1>Open</h1>
                </div>
            </Collapse>
        </div>
    )
}
