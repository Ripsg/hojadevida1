interface datospersonales{
    titulo: string;
    subtitulo: string;
}



const DatosPersonales = ({titulo,subtitulo}:datospersonales)=>{
return(
    <div className="flex justify-between my-3 px-3">
        <h2><b>{titulo}</b></h2>
        <h2>{subtitulo}</h2>
    </div>
)
    
}

export{
    DatosPersonales
}