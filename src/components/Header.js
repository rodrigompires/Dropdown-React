import React from 'react';
import Logo from '../assets/images/logo.svg';
import IconHBMenu from '../assets/images/icon-menu.svg';
import IconClose from '../assets/images/icon-close-menu.svg';
import IconToDo from '../assets/images/icon-todo.svg';
import IconCalendar from '../assets/images/icon-calendar.svg';
import IconReminders from '../assets/images/icon-reminders.svg';
import IconPlanning from '../assets/images/icon-planning.svg';
import IconArrowDown from '../assets/images/icon-arrow-down.svg';
import './Header.css';


const Header = () => {

    const [openFeatures, setOpenFeatures] = React.useState(false);
    const [openCompany, setOpenCompany] = React.useState(false);
    const [openTheme, setOpenTheme] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [theme, setTheme] = React.useState(null)

    function handleClick (e) {
        document.body.className = e.target.getAttribute('data-id');
        const chosenTheme = e.target.getAttribute('data-id');
        setTheme(chosenTheme);
    }

    React.useEffect(() => {
        if (theme !== null) window.localStorage.setItem("theme", theme);
    }, [theme]);

    React.useEffect(() => {
        const themeLocal = window.localStorage.getItem("theme");
        if (themeLocal !== null) setTheme(themeLocal);
        document.body.className = themeLocal;

    }, []);

  return (

    <header>
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='hbMenu' onClick={() => setOpenMenu(!openMenu)}>
                <img className='hbMenuImg' src={IconHBMenu} alt="icon hbmenu" />
            </div>
            <nav className={`navMenu ${openMenu ? 'show' : ''}`}>
                <div className='subMenu'>
                    <img className={`iconClose ${openMenu ? '' : 'show'}`} src={IconClose} alt="x" onClick={() => setOpenMenu(!openMenu)} />
                    <ul className='listMenu'>
                        <li className='itemListMenu features' onClick={() => setOpenFeatures(!openFeatures)}>
                            Features
                            <img className={`iconArrow iconArrowFeatures ${openFeatures ? 'show' : ''}`} src={IconArrowDown} alt="Icone seta" aria-hidden="true" />
                            <ul className={`subListFeatures ${openFeatures ? 'show' : ''}`}>
                                <li className='itemListFeatures'>
                                    <img className='iconsFeatures' src={IconToDo} alt="" />
                                    Todo List
                                </li>
                                <li className='itemListFeatures'>
                                    <img className='iconsFeatures' src={IconCalendar} alt="" />
                                    Calendar
                                </li>
                                <li className='itemListFeatures'>
                                    <img className='iconsFeatures' src={IconReminders} alt="" />
                                    Reminders
                                </li>
                                <li className='itemListFeatures'>
                                    <img className='iconsFeatures' src={IconPlanning} alt="" />
                                    Planning
                                </li>
                            </ul>
                            
                        </li>
                        <li className='itemListMenu company' onClick={() => setOpenCompany(!openCompany)}>
                            Company
                            <img className={`iconArrow iconArrowCompany ${openCompany ? 'show' : ''}`} src={IconArrowDown} alt="Icone seta" aria-hidden="true" />
                            <ul className={`subListCompany ${openCompany ? 'show' : ''}`}>
                                <li className='itemListCompany'>
                                    History
                                </li>
                                <li className='itemListCompany'>
                                    Our Team
                                </li>
                                <li className='itemListCompany'>
                                    Blog
                                </li>
                            </ul>
                        </li>
                        <li className='itemListMenu theme' onClick={() => setOpenTheme(!openTheme)} >
                            Themes
                            <img className={`iconArrow iconArrowTheme ${openTheme ? 'show' : ''}`} src={IconArrowDown} alt="Icone seta" aria-hidden="true" />
                            <ul className={`subListTheme ${openTheme ? 'show' : ''}`}>
                                <li className='itemListTheme' data-id="" onClick={handleClick}>
                                    Normal
                                </li>
                                <li className='itemListTheme' data-id="futuristic" onClick={handleClick}>
                                    Futuristic
                                </li>
                                <li className='itemListTheme' data-id="elegant" onClick={handleClick}>
                                    Elegant
                                </li>
                            </ul>
                        </li>
                                <li className="itemListMenu">About</li>
                    </ul>
                    <div className="btns">
                        <a href="https://github.com/rodrigompires" title="Login" target="_blank" rel="noopener noreferrer" className="buttonDefalt buttonLogin">Login</a>
                        <a href="https://github.com/rodrigompires" title="Register" target="_blank" rel="noopener noreferrer" className="buttonDefalt buttonRegister">Register</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header