import React, { useState } from 'react'
import './form.scss'

const Form = () => {
    const [active, setActive] = useState('first')

    function toggle1(){
        setActive('first')
    }
    function toggle2(){
        setActive('second')
    }
  return (
    <div className='cover'>
    <div className='heading'>
            <button onClick={toggle1} className={active === 'first' ? 'btn1 active' : 'btn1'}>Online Donation</button>
            <button onClick={toggle2} className={active === 'second' ? 'btn2 active' : 'btn2'}>Other Options</button>
        </div>
    <form className='form'>
        <h1>Give Here...</h1>
        <div className='form-control'>
            <input type='text' name='name' placeholder='Surname'/>
            <input type='text' name='name' placeholder='Other Names'/>
        </div>
        <div className='form-control'>
            <input type='email' name='email' placeholder='Your Email'/>
            <input type='text' name='phonenumber' placeholder='Phone Number'/>
        </div>
        <div className='select-controls'>
            <div className='selects'>
                <label htmlFor='purpose'>Purpose</label>
                <select name='purpose'>
                    <option>Sponsorship</option>
                    <option>Prison Evangelism</option>
                    <option>Orphanage</option>
                    <option>Concert</option>
                    <option>Project</option>
                    <option>Others</option>
                </select>
            </div>
            <div className='selects'>
            <label htmlFor='currency'>Currency</label>
                <select name='currency'>
                    <option>NGN</option>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                </select>
            </div>
        </div>
        <input className='amount' type='number' placeholder='Amount'/>
        <button className='submit' type='submit'>Proceed</button>
    </form>
    </div>
    
  )
}

export default Form