import React from 'react';
// import './home-page.css';
import Link from 'next/link';
import GreenButton from '../comps/Green-button';




const HomePage = () => <div id='home-page'>
    
     <div id='content'>
        <img  id='logo' src='/earth-hero-logo-vertical.svg' />
        
        <p className='intro-text'>Hi, Earth Hero!</p>
        <p className='intro-text'>Let's get started on making a change and saving our planet!</p>
    </div>

        {/* <div><GreenButton
        text='Get Started'
        onClick={DefaultClick}
        />
        </div> */}

        <div id='get-started'>
        <Link href='/Tutorial'><div id='get-started-button'>Get Started</div></Link>
        </div>

</div>


export default HomePage;
