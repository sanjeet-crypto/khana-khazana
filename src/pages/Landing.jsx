import React from "react";
import './landing.css';

const Landing = () => {
    return(
        <>
        <div className='LandingPage'>
            <div className='left_landingpage'>
                <div className='container_left_landingpage'>
                    <div className='maintext_landingpage'>
                    <h1>FOOD</h1>
                    <h2>Bringing Homemade dishes to your doorstep</h2>
                    </div>
                    <img scr='https://i.imgur.com/t1sJJB5.png' alt=''></img>
                    <div className='ordernow_button_landing'>
                        <div className="order_now_button">ORDER NOW</div>
                    </div>
                </div>
                    <div className='location_button_landing'>ROURKELA</div>
            </div>
            <div className='right_landingpage'>
                <div className="landing_image">
                <img scr='https://i.imgur.com/t1sJJB5.png' alt=''></img>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Landing;