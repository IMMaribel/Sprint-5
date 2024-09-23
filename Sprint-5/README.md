# React + Vite + Tailwind

Este es un proyecto de ejemplo hecho con **React**, que presenta un conjunto de tarjetas con contenido dinámico. Cada tarjeta contiene una imagen, un título y una descripción, y cambia de color de fondo conforme se navega entre las tarjetas.

## Características

- Navegación entre tarjetas con un botón.
- Las tarjetas muestran una imagen, título y descripción.
- Cada tarjeta tiene un color de fondo diferente.
- La aplicación es responsive y está diseñada con **Tailwind CSS** para que funcione en varios tamaños de pantalla.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework CSS para el diseño responsivo y estilización.
- **JavaScript**: Lenguaje de programación usado en la lógica de la aplicación.
- **Vite**: Herramienta para desarrollo rápido de proyectos React (puedes       reemplazarla por CRA o Webpack si no usas Vite).

## Colores Utilizados

- **Colores de Fondo de las Tarjetas**:
  - Teal: `bg-teal-600`
  - Slate: `bg-slate-300`
  - Amber: `bg-amber-300`

- **Colores de Texto**:
  - Texto Principal: `text-gray-900`
  - Texto Secundario: `text-gray-700`
  - Botones: Fondo negro `bg-black` y texto blanco `text-white`.

## Tipografías

- **Tipografía Principal**: Utiliza la fuente sans-serif predeterminada de Tailwind CSS, que generalmente se basa en la familia de fuentes de sistema (Arial, Helvetica, etc.).
- **Tamaños de Fuente**:
  - Títulos: `text-xl` para títulos de tarjetas.
  - Descripciones: `text-base` o `text-lg` según el contenido.

## Estructura del Proyecto

/src │ ├── /Components │ 
                       ├── Indicator.js # Componente de los puntos indicadores |
                       ├── Card.js # Componente de la tarjeta individual │
                       └── App.js # Componente principal de la aplicación │ 
       ├── /Images # Carpeta de imágenes usadas │ 
                                                ├── img1.js │ 
                                                ├── img2.js │ 
                                                └── img3.js │ 
└── index.html # Punto de entrada de la aplicación

![Vista general del proyecto](src/assets/VistaGeneral.png)


## Instalación

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/IMMaribel/Sprint-5>

2. Navega al directorio del proyecto:

    cd nombre-del-repositorio

3. Instala las dependencias:

    npm install


## Uso

npm start

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor envía un pull request o abre un issue.