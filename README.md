<div align="center">
	<h1 align="center">Portafolio Profesional – Sara Bastidas</h1>
	<p align="center">
		Proyecto de portafolio personal con frontend en React y backend en Node.js/Express.
	</p>
</div>

---

## ✨ Descripción
Este proyecto es un portafolio web moderno para presentar perfil profesional, habilidades, experiencia, formación y proyectos. Fue migrado desde una versión HTML/CSS estática a una arquitectura **React + Node.js** para facilitar mantenimiento, escalabilidad y futuras integraciones.

Incluye una interfaz con diseño oscuro y acentos morados, animaciones y secciones clásicas de un portafolio.

---

## 🧩 Características principales
- Navegación fija y responsive.
- Sección de inicio con foto y enlaces sociales.
- Sobre mí con intereses y datos personales.
- Skills con barras animadas al hacer scroll.
- Curriculum (formación/experiencia) con timeline.
- Portfolio con galería de proyectos.
- Contacto con formulario y datos de contacto.
- Pre-carga de fondos para evitar errores si faltan imágenes.

---

## 🛠️ Tecnologías
**Frontend**
- React (Create React App)
- HTML5 + CSS3
- Font Awesome

**Backend**
- Node.js
- Express
- CORS

**Herramientas**
- concurrently (para ejecutar frontend y backend en paralelo)

---

## 📁 Estructura del proyecto
```
SaraBastidas19/
├─ client/               # React (frontend)
│  ├─ public/
│  │  ├─ img/             # Imágenes del portafolio
│  │  └─ index.html
│  └─ src/
│     ├─ App.js
│     ├─ App.css
│     └─ index.js
├─ server/               # Node/Express (backend)
│  └─ index.js
├─ package.json          # Scripts raíz
└─ README.md
```

---

## 🚀 Cómo ejecutar el proyecto

### 1) Instalar dependencias
Desde la raíz del proyecto:
```
npm run install:all
```

### 2) Ejecutar en modo desarrollo
```
npm run dev
```

Esto levanta:
- **Frontend** en http://localhost:3000
- **Backend** en http://localhost:3001

---

## 📜 Scripts disponibles
En la raíz del proyecto:
- `npm run dev` → Ejecuta frontend y backend juntos
- `npm run install:all` → Instala dependencias en client y server

En client:
- `npm start` → React dev server
- `npm run build` → Build de producción

En server:
- `npm run dev` → Inicia Express con nodemon

---

## 🖼️ Imágenes requeridas
Colocar en `client/public/img/`:
- `hero.png` (imagen principal)
- `fondo.jpg` (fondo del hero)
- `contact_bg.png` (fondo del contacto)
- `p1.jpg` a `p6.jpg` (galería del portfolio)

Las imágenes se ajustan automáticamente al tamaño del contenedor (máx 340px en portfolio), pero se recomienda usar imágenes de **340px de ancho o más** para evitar pixelación.

---

## 🎨 Paleta de colores
- Negro: `#000000`
- Morado principal: `#9904D9`
- Morado medio: `#56048C`
- Morado oscuro: `#140126`
- Blanco: `#FFFFFF`

---

## 🔌 API (backend)
El backend incluye un endpoint de salud:
- `GET /api/health` → `{ status: "ok" }`

Esto sirve como base para integrar formularios de contacto o envío de correos en el futuro.

---

## ✅ Estado actual
- Migración HTML → React completada
- Estilos aplicados con tema oscuro
- Curriculum y Portfolio actualizados
- Rama principal actualizada con cambios de diseño

---

## 🧭 Próximos pasos (roadmap)
- Conectar formulario de contacto al backend
- Agregar proyectos reales y links en portfolio
- Mejorar animaciones y accesibilidad
- Publicación en hosting (Netlify / Vercel)

---

## 👩‍💻 Autor
**Sara Bastidas**
- Portafolio profesional y proyectos académicos
- Intereses: IA, desarrollo web, diseño

---

## 📝 Licencia
Este proyecto es de uso personal y educativo.
