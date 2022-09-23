import React from 'react'
import './Features.css'
import IMGFEATURES from '../../assets/imgFeatures.png'
import {BsChatDots} from 'react-icons/bs'

const Features = () => {
  return (
    <>
        <section className='section_features'>
            <h1>Features</h1>

            <h3 className='features_subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

            <section className='section_container'>
              <div className='container_features'>
              
              <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article> 

                <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article>

                <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article>

              </div>

              <div className='container_img'>
                <img src={IMGFEATURES}/>
              </div>

              <div className='container_features'>
              <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article>

                <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article>

                <article className='features_item'>
                  <BsChatDots className='features_icon' size={45}/>
                  <div>
                    <h3 className='features_title'>Chat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </article>
              </div>
            </section>
            
        </section>  
    </>
  )
}

export default Features