import React from 'react';
import './Modal.css';

const Modal = ({isOpen, setOpenModal}) => {



    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
          setOpenModal(false); 
        }
      }

      const challenges = [
        {
            name: "Testimonials",
            description: "Project built in React and tilt effect with TiltJS. 3 different themes. When clicking on my avatar, a modal will open.",
            src: "images/Testimonials.gif",
            alt: "Testimonials image",
            id: "1",
            link: "https://github.com/rodrigompires/Testimonials-React",
        },
        {
            name: "Rating Component",
            description: "Work done with React and inclusion of animations in CSS. Animations with Hover and rotation of the main card on clicking the button when submitting the rating.",
            src: "images/Rating.gif",
            alt: "Rating image",
            id: "2",
            link: "https://github.com/rodrigompires/rating",
        },
        {
            name: "NFT Preview",
            description: "Second NFT Preview solution. Some animations with CSS and etc.",
            src: "images/NFT.gif",
            alt: "NFT image",
            id: "3",
            link: "https://github.com/rodrigompires/DesafioNFTPreview2",
        },
        {
            name: "Game Mario",
            description: "Creating a Mario game with pure JavaScript. Rotation of enemies and other animations.",
            src: "images/Mario.gif",
            alt: "Game Mario image",
            id: "4",
            link: "https://github.com/rodrigompires/Game-Mario", 
        }
      ]
  

      if (isOpen) {
          return (
              <div className={`modal ${isOpen ? 'animeOpenModal' : ''}`} onClick={handleOutsideClick}>
                <h1 className='modalTitle'>Some challenges posted on GitHub</h1>

                <div  className='containerModal'>
   
                {challenges.map(({description, id, name, src, alt, link}) => <a href={link} key={id} className='cardLinks' target="_blank" rel="noopener noreferrer"><div className={`cardRodrigo`} >
                     <div className='containerImg'>
                        <img src={src} alt={alt} className={'cardImg'}/>
                    </div>
                    <div className='cardInfos'>
                        <h1 className='cardName'>{name}</h1>
                        <p className='cardDescription'>{description}</p>
                    </div>
                    
                </div></a>
              )}
                </div>
            </div>
          ) 
      } else {
        return null;
      }
}

export default Modal