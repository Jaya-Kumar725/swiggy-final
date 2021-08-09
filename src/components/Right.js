import React from 'react'

function Right() {
    return (
        <div style={{position:"relative"}}>
            <div style={{textAlign:"right",position:"relative",bottom:"18rem",right:"10rem"}}>
            <h2>Cart Empty</h2>
            </div>
            <div>
                <img  style={{height:"12rem",position:"relative",left:"65rem",bottom:"16rem"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2   " alt="pic"/>
            </div>
            <div style={{textAlign:"right",position:"relative",bottom:"15rem",right:"7rem",lineHeight:"5px"}}>
            <p>Good food is always cooking!</p>
            <p>Go ahead, order some yummy</p>
            <p>items from the menu.</p>
        </div>
        </div>
    )
}

export default Right
