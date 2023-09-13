import React from 'react'
import cai from "../../assets/images/cai2.png"
import cai0 from "../../assets/images/cai0.png"
function Service1() {
  return (
    <div>
 
        <div className='containerfirstservice'>
            <div className='servicefirstpart'>
                <div className='servicefirsttext'>“Comienza el camino a la obtención de tu título”</div>
                <div className='servicesegondpart'>
                    <div className='servicesegondtext'>Puedes agendar una primera sesión gratuita, para informarte de todo lo necesario para comenzar.</div>
                    <div className='firstservicebuttons'>
                        <button className='servicebutton1'> AGENDAR SESION</button>
                        <button className='servicebutton2'> CONTRATAR SERVICIO</button>

                    </div> 
                </div>
            </div>

            <div className='servicefirstpic'>
                <img className='imgfirstpic' src={cai0} alt="" />
            </div>
            
            <div className='firstservicebuttonsprime'>
                        <button className='servicebutton3'> AGENDAR SESION</button>
                        <button className='servicebutton4'> CONTRATAR SERVICIO</button>

                    </div>


        </div>
        <div className="servicios">
           
            <h3 className="serviceMobileTitle">Nuestros servicios</h3>
            <h3 className="serviceDesktopTitle">¿Qué servicios ofrecemos?</h3>
            
            <div className="row">
                <div className="col-12 col-lg-12">
                    <h3 className="blueText titutos-services">1. Tesis de grado</h3>
                    <p>Ofrecemos un servicio de acompañamiento completo para la elaboración de tesis de licenciatura, tesis de pregrado y tesinas. Nuestro apoyo abarca desde la construcción del planteamiento del problema, el marco teórico y el diseño metodológico, hasta el procesamiento de los datos, el análisis de resultados, las conclusiones y las referencias bibliográficas.</p>
                </div>
                
                <div className="col-12 col-lg-12">
                    <h3 className="blueText titutos-services">2. Tesis de postgrado</h3>
                    <p>Nos especializamos en brindar asesorías para tesis de Maestría y Posgrados en Ciencias Sociales, acompañando a la persona que realiza la tesis en todo su proceso.</p>
                </div>
           
            </div>

        </div>
        <div className="carreras">
            <div style={{textAlign:"center"}}>
                <img src={cai} alt="Mujer Estudiando" className="img-ciencas-sociales"/> 
            </div>
            <div className='carrerasText'>
                <h3 className="blueText">Nos enfocamos en asesorías de tesis de las carreras de:</h3>
                  
                <ul>
                    <li>Ciencias de la comunicación</li>
                    <li>Sociología</li>
                    <li>Contabilidad</li>
                    <li>Administración</li>
                    <li>Economia</li>
                    <li>Educación</li>
                    <li>Antropología</li>
                    <li>Psicología</li>
                    <li>Ingeniería industrial</li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Service1