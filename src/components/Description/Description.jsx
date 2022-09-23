import React from 'react'
import IMGTESTE from '../../assets/imgFeatures.png'
import './Description.css'

const Description = () => {
  return (
    <section className='section_description'>
        <h1 className='description_title'>Description</h1>

        <div className='description_grid'>

            <div className='description_container'>
                <h1>Descrição do App</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a officia nostrum voluptatibus fuga aspernatur accusamus dolorem, eius harum, dolores provident aperiam quis quas mollitia dolorum libero beatae, nesciunt reiciendis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio officiis at aut temporibus ipsam eos dignissimos repellat magnam. Laborum, sit quibusdam sunt exercitationem perspiciatis doloribus. Velit, reiciendis vitae. Nobis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus quibusdam aliquid dolorem perferendis porro, odit dolor ipsum consectetur dolore repellendus itaque? Itaque, exercitationem similique pariatur laudantium quos voluptates dolorem!
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas quasi harum. Sed sapiente blanditiis molestias incidunt nulla omnis excepturi similique, ad fugit nam saepe explicabo deserunt, ratione eius hic!
                </div>
            </div>

            <div className='description_img'>
                <img src={IMGTESTE} alt="" />
            </div>
        </div>

    </section>
  )
}

export default Description