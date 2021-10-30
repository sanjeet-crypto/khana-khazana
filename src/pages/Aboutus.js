import React from "react";
import './aboutus.css';

const Aboutus = () =>{
    return(
        <>
        <div className="aboutus">
            <div className="aboutus_top">
            <div className='aboutus_top_container'>
                <div className="aboutus_top_container_left">
                    <h1>About us</h1>
                </div>
                <div className="aboutus_top_container_right">
                    <h1>Lazy to cook? Bored of eating unhealthy restaurant's food? Tired of paying hefty bills? No worries if there is no one at your house to cook food for you, No worries if you don't want to eat the restaurant food. We have the solution for all food-related issues because we love foodies! We provide healthy home-cooked food straight away from your area's houses to your table which would be appealing to your eye & to your palette too. Be it rice or be it a chapati, our food is prepared under hygienic conditions using refined oil which best takes care of your heart because for us your little heart is of utmost importance.</h1>
                </div>
            </div>
            </div>
            <div className="aboutus_bottom">
                <div className='aboutus_cards'>
                        <div className='card1'>
                            <div className='card_topsection'>
                                <img src="" alt=""></img>
                            </div>
                            <div className='card_bottomsection'>
                                <div className="card_bottomsection_contents">
                                <h1>Biryani</h1>
                                <h2>we are all about we are all about to the fullest and all content dining out or in!dining out or in!</h2>
                                <div className='button_aboutus_cards'>Order Now</div>
                                </div>
                            </div>
                        </div>

                        <div className='card2'>
                            <div className='card_topsection'>
                                <img src="" alt=""></img>
                            </div>
                            <div className='card_bottomsection'>
                                <div className="card_bottomsection_contents">
                                <h1>Biryani</h1>
                                <h2>we are all about we are all about to the fullest and all content dining out or in!dining out or in!</h2>
                                <div className='button_aboutus_cards'>Order Now</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Aboutus;