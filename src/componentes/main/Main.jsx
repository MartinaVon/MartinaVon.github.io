import { Section } from "../section/Section"
import MainBanner from "../../assets/portada1.jpg"
import evento1 from "../../assets/evento1.jpg"
import "../../style.css"
import { MdExpand } from 'react-icons/md'

export const Main = () => {
  return (
    <div className="main">
        <Section
          classname={"main-banner"}
          content={
            <>
            <img src={MainBanner}/>
            <div className="main-banner-text-container">
            <h4 className="main-banner-text">
                El montañismo romántico hoy sigue 
                existiendo en cada uno de nosotros. 
                Hemos tratado de insinuar en este sitio aquello que 
                nosotros llamamos montaña, 
                la verdadera montaña, una montaña que nadie muestra. 
            </h4>
            <button className="main-banner-button">ASOCIARSE</button>
            </div>
          </>
          }
        />
 
        <Section
            classname={"main-sections-container"}
            content={
                <>
                <div className="gram-sections alpinist-section" >
                    <h2>ANDINISMO</h2>
                </div>
                <div className="gram-sections boulder-section">
                    <h2>ESCALADA DEPORTIVA Y BOULDER</h2>
                </div>
                </>
            }
        />

        <Section
            classname={"main-section-for-info"}
            content={
                    <>
                        <span></span>  
                        <h1>GRUPO ROSARINO DE ACTIVIDADES DE MONTAÑA</h1>
                        <p>Nuestro grupo fue creado en 1983 y 
                            desde 1994 cuenta con Personería 
                            Jurídica otorgada por la I.G.P.J. de 
                            Santa Fe, expediente Nro. 21817 de 
                            1993 como Asociación Civil sin Fines 
                            de Lucro, punto que en nuestro caso 
                            no es una mera declaración sino que 
                            es esencia de todas nuestras 
                            actividades.
                        </p>
                        <button>VER MAS</button>
                    </>
            }
        />  

        <Section
            classname={"association-section"}
            content={
                <>
                <div className="association__collapse-title association__collapse-title-form">
                    <h6>¿Cómo asociarme? <MdExpand/></h6>
                    <div class="association__collapse-section association__collapse-section-form">
                        <p>Primero debes cargar tus datos en este formulario:</p>
                        <a href="">FORMULARIO INSCRIPCIÓN SOCIOS</a>
                        <p>Luego, nos contactaremos para que puedas abonar la cuota y entregarte la credencial digital.</p>
                    </div>
                </div>
                <div className="association__collapse-title association__collapse-title-benefits">
                    <h6>Beneficios de ser socio <MdExpand/></h6>
                    <div class="association__collapse-section association__collapse-section-benefits">
                        <ul class="association__collapse-section-benefits-ul">
                            <li> <span>●</span> Descuentos en Cursos y eventos organizados por el GRAM</li>
                            <li> <span>●</span> Acceso a equipo común disponible para su uso del Boulder y palestra</li>
                            <li> <span>●</span> Acceso a material de consulta cartográfico y Bibliográfico del GRAM </li>
                            <li> <span>●</span> Acceso sin cargo a Muestras y exhibiciones del GRAM</li>
                            <li> <span>●</span> Acceso a INREACH (localizador GPS con botón de SOS del gram y seguimiento online de la expedición en web del gram) (exclusivo para expediciones con aislamiento telefónico)</li>
                            <li> <span>●</span> Equipo de radio disponible para expediciones que lo requieran</li>
                            <li> <span>●</span> Soporte y contacto con comisión de emergencias del GRAM (teléfono celular disponible para emergencias)</li>
                            <li> <span>●</span> Acceso a Asambleas de la Comisión Directiva del GRAM, para participar y proponer (solo socios activos, consultar como hacer para postularse)</li>
                            <li> <span>●</span> Acceso y uso de página web del GRAM como usuario registrado para subir contenido </li>
                        </ul>
                      </div>
                </div>
                </>
            }
        /> 
         <Section
            classname={"main-events-container"}
            content={
                <>
                    <h3>PRÓXIMOS EVENTOS</h3>
                    <div className="events__one-event">
                    <img src={evento1} className="events__one-event-img"/>
                    <h3>CURSO DE TRANSITO GLACIAR</h3>
                    <div className="events__one-event-info">
                        <p><span>Lugar: </span>Mendoza, Argentina.</p>
                        <p><span>Fecha: </span>27/08/2023 al 31/08/2023.</p>
                        <p><span>Precio: </span>Socios: $130.000, no socios $100.000.</p>
                    </div>
                    <div className="one-event__buttons">
                        <button className="one-event-button1">Reservar</button>
                        <button className="one-event-button2">Ver detalles</button>
                    </div> 
                </div>
                </>
            }
        />        
    </div>
  )
}

