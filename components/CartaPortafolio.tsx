
interface DatosPortafolioI {
    imagen: string;
    texto: string;
    descripcion: string;
    
}
function CartaPortafolio({ imagen, texto, descripcion}: DatosPortafolioI) {
return (
<div className="bg-[#DFDBFF] flex flex-col text-left items-start w-4/12 px-10 py-10 ">
    <picture className="w-80 justify-center items-center"><img src={imagen} alt="" /></picture>
    <h4 className="text-2xl font-bold">{texto}</h4>
    <br></br>
    <h5>{descripcion}</h5>
    <a className="text-violet-600 font-bold"href="">Ver mas...</a>
</div>
)
}

export {CartaPortafolio}