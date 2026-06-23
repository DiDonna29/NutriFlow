# NutriFlow - Professional Wellness Dashboard

NutriFlow es una aplicación de seguimiento nutricional de alto rendimiento diseñada para una experiencia de usuario (UX) fluida, estética y profesional. Implementa principios de "Anti-Slop Frontend" para garantizar una interfaz limpia, tipografía precisa y animaciones optimizadas.

## 🚀 Propósito de la Aplicación

La aplicación permite a los usuarios gestionar su estructura diaria de comidas de forma intuitiva, calculando macros en tiempo real y persistiendo los datos localmente. Está diseñada para entusiastas del fitness y la salud que buscan una herramienta rápida y visualmente atractiva sin las fricciones de aplicaciones complejas.

## 🛠️ Tecnologías y Arquitectura

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **UI & Estilos**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Gestión de Estado**: React Hooks (`useState`, `useEffect`) + Context API para Temas e i18n.
- **Persistencia**: `localStorage` (Sincronización automática de datos del usuario).
- **Animaciones**: [Lucide React](https://lucide.dev/) + CSS Keyframes personalizados para revelación progresiva.

## 📦 Instalación y Ejecución

La aplicación es totalmente compatible con `npm`, `yarn` y `pnpm`.

### Prerrequisitos
- Node.js 18+ instalado.

### Pasos
1. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

3. Construir para producción:
   ```bash
   npm run build
   npm start
   ```

## 🧠 Lógica de la Aplicación

1. **i18n Dinámico**: Un diccionario local (`translations.ts`) alimenta un Context Provider que permite cambiar el idioma en toda la app sin recargar la página.
2. **Sistema de Temas**: Soporte nativo para Modo Claro y Oscuro con variables CSS dinámicas basadas en HSL.
3. **Control de Desbordamiento (Overflow)**: Implementación de contenedores flexibles con `min-w-0` y `truncate` para asegurar que los datos numéricos y nombres largos se mantengan dentro de sus límites en cualquier resolución.
4. **Persistencia Silenciosa**: Un `useEffect` monitorea cambios en el estado de las comidas y los sincroniza con el disco local de forma optimista.

## 🔮 Futuro Escalable

NutriFlow está estructurada para evolucionar hacia un ecosistema más robusto:

- **Sincronización en la Nube**: Integración con Firebase Firestore para almacenamiento multi-dispositivo.
- **IA Nutricional**: Implementación de Genkit para analizar fotos de platos y extraer macros automáticamente.
- **Gamificación**: Dashboard de progreso semanal con gráficos de `recharts`.
- **Drag & Drop**: Capacidad de mover alimentos entre diferentes momentos del día (Desayuno -> Cena) para ajustes rápidos.
- **Exportación de Datos**: Generación de reportes PDF o CSV para compartir con nutricionistas.

---
*Desarrollado con pasión por la excelencia técnica y visual.*