interface cartaTextoI{
    titulo: string;
    subtitulo: string;
}



const CartaTexto = ({titulo,subtitulo}:cartaTextoI)=>{
return(
    <div className="my-14 px-14 text-center space-y-2">
        <h2 className="text-4xl"><b>{titulo}</b></h2>
        <h2 className="text-lg px-56 py-4">{subtitulo}</h2>
    </div>
)
    
}

export{
    CartaTexto
}