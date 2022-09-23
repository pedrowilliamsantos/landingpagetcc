import React from 'react'
import './Explore.css'
import IMGTESTE from '../../assets/imgFeatures.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Explore = () => {
  return (
    <section className='section_explore'>
        <h1>Explore</h1>

        <div className='div_container'>
          <div className='section_img'>
            <img className='explore_img' src={IMGTESTE}/>
          </div>
        
          <div className='explore_container'>
            <h1>Encontra os melhores profissionais para cada especialidade</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus 
            tempora voluptatibus eveniet pariatur sit necessitatibus, consectetur 
            a maiores labore! Nihil ipsa vel mollitia quas, eos beatae eligendi sequi! 
            Tempore, aliquam!
            </p>

            <div className='explore_topicos'>

              <div>
                <AiOutlineArrowRight className='explore_icons'/><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div>
              <AiOutlineArrowRight className='explore_icons'/><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div>
              <AiOutlineArrowRight className='explore_icons'/><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
              </div>
              <div>
              <AiOutlineArrowRight className='explore_icons'/><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</small>
              </div>
            </div>
          </div>

    

        </div>
        
    </section>
  )
}

export default Explore