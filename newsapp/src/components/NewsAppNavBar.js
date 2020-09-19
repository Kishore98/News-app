import React from 'react'
import './Navbar.css'

function NewsAppNavBar() {
    return (
        <div>
         <header className='navbar'>  
           <nav className='navbar_nav'> 
           <div className='navbar_logo'><li><a href='/'>TIMES OF INDIA</a></li></div> 
           <div className='cherry' >
              
 
            </div>
            <div className='space'></div>
             <div className='navbar_items'>
              <ul>
                  <li><a href='/'>Home</a></li>
                  
                  <li><a href='/breaking'>Breaking</a></li>
                  <li><a href='/tech'>Technology</a></li>
              </ul>
              </div>
            </nav>    
            </header>
  
        </div>
    )
}

export default NewsAppNavBar