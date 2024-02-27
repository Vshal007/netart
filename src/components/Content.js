import React from 'react'
import trophy from '../assets/1.png'
import award from '../assets/2.png'
import pumps from '../assets/3.png'

const Content = () => {
    return (
        <div >
            <div className='flex flex-col md:flex-row'>
                <div>
                    <img src={trophy} alt='Trophy'></img>
                </div>
                <div className='p-5'>
                    <ol className='p-5'>
                        <li className='font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</li>
                        <li> &#8226; C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li> &#8226; C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ol>
                    <img src={award} alt='Award'></img>
                    <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
            <div className='p-5'>
                <p className='text-sm text-center font-serif'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
                    CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <div className='justify-center px-20 py-4'>
                    <img src={pumps} alt='Pumps'></img>
                    <p className='text-center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                    </p>
                </div>
                <div className='border-b-2 w-full border-red-500'></div>
                <p className='text-center font-bold my-2'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </p>
                <p className='text-center text-xs font-semibold'>
                    <span className='border-r-2 border-red-500 px-2'>CHEMICALS & PROCESS</span>
                    <span className='border-r-2 border-red-500 px-2'>POWER</span>
                    <span className='border-r-2 border-red-500 px-2'>WATER & WASTE WATER </span>
                    <span className='border-r-2 border-red-500 px-2'>CHEMICALS & PROCESS</span>
                    <span className='border-r-2 border-red-500 px-2'>OILS & GAS</span>
                    <span className='border-r-2 border-red-500 px-2'>PHARMA SUGARS & DISTILLERIES</span>
                    <span className='border-r-2 border-red-500 px-2'>PAPER & PULP</span>
                    <span className='border-r-2 border-red-500 px-2'>MARINE & DEFENCE</span>
                    <span className='border-r-2 border-red-500 px-2'>METAL & MINING</span>
                    <span className='border-r-2 border-red-500 px-2'>FOOD & BEVERAGE</span>
                    <span className='border-r-2 border-red-500 px-2'>FOOD & BEVERAGE</span>
                    <span className='border-r-2 border-red-500 px-2'>PETROCHEMICAL & REFINERIES</span>
                    <span className='border-r-2 border-red-500 px-2'>SOLAR</span>
                    <span className='border-r-2 border-red-500 px-2'>BUILDING</span>
                    <span className='border-r-2 border-red-500 px-2'>HVAC</span>
                    <span className='border-r-2 border-red-500 px-2'>SOLAR</span>
                    <span className='border-r-2 border-red-500 px-2'>FIRE FIGHTING</span>
                    <span className='px-2'>AGRICULTURE & RESIDENTIAL</span>

                </p>
            </div>


        </div>

    )
}

export default Content