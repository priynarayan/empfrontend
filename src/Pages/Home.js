import React from "react";
import pen from '../Assests/anime.png';
import '../Styles/Home.css';

export default function Home() {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" >
            <div className='imghome'>
                <h3 className="head">COGNIZANT</h3>
                <figure>
                    <div class="rel">
                        <h1 className="hpage">Welcome to EMPLOYEE SALARY MANAGEMENT SYSTEM APP!</h1>
                    </div>
                    <img src={pen} alt='home-img' className='img-style /'></img>

                </figure>
            </div>
        </div>
    );
}