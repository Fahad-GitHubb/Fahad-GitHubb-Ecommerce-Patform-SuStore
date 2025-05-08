import React, { use } from 'react'
import Advertisment1 from './advertisments/Advertisment1'
import Advertisment2 from './advertisments/Advertisment2'
import ChatBot from '../components/ChatBot/ChatBot';
import { useState, useEffect } from 'react'

const CustomerDashboard = () => {
  useEffect(() => {
    const token = sessionStorage.getItem('authenticated');
    if (token === 'false' || token === null) {
        window.location.href = '/';
    }
  }, []);

  return (
    <div className='customerDashboard'>
        <Advertisment1 
            adImage = "@/frontend/assets/asImages/chair1.png"
            adTitle1 = "New Furniture Collection."
            adTitle2 = "Trends in 2025"
            adDescription = "Lorem ipsum dolor sit amet,    consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo "
            adTagline = "Best Furniture for your castle..." 
            adStore = "112"
            />
        {/* <Advertisment2
            adImage = "/images/chair1.png"
            adTitle = "Unique Features Of leatest & Trending Poducts"
            adFeatures = {['All frames constructed with hardwood solids and laminates', 'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails', 'Arms, backs and seats are structurally reinforced']}
            adName='B&B Italian Sofa'
            adPrice= '$32.00'
            adProductPage = "112"
        /> */}

    </div>
  )
}

export default CustomerDashboard