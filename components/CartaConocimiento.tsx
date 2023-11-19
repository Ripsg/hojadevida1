interface CartaConocimientoI{
    imagen: string;
    titulo: string;
    descripcion: string;

}

const CartaConocimiento = ({imagen,titulo,descripcion}:CartaConocimientoI)=>{
return(
<div className="flex flex-col text-center gap-1 place-items-center bg-white m-6 rounded-full p-8 w-80">
    <img src={imagen} alt="Carta conocimiento" className="w-[70px] h-[70px]" />
    <div className="w-3/4">
        <h2 className="text-3xl text-black font-bold">{titulo}</h2>
        <h2 className="text-black text-center py-2">{descripcion}</h2>
    </div>
</div>

)
    
}

export{
    CartaConocimiento
}