import React, { useEffect } from 'react'
import Nosotros1 from '../../components/cardNosotros/Nosotros1'
import Mision from '../../components/Mision/Mision';
import Team from '../../components/Team/Team';
import Valores from '../../components/valores/Valores';


function About() {
  
  useEffect(()=> {
    scrollTo(0,0)
  }, [])

  return (
    <div>
      <Nosotros1/>
      <Team />
      <Mision />
      <Valores/>
    </div>
  )
}

export default About
