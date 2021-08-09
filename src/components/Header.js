import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

function Header() {
    return (
        <div style={{ position: "relative" }} >
            <div className="container-fluid" style={{ position: "relative" }}>
                <div className="row" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ display: "flex", flex: 1, }}>
                        <img style={{ width: "3rem", height: "5rem", marginLeft: "3.5rem" }} src="https://iconape.com/wp-content/files/mp/234071/svg/234071.svg" alt="logo" />
                    </div>
                    <div style={{ display: "flex", flex: 2, position: "relative", left: "-6rem", cursor: "pointer" }}>
                        <u><strong>Set Location</strong></u>
                    </div>
                    <div style={{ display: "flex", flex: 3, position: 'relative', right: "26rem", top: "0.5rem", cursor: "pointer" }}>
                        <p>Click to Choose Location <i class="fas fa-chevron-down"></i></p>
                    </div>
                </div>
                {/* right side items*/}

            </div>
            <div className="container-fluid" style={{ position: "relative" }}>

                <div className="container-fluid" style={{ display: "flex", flexDirection: "row", alignItems: "center", position: "relative", bottom: "3.8rem" }}>
                    <div style={{ display: "flex", flex: 1, position: 'relative', left: "48rem", cursor: "pointer" }}>
                        <i class="far fa-life-ring"></i>
                    </div>
                    <div style={{ display: "flex", flex: 1, position: 'relative', top: "0.5rem", left: "43rem", cursor: "pointer", fontSize: "18px" }}>
                        <p>Help</p>
                    </div>
                    <div style={{ display: "flex", flex: 2, position: 'relative', left: "40rem", cursor: "pointer" }}>
                        <i class="far fa-user"></i>
                    </div>
                    <div style={{ display: "flex", flex: 2, position: 'relative', top: "0.5rem", left: "28rem", cursor: "pointer", fontSize: "18px" }}>
                        <p>Sign-in</p>
                    </div>
                    <div style={{ display: "flex", flex: 3, position: 'relative', left: "19.5rem", cursor: "pointer" }}>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div style={{ display: "flex", flex: 3, position: 'relative', top: "0.5rem", left: "1rem", cursor: "pointer", fontSize: "18px" }}>
                        <p>Cart</p>
                    </div>
                </div>
            </div>
            {/* location*/}
            <div style={{ backgroundColor: "#f9f9f9", height: "2rem", cursor: "pointer",position:"relative",bottom:"3rem" }}>
                <p style={{ fontSize: "11px", paddingLeft: "5rem", paddingTop: "0.5rem" }}>Home / Chennai / Kilpauk / <span><strong>The Belgian Waffle Co.</strong></span></p>
            </div>
            
        </div>
    )
}

export default Header
