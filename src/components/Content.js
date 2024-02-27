import React from 'react'
import trophy from '../assets/1.png'
import award from '../assets/2.png'
import pumps from '../assets/3.png'

const Content = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <img src={trophy} alt='Trophy'></img>
                </div>
                <div>
                    <img src={award} alt='Award'></img>
                </div>
            </div>
            <div className='flex'>
                <div className='pd-10'>
                    <img src={pumps} alt='Pumps'></img>
                </div>
            </div>

        </div>

    )
}

export default Content