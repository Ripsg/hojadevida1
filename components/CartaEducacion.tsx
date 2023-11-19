
interface DatosCartaI {
    lugar: string;
    grado: string;
    descripcion: string;
    estado: string;
}
function CartaEducacion({ lugar, grado, descripcion, estado}: DatosCartaI) {
return (
<div className="bg-white py-6 px-10 w-90 rounded-3xl m-2 max-w-[85%] mx-auto flex  items-center justify-items-center">
    <div className="grid grid-cols-2 gap-4">
        <h1 className="font-bold text-xl">{lugar}</h1>
    </div>
    <div className='flex flex-col w-3/4 gap-5 place-items-end'>
        <h1 className="text-black font-extrabold">{grado}</h1>
        <h1 className="text-black ">{descripcion}</h1>
        <h1 className="rounded-xl font-semibold">{estado}</h1>
    </div>
</div>
)
}

export {CartaEducacion}