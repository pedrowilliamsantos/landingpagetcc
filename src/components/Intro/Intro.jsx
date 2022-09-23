import React from 'react'
import './Intro.css'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const Main = () => {
  return (
    <>
      <section className='section_main'>

        <h1>LOGO</h1>

        <h2 className='intro_subtitulo'>psicoterapia virtual Lorem ipsum dolor, sit amet consectetur adipisicing elit distinctio</h2>

        <div className='div_text'>
          <p>
            <h3 className='intro_descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          </p>
          <div className='cta'>
            <a href='' download className='btn'>
              <AiOutlineCloudDownload  className='icon_download' size={25}/> Download App
            </a>
          </div>
        </div>
      </section>

      <section className='section_image'>
        <img src="" alt=""/>
        <h3 className='text_image'></h3>
      </section> 
    </>
  )
}

export default Main

