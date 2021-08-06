import React from 'react'
import "./Header.css"
function ProductBox(props) {
    return (
        <div className="a-box">
            <div classNameName="a-b-img">
                <img src={props.img} alt="img"/>

            </div>
            <div className="a-b-text">
                {props.text}
                <button className="productbox-button">Order Now</button>


            </div>
            
  {/* <div className="card">
    <div className="card-body"> <img src={props.img} alt="img"/></div>
    <div className="card-title">  {props.text}</div>
    <button>Order Now</button>

  </div> */}
</div>
            
    )
}

export default ProductBox
