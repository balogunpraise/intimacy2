import React from 'react'
import './home-inner.scss'

const HomeInner = () => {
  return (
    <div className='section'>
        <div className='headin'>
            <h1 className='intro'>Who Are We?</h1>
        </div>
        <div className='flex-box'>
            <img src='https://charleskochfoundation.org/app/uploads/2021/05/home-behind.png'></img>
            <div className='message'>
                <div>
                    <h1 style={{color: '#34A853'}}>We Are Volunteers...</h1>
                    <p>Intimate worship is made up of group of young individuals who have decided to make a difference
                        in their generation by following and abiding to God's original plan for their lives. Also, sharing
                        and inspiring other folks through the unending and amazing love of Christ.
                    </p>
                </div>
                <div>
                    <h1 style={{color: '#B4D245'}}>We Are Talented...</h1>
                    <p>Intimate worship is made up of group of young individuals who have decided to make a difference
                        in their generation by following and abiding to God's original plan for their lives. Also, sharing
                        and inspiring other folks through the unending and amazing love of Christ.
                    </p>
                </div>
                <div>
                    <h1 style={{color: '#FF0000'}}>We Are Disciplined...</h1>
                    <p>Intimate worship is made up of group of young individuals who have decided to make a difference
                        in their generation by following and abiding to God's original plan for their lives. Also, sharing
                        and inspiring other folks through the unending and amazing love of Christ.
                    </p>
                </div>
                <div>
                    <h1 style={{color: '#092F45'}}>We Are Inspired...</h1>
                    <p>Intimate worship is made up of group of young individuals who have decided to make a difference
                        in their generation by following and abiding to God's original plan for their lives. Also, sharing
                        and inspiring other folks through the unending and amazing love of Christ.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeInner