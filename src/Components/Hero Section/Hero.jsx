import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'




const Hero = () => {
  return (
    <div className="hero">
{/* LEFT SIDE */}
        <div className="left-s">
            <Header/>

            {/* AD section*/}
                    <div className="the-best-ad">
                        <div></div>
                        <span>the best fitness center in Pune</span>
                    </div>
            {/* Hero Heading */}        
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>shape </span>
                            <span>your</span>
                        </div>

                        <div>
                            <span>Ideal Body</span>
                        </div>

                        <div>
                            <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                            </span> 
                        </div>
                    </div>
            {/* Numbers and figures*/}
                    <div className="figures">
                        <div>
                            <span>+140</span>
                            <span>Expert coaches</span>
                        </div>

                        <div>
                            <span>+978</span>
                            <span>Members joined</span>
                        </div>

                        <div>
                            <span>+50</span>
                            <span>Fitness programs</span>
                        </div>
                    </div>
            {/* Buttons*/}
                    <div className="hero-btn">
                        <button className="btn">Get started</button>
                        <button className="btn">Learn more</button>
                    </div>
        </div>

{/* RIGHT SIDE */}
        <div className="right-s">
            <button className='btn'>Join Now</button>

            {/* Heart rate */}
            <div className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* Hero Images */}
            <img src={hero_image} alt="" className='hero-image'/>
            <img src={hero_image_back} alt="" className='hero-image-bg'/>

            {/* Calories */}
            <div className="calories">
                <img src={calories} alt="" className='calorie-img'/>
                <div className="cal">
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero