# 🌆 Portfolio Vaporwave - Edición Minimalista

Un portfolio moderno con estética vaporwave minimalista, construido con React, Vite y Tailwind CSS.

## 🎨 Características

- ✨ Diseño vaporwave con paleta de colores púrpura y verde neón
- 🎯 Animaciones fluidas y efectos visuales sutiles
- 📱 Completamente responsive
- ⚡ Desarrollado con Vite para máxima velocidad
- 🎭 Grid animado y efectos de scanline
- 💫 Componentes modulares y reutilizables
- 🖤 Fondo negro puro para máximo contraste

## 🎨 Paleta de Colores Específica

```css
Purple: #B967FF  /* Color principal - Púrpura vibrante */
Neon:   #CCFF00  /* Acento - Verde neón/lima */
Dark:   #0a0a0a  /* Fondo secundario */
Darker: #000000  /* Fondo principal - Negro puro */
Gray:   #4a4a4a  /* Texto secundario */
```

Esta paleta está inspirada en la estética de streams y contenido vaporwave minimalista, con solo dos colores principales para un impacto visual máximo.

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 📁 Estructura del Proyecto

```
vaporwave-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Barra de navegación
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── About.jsx       # Sobre mí
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   ├── Projects.jsx    # Proyectos destacados
│   │   └── Contact.jsx     # Formulario de contacto
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── tailwind.config.js      # Configuración de Tailwind
└── package.json            # Dependencias del proyecto
```

## ⚙️ Configuración

### Tailwind CSS

El proyecto utiliza una configuración personalizada de Tailwind con:
- Colores vaporwave personalizados (Púrpura y Verde Neón)
- Animaciones customizadas (glow, float, scan)
- Fuente Orbitron de Google Fonts

### Personalización

Para personalizar el portfolio:

1. **Información personal**: Edita los componentes en `src/components/`
2. **Colores**: Modifica `tailwind.config.js` (actualmente solo usa Purple y Neon)
3. **Proyectos**: Actualiza el array en `src/components/Projects.jsx`
4. **Links sociales**: Modifica los URLs en `src/components/Contact.jsx`

## 🎨 Cambiar Colores

Si quieres usar diferentes colores, edita `tailwind.config.js`:

```javascript
colors: {
  vaporwave: {
    purple: '#B967FF',  // Tu color principal
    neon: '#CCFF00',    // Tu color de acento
    dark: '#0a0a0a',    // Fondo secundario
    darker: '#000000',  // Fondo principal
    gray: '#4a4a4a',    // Texto secundario
  }
}
```

## 🛠️ Tecnologías Utilizadas

- **React** - Librería de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Google Fonts** (Orbitron) - Tipografía

## 📝 Tareas Pendientes

- [ ] Agregar tu nombre en el Hero
- [ ] Actualizar información en About
- [ ] Añadir tus proyectos reales
- [ ] Configurar enlaces de redes sociales
- [ ] Implementar backend para el formulario de contacto
- [ ] Añadir favicon personalizado
- [ ] Optimizar imágenes

## 🌐 Deployment

### GitHub Pages

```bash
npm run build
# Subir la carpeta dist/ a tu repositorio
```

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🎯 Próximas Mejoras

- [ ] Modo oscuro/claro toggle
- [ ] Animaciones adicionales con Framer Motion
- [ ] Blog section
- [ ] Internacionalización (i18n)
- [ ] Tests unitarios
- [ ] PWA capabilities

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para tu portfolio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias, por favor abre un issue.

---

**Hecho con 💜 y estética Vaporwave Minimalista**

*Menos es más - Solo púrpura y verde neón* 🌆
