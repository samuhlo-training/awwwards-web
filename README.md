# React + Vite + TailwindCSS Project

Este es un proyecto desarrollado con **React** y **Vite**, que incluye la configuración de **TailwindCSS**, ESLint, Prettier y otras herramientas modernas para facilitar un flujo de trabajo ágil y eficiente. Este es un excelente punto de partida para crear aplicaciones web rápidas y escalables.

---

## 🚀 Características Principales

- **Vite**: Compilador extremadamente rápido y con soporte nativo para ES Modules. Mejora significativamente los tiempos de desarrollo.
- **React 18**: Desarrollo moderno con la popular biblioteca para construcción de interfaces.
- **TailwindCSS**: Framework de diseño que permite estilos altamente personalizables y de forma rápida.
- **GSAP y React Icons**: Para animaciones fluidas y uso de íconos vectoriales.
- **Eslint y Prettier**: Configuración para mantener un código limpio, legible y uniforme.
- **PostCSS y Autoprefixer**: Mejores prácticas de CSS con soporte para navegadores modernos.
- **HMR (Hot Module Replacement)**: Recarga instantánea de módulos para mejorar la productividad durante el desarrollo.

---

## 📁 Estructura del Proyecto

La estructura básica de archivos es la siguiente:

```plaintext
src/
├── components/        # Componentes reutilizables
├── pages/             # Páginas principales de la aplicación
├── hooks/             # Custom Hooks
├── styles/            # Estilos globales
├── App.jsx            # Componente raíz
├── main.jsx           # Entrada principal del proyecto
public/                # Archivos estáticos y recursos públicos
```

---

## ⚙️ Instalación

Sigue estos pasos para configurar el proyecto en tu máquina.

1. Asegúrate de tener instalado **Node.js** y **npm** en tu entorno.
    - Puedes descargarlo en [nodejs.org](https://nodejs.org/).

2. Clona el repositorio:

   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   ```

3. Accede al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

4. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

5. Inicia el servidor local de desarrollo:

   ```bash
   npm run dev
   ```

   Vite lanzará un servidor local en `http://localhost:3000`.

---

## 🌟 Scripts Disponibles

En este proyecto puedes usar los siguientes scripts:

- **`npm run dev`**: Inicia el entorno de desarrollo con HMR (Hot Module Replacement).
- **`npm run build`**: Genera los archivos optimizados para producción.
- **`npm run preview`**: Vista previa del build de producción.
- **`npm run lint`**: Revisa errores y advertencias en el código con ESLint.
- **`npm run format`**: Aplica la configuración de Prettier para formatear el código.

---

## 🛠️ Configuración Adicional

### ESLint y Prettier
El proyecto incluye configuraciones personalizadas para **ESLint** y **Prettier**, asegurando un código limpio y consistente. Puedes personalizarlas en los archivos `.eslintrc.js` y `.prettierrc`.

### TailwindCSS
Para modificar los estilos, edita el archivo `tailwind.config.js`, donde se pueden agregar configuraciones personalizadas para temas, colores, fuentes, entre otros.

### GSAP y React Icons
Se incluyen ejemplos básicos de animaciones con GSAP y el uso de íconos en React con la librería `react-icons`.

---

## 📚 Tecnologías y Paqueterías Utilizadas

| Tecnología           | Descripción                                               |
|----------------------|-----------------------------------------------------------|
| **React**            | Biblioteca para construir interfaces de usuario.          |
| **Vite**             | Herramienta rápida para compilación y desarrollo.         |
| **TailwindCSS**      | Framework de diseño CSS altamente personalizable.         |
| **GSAP**             | Biblioteca para crear animaciones fluidas y atractivas.   |
| **React Icons**      | Colección de íconos vectoriales para React.               |
| **ESLint y Prettier**| Herramientas para mantener código limpio y uniformado.    |

---

## 🎉 ¡Gracias!

Gracias por utilizar este proyecto como punto de partida para tus desarrollos. ¡Espero que disfrutes trabajando con él tanto como yo lo hice al configurarlo!
