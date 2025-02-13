

const obtenerInput = () : number => {
    const inputNotas = document.getElementById("input");
    if (inputNotas && inputNotas instanceof HTMLInputElement){
        return Number(inputNotas.value);
    }
    return 0;
}


const pintarNotas = () => {
 const notas = obtenerInput();
 listadoNotas.push(notas); 
 const divNotas = document.getElementById("notas");
 if (divNotas && divNotas instanceof HTMLDivElement){
    const nuevoElemento = document.createElement("div");
    nuevoElemento.textContent = notas.toString();
    divNotas.appendChild(nuevoElemento);
  }
}

const resetearInput = () => {
  const inputNotas = document.getElementById("input");
    if (inputNotas && inputNotas instanceof HTMLInputElement){
        inputNotas.value = "";
    }
}

const listadoNotas : number[]= [];

const calcularPromedioNotas = (): number => {
    const total = listadoNotas.reduce((acum, nota) => acum + nota, 0);
    return total / listadoNotas.length;
  };
  
const mostrarPromedio = () => {
    const promedio = calcularPromedioNotas();
    const divResultado = document.getElementById("resultado");
    if (divResultado && divResultado instanceof HTMLDivElement) {
      divResultado.textContent = `Resultado promedio: ${promedio.toFixed(2)}`;
    }
  };

const mostrarMensaje = (mensaje : string) => {
    const divMensaje = document.getElementById("mensaje");
    if (divMensaje && divMensaje instanceof HTMLDivElement){
        divMensaje.innerHTML = mensaje;
    }
}

const revisionPromedio = () => {
    const sumaNotas = calcularPromedioNotas();
    if (sumaNotas > 5){
        mostrarMensaje("Enhorabuena, has aprobado");
    } else {
        mostrarMensaje("Lo sentimos, has suspendido")
    }
}


const handleClick = () => {
    pintarNotas();
    resetearInput();
    mostrarPromedio();
    revisionPromedio()
}

const botonEnviar = document.getElementById("enviar");
 if (botonEnviar && botonEnviar instanceof HTMLButtonElement) {
    botonEnviar.addEventListener("click", handleClick);
 }

