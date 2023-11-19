interface BarraProgresoI {
    porcentaje: number;
    nombre: string;
  }
  
  const BarradeProgreso = ({ porcentaje, nombre }: BarraProgresoI) => {
    const EstiloPorcentaje = {
      width: `${porcentaje}%`,
      backgroundColor: "#900CF4",
      height: "5px",
      borderRadius: "5px",
    };
  
    return (
      <div className="mb-1">
        <h2 className="float-left">{nombre}</h2>
        <h2 className="float-right">{porcentaje}%</h2>
        <br></br>
        <div className="p-0.5 outline outline-1 outline-[#900CF4]">
          <div style={EstiloPorcentaje} />
        </div>
      </div>
    );
  };
  
  export default BarradeProgreso;