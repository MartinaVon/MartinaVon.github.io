import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const HambMenu = ({ handleMenuClose }) => {



  return (
    <div className='hamburguer-menu-container'>
        <div className='close-menu-icon'>
            <MdClose onClick={handleMenuClose}/>
        </div>
        <div className='hamburguer-menu-categories'>
            <li><Link>INICIO</Link></li>
            <li><Link>EL GRAM</Link></li>
            <li><Link>CURSOS Y ESCUELA</Link></li>
            <li><Link>RELATOS Y SALIDAS</Link></li>
            <li><Link>NOTICIAS</Link></li>
            <li><Link>ASOCIARSE</Link></li>
            <li><Link>CONTACTO</Link></li>

        </div>
    </div>
  )
}
