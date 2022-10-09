import './App.scss';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About'
import Partner from './pages/donate/Partner'
import Ministries from './pages/ministries/Ministries'
import Event from './pages/event/Event'
import { useState } from 'react';
import navlinks from './NavLinks';
import intimate from './assets/intimate.png'
function App() {
  const [opened, setOpened] = useState(false)

  const toggleSidebar =()=>{
    setOpened(true)
  }
  const closeSidebar =()=>{
    setOpened(false)
  }
  return (
    <div className='App'>
      <Router>
      <aside className={opened ? 'side-navigation open': 'side-navigation'}>
          <div className='top-section' style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems : 'center',
            padding: '10px 10px',
            marginTop: '11px'
          }}>
            <Link className='link' to="/" onClick={closeSidebar}>
              <img style={{width: '100px',height: '30px', marginLeft: '10px', marginTop: '20px'}} className='logo' src={intimate} alt="" />
            </Link>
            <button onClick={closeSidebar} style={{color: 'whitesmoke', background: 'none',
              border: 'none', fontSize: '1.5rem', marginTop: '20px'}}>X</button>
          </div>
          <div className='flex-cover'>
            {
              navlinks.map((nav, index) =>(
                <p key={index}>
                  <NavLink onClick={closeSidebar} className='link' to={nav.url}>{nav.title}</NavLink>
                </p>
              ))
            }
          </div>
      </aside>
          <Navbar toggleSidebar={toggleSidebar}/>
          <Routes>
            <Route path='/' exact element = {<Home state={opened} closeSidebar={closeSidebar}/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/ministries' element = {<Ministries/>} />
            <Route path='/events' element = {<Event/>} />
            <Route path='/partner' element = {<Partner/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
