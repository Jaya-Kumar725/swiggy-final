import React from 'react'
import '../App'

function Promotion() {
    return (
        <div>
            
            <div style={{ background: "#171a29",position:"relative",bottom:"3rem"}}>
                <div className="container" style={{display:"flex"}}>
                    <img style={{ width: "260px", height: "150px", padding: "10px",position:"relative",right:"3.5rem"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn" alt="promotion-img" />
                    <div className="container" style={{position:"relative",right:""}}>
                        <h2 style={{color:"white"}}>The Belgian Waffle Co.</h2>
                        <p style={{ color: "grey", margin:"0"}}>Desserts, Beverages</p>
                        {/* <p style={{ color: "grey", margin:"0"}}>KIlpauk, Kilpauk</p> */}
                        <p style={{ color: "white", margin:"0"}}>★ 4.3 | -- mins | ₹ 200 for two</p>
                    </div>
                    <div className="container" style={{ color: "white", paddingTop: "20px",position:"relative",right:""}}>
                        <h5 style={{border:"1px solid #171a29",position:"relative",left:"12rem",width:"5rem",backgroundColor:"#171a29",zIndex:"1"}}>OFFER</h5>
                        <div style={{border:"1px solid white",width:"20rem",height:"7rem",position:"relative",left:"12rem",bottom:"1rem"}}>
                        <p style={{ textAlign: "left",paddingLeft:"2rem",fontSize:"15px",paddingTop:"1rem"}}><i class="fas fa-badge-percent fa-lg"></i>    40% off up to ₹80 | Use code<br></br>TRYNEW</p>
                            <p style={{ textAlign: "left", paddingLeft: "2rem", position: "relative", bottom: "1rem", fontSize: "15px" }}><i class="fas fa-badge-percent fa-lg"></i>    15% off up to ₹100 | Use code<br></br>SBI100</p>


                        </div>
                    </div>
                </div> 
            </div>
                <div className="container" style={{ display: "flex", paddingLeft:"9rem", textAlign:"center", position: "relative", justifyContent:"space-evenly",left:"-0.5rem",bottom:"6rem"}}>
                    <form style={{left:"26rem"}}>
                        <input type="text" placeholder="        Search for dishes..." />
                        <i className='fa fa-search mr-1' style={{ position: "relative", right: "15.5rem" }}></i>
                    </form>
                    <div style={{backgroundColor:"white", height:"1.8rem", width: "8rem", position:"relative", right:"7rem"}}>
                        <p> <i className='fa fa-leaf'></i> Pure veg</p>
                    </div>
                    <div style={{ backgroundColor: "white", height: "1.8rem", width: "8rem", position: "relative", right:"13rem", cursor:"pointer", hover:"red"}}>
                    <p className="favourite"> <i className='fa fa-heart'></i> Favourite</p>
                    </div>
                </div>
        </div>
    )
}

export default Promotion
