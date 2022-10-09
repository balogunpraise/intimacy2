import React from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import HomeInner from '../../components/home-inner/HomeInner'
import './home.scss'
import Marquee from "react-fast-marquee"
import OurPartners from '../../components/our-partners/OurPartners'
const Home = ({state, closeSidebar}) => {
  return (
    <div className='overall-cover'>

    <div className='home'>
       <div className='mission'>
          <h1>Inspiring <span className='initial'>generations </span><br /> through <span className='first'>God's </span> 
           amazing <span className='second'>love</span>...</h1>
           <CustomButton title="Join Our Volunteers"/>
       </div>
       
    </div>
    <div>
    <h1 style={{color: 'black', textAlign: 'center'}}>Our Partners</h1>
    <Marquee pauseOnHover speed='35'>
      <div className="banner--forex">
        <OurPartners/>
      </div>
    </Marquee>
    </div>
    
    <HomeInner/>
   
    </div>
    
  )
}

export default Home