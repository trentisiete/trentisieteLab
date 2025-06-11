# Portfolio Personal - Jose Arbelaez

Portfolio web personal moderno y responsive construido con Next.js, React y Tailwind CSS.

## Características

- 🎨 Diseño moderno y profesional
- 📱 Totalmente responsive
- ⚡ Optimizado para rendimiento
- 🎭 Animaciones suaves con Framer Motion
- 🎯 SEO optimizado
- 🌐 Internacionalización (Español)

## Tecnologías Utilizadas

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Requisitos Previos

- Node.js 18.0.0 o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd jose-arbelaez-portfolio
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── Timeline.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── public/
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Personalización

1. Modifica los datos en los componentes correspondientes
2. Ajusta los colores en `tailwind.config.js`
3. Personaliza las animaciones en los componentes

## Construcción para Producción

```bash
npm run build
# o
yarn build
```

## Licencia

MIT 