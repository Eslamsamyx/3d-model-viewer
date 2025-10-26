# 3D Model Viewer

A browser-based 3D model viewer built with React, Vite, and Three.js using React Three Fiber.

## Features

- 🎨 Interactive 3D model viewing with orbit controls
- 📁 Browse multiple 3D models from a sidebar
- 🔍 Search functionality to filter models
- 🖼️ Reference images for models (where available)
- 🌐 Support for GLB/GLTF format models
- 💡 Professional lighting and shadows
- 📱 Responsive design with collapsible sidebar

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## Controls

- **Rotate**: Left-click and drag
- **Zoom**: Scroll wheel
- **Pan**: Right-click and drag

## Adding New Models

1. Place your GLB/GLTF model files in `public/models/[folder-name]/`
2. Add model configuration to `src/modelsConfig.js`:

```javascript
{
  id: 'unique-id',
  name: 'Display Name',
  path: '/models/folder-name/model-file.glb',
  image: '/models/folder-name/reference-image.jpg' // optional
}
```

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
