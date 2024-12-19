const caja = document.getElementById("caja");
const mensaje = document.getElementById("mensaje");
const cambiarEstiloBtn = document.getElementById("cambiar-estilo-btn");


// Estilos iniciales para el reset
const estilosIniciales = {
    backgroundColor: '#FF5733',
    color: 'white',
    borderRadius: '0',
    fontFamily: 'Arial, sans-serif',
    width: '200px',
    height: '200px',
    opacity: '1',
    transform: 'rotate(0deg)',
    border: '2px solid #333',
    textAlign: 'center',
    padding: '15px',
    boxShadow: 'none',
    fontSize: '16px',
    letterSpacing: 'normal'
};

// Contador para seguir el orden secuencial
let cambioActual = 0;

// Función para resetear todos los estilos
function resetearEstilos() {
    Object.keys(estilosIniciales).forEach(propiedad => {
        caja.style[propiedad] = estilosIniciales[propiedad];
    });
    // Eliminar todas las clases excepto las necesarias
    caja.className = '';
    caja.classList.add('rojo');
}

const cambiosEstilo = [
  function () {
    const colores = {
      rojo: "#FF5733",
      azul: "#3399FF",
      verde: "#33FF57",
      amarillo: "#FFD700",
      morado: "#9933FF",
      naranja: "#FF9933",
    };
    const colorKeys = Object.keys(colores);
    const indiceActual = colorKeys.indexOf("rojo");
    const siguienteColor = colorKeys[(indiceActual + 1) % colorKeys.length];
    caja.style.backgroundColor = colores[siguienteColor];
    return `Cambio de estilo (1/12): background-color: ${colores[siguienteColor]}`;
  },
  // 2. Cambio de border-radius
  function () {
    const radius = "50%";
    caja.style.borderRadius = radius;
    return `Cambio de estilo (2/12): border-radius: ${radius}`;
  },
  // 2. Cambio de border-radius
  function () {
    const radius = "50%";
    caja.style.borderRadius = radius;
    return `Cambio de estilo (2/12): border-radius: ${radius}`;
  },
  // 3. Cambio de fuente
  function () {
    const nuevaFuente = "'Times New Roman', serif";
    caja.style.fontFamily = nuevaFuente;
    return `Cambio de estilo (3/12): font-family: ${nuevaFuente}`;
  },
  // 4. Cambio de tamaño
  function () {
    const size = "250px";
    caja.style.width = size;
    caja.style.height = size;
    return `Cambio de estilo (4/12): width: ${size}, height: ${size}`;
  },
  // 5. Cambio de transparencia
  function () {
    const opacity = "0.5";
    caja.style.opacity = opacity;
    return `Cambio de estilo (5/12): opacity: ${opacity}`;
  },
  // 6. Cambio de rotación
  function () {
    const rotation = "45deg";
    caja.style.transform = `rotate(${rotation})`;
    return `Cambio de estilo (6/12): transform: rotate(${rotation})`;
  },
  // 7. Cambio de borde
  function () {
    const border = "5px dashed #333";
    caja.style.border = border;
    return `Cambio de estilo (7/12): border: ${border}`;
  },
  // 8. Cambio de alineación del texto
  function () {
    const alignment = "right";
    caja.style.textAlign = alignment;
    return `Cambio de estilo (8/12): text-align: ${alignment}`;
  },
  // 9. Cambio de padding
  function () {
    const padding = "30px";
    caja.style.padding = padding;
    return `Cambio de estilo (9/12): padding: ${padding}`;
  },
  // 10. Cambio de sombra
  function () {
    const shadow = "5px 5px 10px rgba(0,0,0,0.5)";
    caja.style.boxShadow = shadow;
    return `Cambio de estilo (10/12): box-shadow: ${shadow}`;
  },
  // 11. Cambio de tamaño de texto
  function () {
    const fontSize = "24px";
    caja.style.fontSize = fontSize;
    return `Cambio de estilo (11/12): font-size: ${fontSize}`;
  },
  // 12. Cambio de espacio entre letras
  function () {
    const letterSpacing = "3px";
    caja.style.letterSpacing = letterSpacing;
    return `Cambio de estilo (12/12): letter-spacing: ${letterSpacing}`;
  },
];

// Evento click del botón
cambiarEstiloBtn.addEventListener("click", () => {
  // Primero resetear los estilos
  resetearEstilos();

  // Aplicar el cambio secuencial
  const mensaje = cambiosEstilo[cambioActual]();
  caja.textContent = mensaje;

  // Incrementar el contador y volver a 0 si llegamos al final
  cambioActual = (cambioActual + 1) % cambiosEstilo.length;

});
  
// Inicializar con los estilos por defecto
resetearEstilos();
