import React from 'react'

function Body() {
    return (
        <div>
            <div className="row container-fluid" style={{ position: "relative" }}>
                <div className="col-lg-3" style={{ cursor: "pointer", fontSize: "15px", marginRight: "70rem", textAlign: "right", lineHeight: "12px" }}>
                    <p className="left">Recommended</p>
                    <p className="left">All-Time Favorite Special</p>
                    <p className="left">BWC Specials</p>
                    <p className="left">Waffles</p>
                    <p className="left">Mini Waffles</p>
                    <p className="left">Mini Pancakes</p>
                    <p className="left">Less Sugar Waffles and Pancakes</p>
                    <p className="left">Waffle Cakes</p>
                    <p className="left">Beverages</p>
                </div>
                <div className="col-lg-3" style={{ position: "relative", bottom: "10rem" }}>
                    <div class="card" style={{ width: "45rem", height: "8rem" }}>
                        <h5 class="card-header" style={{ fontSize: "18px" }}>3 Belgian Chocolate Milk Waffle + 1 Free Delight</h5>
                        <div class="card-body">
                            <h5 class="card-title" style={{ fontSize: "12px" }}>Rs.437</h5>
                            <p class="card-text" style={{ fontSize: "15px" }}>Buy belgian chocolate waffle & select 1 free waffle or pancake from our top picks</p>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn" alt="pic" style={{ maxHeight: "60px", position: "relative", left: "35rem", bottom: "4rem" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3" style={{position:"relative",bottom:"10rem"}}>
                <div style={{ position: "relative" }}>

                    <div>
                        <h2>Cart Empty</h2>
                        <img style={{ height: "12rem", position: "relative", left: "65rem", bottom: "16rem" }} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2   " alt="pic" />
                    </div>
                    <div style={{ textAlign: "right", position: "relative", bottom: "15rem", right: "7rem", lineHeight: "5px" }}>
                        <p>Good food is always cooking!</p>
                        <p>Go ahead, order some yummy</p>
                        <p>items from the menu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
