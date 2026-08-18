# 🍯 HoneyMetrics Frontend SPA (v2.0)

Single Page Application (SPA) para visualización interactiva de **Cyber Threat Intelligence (CTI)** construida con **React + Vite**.

---

## 🏛️ Arquitectura y Patrones de Diseño
* **Framework:** React 18 + Vite con compilador **SWC** (Rust).
* **Consumo de API:** Axios con **Mock Fallback automático** (`src/mocks/` y `src/hooks/useThreats.js`).
* **Desacoplamiento Estricto:** Si el backend está caído, la UI entra en modo *Mock Offline* sin romperse.
* **Componentes Atómicos:** Componentes en `src/components/` puramente presentacionales sin peticiones acopladas.
* **Tipografía y Estilos:** CSS Variables, Google Fonts (*Plus Jakarta Sans* y *JetBrains Mono*), diseño de alto contraste Dark Cybersecurity.

---

## 🚀 Inicio Rápido en Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo con Live Reload:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   `http://localhost:5173`
