import React from 'react'
import "./Header.css"
function Booking() {
    return (
        <div className="footerbg">
            <h2 className="booking">BOOK YOUR TABLE NOW!</h2>
            <form>
                <input type="text" placeholder="Full Name"/>
                <br/>
                <br/>
                <input type="texttt" placeholder="Type Your Email"/>
                <br/>
                <br/>
                <br/>
              <textarea type="textarea" placeholder="Write here"/>
                <br/>
                <br/>
                <button className="booknow">BOOK NOW</button>


            </form>
            
        </div>
    )
}

export default Booking
