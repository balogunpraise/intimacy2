import React from 'react'
import './event.scss'
import pic2 from '../../assets/pic2.jpg'
import pic4 from '../../assets/pic4.jpg'
import flier from '../../assets/flier.jpg'
const Event = () => {
  return (
    <div className='event'>
      <div className='event-heading'>
        <h1>Our Events</h1>
        <div style={{width:'50px', height: '40px', background: "#3CAB52"}}></div>
      </div>
      <div className='event-message'>
        <p>"We periodically engage in series of events and outreaches."</p>
      </div>
      <div className='first-flex'>
        <div className='flex-inner1'>
          <img src={pic2} alt=''></img>
        </div>
        <div className='flex-inner2'>
          <h2>Mission Statement</h2>
          <p style={{textAlign: 'center', fontSize: '2rem', textJustify: 'center'}}>Intimacy is committed to helping youths fulfil their God's given
          purpose through the amazing love of Christ.</p>
        </div>
      </div>
      <div className='second-event-heading'>
        <h1>Events/Programs</h1>
      </div>
      <div className='second-flex'>
        <div className='second-flex-inner1'>
        <div className='hover-div'>
          <span class="material-symbols-outlined cam">
          photo_camera
          </span>
          </div>
          <img src='https://www.cio.com/wp-content/uploads/2021/12/hand_controls_interconnecting_gears_process_automation_machinery_mechanism_efficiency_by_anawat_s_gettyimages-1163061322_2400x1600-100858595-orig-4.jpg?quality=50&strip=all' alt=''></img>
          <h1>Intimate Worship Loading...</h1>
        </div>
        <div className='second-flex-inner2'>
          <div className='hover-div'>
          <span class="material-symbols-outlined cam">
          photo_camera
          </span>
          </div>
          <img src={flier} alt=''></img>
          <h1>Concert Loading...</h1>  
          <p>The annual Intimate Worship concert is just around the conner. <br/>
          Promises to be a blessed time in God's presence.</p>      
        </div>
      </div>
    </div>
  )
}

export default Event