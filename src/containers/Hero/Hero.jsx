import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__info-container'>
        <h1 className='hero__primary-heading'>Get next years pass now to save</h1>
        <p className='p__WorkSans'>If it's too steep, you're too old. Straight shot shane mcconkey lookout pass snowmass bode miller freestyle tree well durango corn snow bromley mountain. Stockli st moritz sundown ripping the bumps swix chowder boreal suzy chaffee bumps hospital air kastle.</p>
        <div className='hero__btn_container'>
          <button className='btn-solid'>Get a seasons pass</button>
          <button className='btn-outlined'>Get tickets</button>
        </div>
      </div>
    </div>
  )
}

export default Hero