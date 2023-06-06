import logo from "../../assets/logo.png"
import { MdPerson, MdMenu } from 'react-icons/md'

export const Header = () => {
  return (
    <header>
       <nav>
            <div class="logo-container">
                <img src={logo}/>
            </div>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Muros</a></li>
                <li><a href="">Cursos</a></li>
                <li><a href="">Salidas</a></li>
                <li><a href="">Nosotros</a></li>
            </ul>
            <div class="header__menu-collapse">
                <MdPerson className="header-icon"/>
                <MdMenu className="header-icon"/>
            </div>
        </nav>
    </header>
  )
}
