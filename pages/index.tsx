import Image from "next/image";
import { DatosPersonales } from "@/components/datos";
import { Linea} from "@/components/linea";
import BarradeProgreso from "@/components/BarraProgreso";
import { CartaTexto } from "@/components/cartaTexto";
import { RiContractRightFill } from "react-icons/ri";
import { CartaConocimiento } from "@/components/CartaConocimiento";
import { CartaEducacion } from "@/components/CartaEducacion";
import { CartaPortafolio } from "@/components/CartaPortafolio";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

const index=() =>{ 
return(<main className="flex">
<aside className="w-3/12 bg-white gap-15 px-5 py-2">
  
  <div className="w-full flex items-center justify-center">
    <picture className="flex rounded-full justify-center bg-contain overflow-hidden w-44 h-48" >
    <img src="/fotoSGT.png" alt="foto-Santiago Garcia" width={150} height={150}/>
    
    </picture>
  </div>
  <div className="flex flex-col justify-center items-center my-5">
    <h2 className="text-2xl font-medium">Santiago Garcia</h2>
    <h4 className="text-xl font-bold text-[#900CF4]">Front-End Developer</h4>
  </div>
  <section className="font-normal">
  <DatosPersonales titulo="Edad" subtitulo="24"/>
  <DatosPersonales titulo="Departamento:" subtitulo="Antioquia"/>
  <DatosPersonales titulo="Correo:" subtitulo="santiaguito.5333@gmail.com"/>
  <DatosPersonales titulo="Identificación" subtitulo="1037665031"/>
  <Linea/>
  </section>
   <section>
    <h1 className="font-semibold text-xl">Idiomas</h1>
    <DatosPersonales titulo="" subtitulo=""></DatosPersonales>
    <BarradeProgreso nombre="Ingles" porcentaje={80}></BarradeProgreso>
    <BarradeProgreso nombre="Español" porcentaje={100}></BarradeProgreso>
    <BarradeProgreso nombre="Portugues" porcentaje={20}></BarradeProgreso>
    <Linea/>
   </section>
   <section >
    <h1 className="font-semibold text-xl">Lenguajes de progamación</h1>
    <DatosPersonales titulo="" subtitulo=""></DatosPersonales>
    <BarradeProgreso nombre="CSS" porcentaje={35}></BarradeProgreso>
    <BarradeProgreso nombre="JAVA" porcentaje={90}></BarradeProgreso>
    <BarradeProgreso nombre="C#" porcentaje={90}></BarradeProgreso>
    <BarradeProgreso nombre="Python" porcentaje={50}></BarradeProgreso>
    <Linea/>
   </section>
   <section>
    <h1 className="font-semibold text-xl">Habilidades Extras</h1>
    <br />
    <div>
      <RiContractRightFill className="my-1 mx-1 float-left" color="#900CF4"/>
      <h2 className="font-normal text-lg"> Habilidades blandas</h2>
      <RiContractRightFill className="my-1 mx-1 float-left" color="#900CF4"/>
      <h2 className="font-normal text-lg"> Buena comunicación</h2>    
      <RiContractRightFill className="my-1 mx-1 float-left" color="#900CF4"/>
      <h2 className="font-normal text-lg"> Habilidades blandas</h2>        
    </div>
   </section>
</aside>

<section className="w-8/12 bg-[#DFDBFF]">
 <div className="flex justify-between p-20">
  <div >
    <h1 className="text-5xl font-medium">Santiago Garcia Tirado <br></br><span className="text-[#900CF4] font-bold">Front-end</span> Developer</h1>
    <p className="py-5 text-lg ">Soy estudiante de la universidad de antioquia en el pregrado de ingenieria de sistemas, trabaje como desarrollador en shopify como desarollador junior front-end,
      me gusta aprender de las personas asi como apoyar los grupos de trabajo aportando conocimiento y capacidades para sacar adelante los proyectos
    </p>
    <button className="bg-[#900CF4] text-white p-2 rounded-xl">Contratame</button>
  </div>
  <div>
    <img src="/fotoSGT.png" alt="foto-Santiago Garcia" width={900} height={900} />
  </div>
</div>
<div>
<CartaTexto titulo="Mi conocimiento" subtitulo="Tengo amplio conocimiento en backend realizado en java y c# asi como el manejo de GUI en estos lenguajes ademas de tener la capacidad de adaptarme a proyectos en desarrollo y a su equipo de trabajo."/>

</div>
<div className="flex justify-center flex-wrap my-10">
  <CartaConocimiento imagen="/icone-robot-android-violet.png" titulo="Mobile developer" descripcion="Desarrollador mobile con Android Studio" />
  <CartaConocimiento imagen="/game-dev.png" titulo="Videogames dev" descripcion="Desarrollador videojuegos en Unity con C#" />
  <CartaConocimiento imagen="/web-dev.png" titulo="Web developer" descripcion="Desarrollador web HTML5, CSS y JS" />
  <CartaConocimiento imagen="/partner-web.png" titulo="Trabajo en equipo" descripcion="Adaptacion a grupos de trabajo y buenas habilidades blandas" />
  <CartaConocimiento imagen="/icone-robot-android-violet.png" titulo="Mobile developer" descripcion="Desarrollador mobile con Android Studio" />
  <CartaConocimiento imagen="/icone-robot-android-violet.png" titulo="Mobile developer" descripcion="Desarrollador mobile con Android Studio" />
</div>
<section>
  <div></div>
</section>
<div>
<CartaTexto titulo="Estudios" subtitulo="He realizado mis estudios en los siguientes lugares"/> 
</div>
<div>
<CartaEducacion descripcion="academico con enfasis en pedagogia infantil " estado="Culminado" grado="Bachiller academico" lugar="Institucion Educativa Normal Superior de Envigado"  />
<CartaEducacion descripcion="Realice tres semestres en el pregrado de Ingeneria de sistemas" estado="Abandonado" grado="Pregrado en ingenieria de sistemas" lugar="Universidad Nacional de Colombia sede Medellin   "  />
<CartaEducacion descripcion="Estoy cursando 8vo semestre en el pregrado de Ingeneria de sistemas" estado="En curso " grado="Pregrado en ingenieria de sistemas" lugar="Universidad de Antioquia"  />
</div>
<div>
<CartaTexto titulo="Portafolio" subtitulo="Estos son los trabajos que he realizado a lo largo de mi carrera"/> 
</div>
<section>
  <div className="flex flex-row"> 
  <CartaPortafolio imagen="/Kikes.png" texto="Huevos kikes" descripcion="Participe en el desarrollo web de la pagina de huevos kikes como desarrollador front-end mediante shopify"/>
  <CartaPortafolio imagen="/casio.png" texto="Casio" descripcion="Participe en el desarrollo web de la pagina casio como desarrollador front-end mediante shopify"/>
  <CartaPortafolio imagen="/aleta.jpg" texto=" Aletta" descripcion="Participe en el desarrollo web de la pagina aleta, como desarrollar front-end mediante shopify"/>
  </div>

  <footer className=" flex-col text-center mb-0 w-full bg-violet-600 text-white py-5"> All rights reserved. Santiago Garcia Tirado 2023</footer>
 
</section>



</section>


<aside className="w-1/12 bg-white h-screen top-0 flex flex-col items-center text-center gap-2">
  <h3 className="font-bold">Links</h3>
  
  <div className="flex justify-center gap-2 items-center">
    
    <a href="https://www.linkedin.com/in/santiago-garcia-tirado-013364216/"><TiSocialLinkedinCircular style={{fontSize:'80px', color:'#900CF4'}} /></a>
    </div>
    <div className="flex justify-center gap-2 items-center">
    
    <a href="https://www.facebook.com/elsanti11/"><TiSocialFacebookCircular style={{fontSize:'80px', color:'#900CF4'}} /></a>
    </div>
    <div className="flex justify-center gap-2 items-center">
    
    <a href="https://www.instagram.com/santi2457/"><TiSocialInstagramCircular href="" style={{fontSize:'80px', color:'#900CF4'}} /></a>
    </div>
</aside>

</main>)

}
 export default index;