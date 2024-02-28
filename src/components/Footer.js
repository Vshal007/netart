import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa"
import { IoCall } from "react-icons/io5"


const Footer = () => {
    return (
        <footer className='p-5 pb-10 bg-red-400 m-1 flex justify-between text-white font-serif flex-col md:flex-row'>
            <div className='flex space-x-2'><IoCall /> Toll free 1800 1200 1234</div>
            <div className='flex space-x-2'><FaFacebook /> <p><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></p></div>
            <div className='flex space-x-2'><FaGlobe /> <p><a href="https://www.crigroups.com">www.crigroups.com</a></p></div>
        </footer>
    )
}

export default Footer