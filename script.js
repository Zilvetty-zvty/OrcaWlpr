let config = {};
let whale = {};

// Cargar configuración
async function loadConfig() {
  try {
    const response = await fetch('config.json');
    config = await response.json();
    console.log('Configuración cargada:', config);
  } catch (error) {
    console.error('Error cargando config.json:', error);
    // Valores por defecto si no carga el JSON
    config = {
      whale: { fps: 30, maxSpeed: 150, easing: 6, updateDelay: 15, scale: 0.05 },
      background: { type: "gradient", gradient: { direction: "180deg", color1: "#0a1628", color2: "#1a3a5c", color3: "#0d2137" } },
      ui: { showCursor: false }
    };
  }
}

// Inicializar la ballena con config
function initWhale() {
  const element = document.getElementById("whale");
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  whale = {
    element: element,
    width: width,
    height: height,
    fps: config.whale.fps,
    easing: config.whale.easing,
    maxSpeed: config.whale.maxSpeed,
    delay: config.whale.updateDelay,
    scale: config.whale.scale,
    mouse: { x: width / 2, y: height / 2 },
    parts: [],
    defs: '<defs><linearGradient gradientTransform="matrix(0 -2038 1116.5 0 -157 2622)" gradientUnits="userSpaceOnUse" id=":s6y" x1="-1" x2="1" y1="0" y2="0"><stop offset="0" stop-color="rgb(0,0,0)" stop-opacity="1.000"/><stop offset="0.8470588235294118" stop-color="rgb(31,33,32)" stop-opacity="1.000"/><stop offset="1" stop-color="rgb(88,92,90)" stop-opacity="1.000"/></linearGradient><linearGradient gradientTransform="matrix(1.25 -194.75 407.5 4.5 -111 4022)" gradientUnits="userSpaceOnUse" id=":s98" x1="-1" x2="1" y1="0" y2="0"><stop offset="0.3843137254901961" stop-color="rgb(241,241,241)" stop-opacity="1.000"/><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1.000"/></linearGradient></defs>'
  };
  
  applyBackgroundConfig();
  startWhale();
}

// Aplicar configuración de fondo
function applyBackgroundConfig() {
  if (config.background.type === "gradient") {
    const { direction, color1, color2, color3 } = config.background.gradient;
    document.body.style.background = `linear-gradient(${direction}, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
  }
}

// Aplicar configuración de UI
function applyUIConfig() {
  if (!config.ui.showCursor) {
    document.body.style.cursor = 'none';
  }
}

// Iniciar animación
function startWhale() {
  document.addEventListener('mousemove', (e) => {
    whale.mouse = { x: e.clientX, y: e.clientY };
  });

  setInterval(updateWhale, 1000 / whale.fps);
}

// Actualizar posición de la ballena
function updateWhale() {
  // Aquí iría la lógica de actualización de la ballena
  // Por ahora es un placeholder
}

// Función para cambiar configuración en tiempo real
function updateConfig(key, value) {
  const keys = key.split('.');
  let obj = config;
  for (let i = 0; i < keys.length - 1; i++) {
    obj = obj[keys[i]];
  }
  obj[keys[keys.length - 1]] = value;
  console.log('Configuración actualizada:', key, '=', value);
}

// Inicializar cuando carga el DOM
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();
  applyUIConfig();
  initWhale();
});

// Redimensionamiento responsivo
window.addEventListener('resize', () => {
  whale.width = window.innerWidth;
  whale.height = window.innerHeight;
});
