# 🐋 Interactive Whale Wallpaper

Un fondo de pantalla interactivo animado con una ballena que sigue el movimiento de tu mouse. El proyecto es totalmente personalizable mediante un archivo JSON de configuración.

## 📁 Estructura del Proyecto

```
├── OrcaWpp.html          # Archivo principal HTML
├── style.css             # Estilos CSS
├── script.js             # JavaScript (en desarrollo)
├── config.json           # Archivo de configuración
└── README.md             # Este archivo
```

## ⚙️ Configuración (config.json)

El archivo `config.json` permite personalizar todos los aspectos del proyecto sin modificar el código:

### **Configuración de la Ballena**
```json
"whale": {
  "fps": 30,              // Fotogramas por segundo (10-60)
  "maxSpeed": 150,        // Velocidad máxima de seguimiento
  "easing": 6,            // Factor de suavizado (más alto = más lento)
  "updateDelay": 15,      // Retraso entre actualizaciones
  "scale": 0.05           // Escala de la ballena (0.01-0.1)
}
```

### **Configuración de Fondo**
```json
"background": {
  "type": "gradient",     // Tipo de fondo (gradient, solid, etc.)
  "gradient": {
    "direction": "180deg",           // Dirección del gradiente
    "color1": "#0a1628",             // Color 1
    "color2": "#1a3a5c",             // Color 2
    "color3": "#0d2137"              // Color 3
  }
}
```

### **Configuración de Efectos**
```json
"effects": {
  "enableParticles": false,      // Habilitar partículas
  "particleCount": 20,           // Cantidad de partículas
  "particleOpacity": 0.6,        // Opacidad de partículas
  "enableSound": false,          // Habilitar sonidos
  "soundVolume": 0.5             // Volumen de sonidos
}
```

### **Configuración de UI**
```json
"ui": {
  "showCursor": false,           // Mostrar cursor
  "showControls": true,          // Mostrar panel de controles
  "controlsPosition": "top-right" // Posición del panel
}
```

### **Configuración de Rendimiento**
```json
"performance": {
  "useRequestAnimationFrame": true,  // Usar RAF en lugar de setInterval
  "optimizeRendering": true,          // Optimizar renderizado
  "cacheSVG": false                   // Cachear SVG
}
```

## 🎮 Controles del Panel

Presiona el botón de controles (esquina superior derecha) para acceder a:

- **FPS**: Ajusta la velocidad de animación
- **Velocidad**: Controla la rapidez del seguimiento
- **Colores**: Personaliza los colores del gradiente en tiempo real

## 🚀 Cómo Usar

### Opción 1: Editar config.json
1. Abre `config.json`
2. Modifica los valores deseados
3. Guarda el archivo
4. Recarga la página

### Opción 2: Panel de Controles
1. Abre `OrcaWpp.html` en tu navegador
2. Haz clic en el botón de controles (esquina superior derecha)
3. Ajusta los parámetros en tiempo real

## 🛠️ Ejemplos de Configuración

### Modo Oscuro (Defecto)
```json
"background": {
  "gradient": {
    "color1": "#0a1628",
    "color2": "#1a3a5c",
    "color3": "#0d2137"
  }
}
```

### Modo Claro
```json
"background": {
  "gradient": {
    "color1": "#e0f7ff",
    "color2": "#b3e5fc",
    "color3": "#81d4fa"
  }
}
```

### Animación Rápida
```json
"whale": {
  "fps": 60,
  "easing": 2
}
```

### Animación Lenta
```json
"whale": {
  "fps": 15,
  "easing": 12
}
```

## 📝 Notas

- Los cambios en `config.json` requieren recargar la página
- El panel de controles permite cambios en tiempo real
- Algunos navegadores pueden requerir permisos para cargar archivos locales

## 🔧 Tecnologías

- HTML5
- CSS3 (Gradientes, Backdrop Filter)
- Vanilla JavaScript (ES6+)
- SVG para gráficos vectoriales
- JSON para configuración

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

---

¡Disfruta tu ballena interactiva! 🐋✨
