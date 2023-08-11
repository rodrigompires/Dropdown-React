import React from 'react';
import BackgroundImage from '../assets/images/image-hero-mobile.png';
import BackgroundImageDesktop from '../assets/images/image-hero-desktop.png';
import LogoDatabiz from '../assets/images/client-databiz.svg';
import LogoMeet from '../assets/images/client-meet.svg';
import LogoMaker from '../assets/images/client-maker.svg';
import LogoAudiophile from '../assets/images/client-audiophile.svg';
import './Main.css';



const Main = () => {
  return (
    <main>
      <section className='bkgImg'>
        <img src={BackgroundImage} alt="Background imagem" />
      </section>

      <div className='main'>
        <section className='mainInfos'>
            <div className='mainTitle'>
                <h1>Make remote work</h1>
            </div>

            <div className="mainText">
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            </div>
            <div className="mainBtn">
                <a href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5" target="_blank" rel="noopener noreferrer" title="Learn More" className="buttonLearn">Learn more</a> 
            </div>
        </section>

        <section className="clients">
          <div className="clientsLogos">
            <img src={LogoDatabiz} alt="Logo Databiz" className="logoDatabiz" />
            <img src={LogoAudiophile} alt="Logo AudioPhile" className="logoAudiophile" />
            <img src={LogoMeet} alt="Logo Meet" className="logoMeet" />
            <img src={LogoMaker} alt="Logo Maker" className="logoMaker" />
          </div>
        </section>
      </div>

      <section className="bkgDesktop">
        <img src={BackgroundImageDesktop} alt="" />
      </section>
    </main>
  )
}

export default Main
