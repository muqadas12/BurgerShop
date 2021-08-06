import React from 'react'
import "./Header.css"
import ProductBox from './ProductBox'
import img1 from "../assets/s1.png"
import img2 from "../assets/s2.png"

function Body() {
    return (
        <div>
            <p className="choose">CHOOSE & ENJOY</p>
            <p>Choose your favourite burger and order now! with a low prices.Click on order now before it's too late</p>
        
        <div className="a-container">
        <ProductBox img={img1} text="Luger burger"/>
        {/* <ProductBox img={img2} text="Le pigeon burger" /> */}
        <ProductBox img={img1} text="Luger burger"/>
        <ProductBox img={img1} text="Luger burger"/>

        </div>

        
        </div>
    )
}

export default Body
