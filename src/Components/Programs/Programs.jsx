import React from 'react'
import './Programs.css' 
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="pgrm-header">
            <span className='stroke-text'>Explore Our </span>
            <span> Programs </span>
            <span className='stroke-text'>To shape you</span>
        </div>

        {/* Program Cards */}
        <div className="pgrm-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join">
                        <span>Join Now</span>
                        <img src={rightArrow} alt="" className='arrow' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs