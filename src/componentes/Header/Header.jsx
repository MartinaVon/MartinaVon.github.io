import logo from "../../assets/logo.png"
import { MdPerson, MdMenu } from 'react-icons/md'
import { useState } from "react"
import { HambMenu } from "../HambMenu/HambMenu"

export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <header>
       <nav>
            <div className="logo-container">
                <img src={logo}/>
            </div>

            <div className="header__menu-collapse">
                <MdPerson className="header-icon"/>
                <MdMenu className="header-icon" onClick={handleMenu}/>
            </div>
            {
              openMenu && 
              <HambMenu 
              handleMenuClose={handleMenu}
              />
            }
        </nav>
    </header>
  )
}
