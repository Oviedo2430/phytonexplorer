# Python Explorer — Contexto del proyecto

## Qué es esto
Plataforma web para que un niño de 12 años aprenda Python.
Perfil: rasgos Asperger, autoaprendizaje, intereses en Minecraft, espacio y Lego.

## Stack
- React 18 + Vite + React Router
- Monaco Editor para editar código en el browser
- Piston API para ejecutar Python (https://emkc.org/api/v2/piston en dev)
- CSS variables puras, sin Tailwind
- localStorage para progreso del usuario
- Deploy: Docker + Nginx en Easypanel (VPS)

## Estructura
src/components/  → CodeEditor.jsx, ProgressBar.jsx
src/pages/       → MapPage.jsx, MissionPage.jsx, ResourcesPage.jsx
src/hooks/       → useProgress.js, usePython.js
src/data/        → missions.js (fuente de verdad del curso)
src/styles/      → globals.css

## Principios
- Instrucciones sin ambigüedad
- Progreso visual claro siempre
- Temática espacial / Minecraft
- Mobile-first

## Comandos
npm install
npm run dev      → http://localhost:3000
npm run build

## Pendiente
- Piston self-hosted en Easypanel
- Soporte stdin interactivo (input())
- Animaciones de celebración al completar misión
- Subdominio en VPS
