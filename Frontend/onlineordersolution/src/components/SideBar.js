import React from 'react'
import './SideBar.css';
import * as AiIcons from 'react-icons/ai'
import {SideBarData} from './SideBarData'
import { Link } from 'react-router-dom';


function SideBar() {
  const [clicked, setClicked] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);
  const [activeSubItem, setActiveSubItem] = React.useState(1);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const isSlideshow = window.location.pathname === '/pictures';
  return (
    <>
    {
      !isSlideshow && (
        <div id='sidebar-container'>
        <div id= "menu" className={clicked? 'hide':''} onClick={handleClick}>
                {
                  (<AiIcons.AiOutlineMenu id="bar" className="menu-Icon"></AiIcons.AiOutlineMenu>)
                }
        </div>
        <div className={`sidebar ${clicked ? 'active' : ''}`} id='res-sidebar'>
          <div className='sidebar-header'>
            <div id= "close" onClick={handleClick}>
                <AiIcons.AiOutlineClose id="close" className="menu-Icon"></AiIcons.AiOutlineClose>
            </div>
            Shopping solution
          </div>
            <ul className='sidebarList' >
                {SideBarData.map((item, index)=> {
                    return <div key={item.id}>
                              <Link
                              className='row'
                              id={activeItem === item.id ? 'active' : ''}
                              to={item.link}
                              onClick={() => setActiveItem(item.id)}
                              >
                                <div id='title'>{item.title}</div>
                                <div id='icon'>{item.icon}</div>
                              </Link>
                              {item.subNav && activeItem === item.id && (
                                <ul className='subMenuList'>
                                  {item.subNav.map((subItem, subIndex) => (
                                    <Link
                                      to={subItem.link}
                                      className='subMenuRow'
                                      id={window.location.pathname === subItem.link ? 'active' : ''}
                                      onClick={() => setActiveSubItem(subItem.id)}
                                    >
                                      <div id='icon' style={{color: activeSubItem === subItem.id ? item.color : ''}}>{subItem.icon}</div>
                                      <div id='title' style={{color: activeSubItem === subItem.id ? item.color : ''}}>{subItem.title}</div>
                                    </Link>
                                  ))}
                                </ul>
                  )}
                            </div>
                    
                })}
            </ul>
        </div>
      </div>
    )}

    
    </>
  )
}

export default SideBar
