# 🍯 HoneyMetrics Frontend SPA (v2.0)

Single Page Application (SPA) para visualización interactiva de **Cyber Threat Intelligence (CTI)** construida con **React 18**, **Vite** y el compilador **SWC (Rust)**.

> 📖 **¿Eres nuevo en el proyecto o acabas de clonarlo?**  
> Lee nuestra **[Guía de Primeros Pasos](./docs/primeros_pasos.md)** para empezar a programar en 5 minutos.

---

## 🚀 Inicio Rápido con Docker

### 1. Clonar el repositorio
```bash
git clone git@github.com:johanP051/honeymetrics-frontend.git
cd honeymetrics-frontend
```

### 2. Ejecutar en Modo Desarrollo (Live Reload + Fast Refresh)
```bash
docker compose up --build
```
* 🌐 **Aplicación Web:** [http://localhost:5173](http://localhost:5173)

> 💡 **Modo Mock Offline:** Puedes programar toda la UI sin necesidad de tener el backend corriendo. Si la API no responde, la aplicación entra automáticamente en modo Mock sin fallar.

---

## 🏛️ Estructura del Proyecto

```
honeymetrics-frontend/
├── public/               # Iconos y archivos estáticos
├── src/                  # Código fuente de React
│   ├── api/              # Cliente Axios y llamadas a endpoints REST
│   ├── components/       # Componentes UI organizados por dominio
│   │   ├── layout/       # Barras de navegación y banners globales
│   │   └── threats/      # Tarjetas de Threat Score y alertas CIDR
│   ├── context/          # Estado global de la aplicación (Auth)
│   ├── hooks/            # Custom Hooks (useThreats con fallback Mock)
│   ├── mocks/            # Datos simulados basados en 165k logs reales
│   ├── pages/            # Vistas principales del dashboard
│   ├── utils/            # Funciones de formateo y helpers
│   ├── App.jsx           # Componente raíz
│   └── main.jsx          # Punto de entrada ReactDOM
├── docs/                 # Guías de desarrollo y primeros pasos
├── Dockerfile            # Multi-stage: Dev (Node) / Prod (Nginx)
├── docker-compose.yml    # Base común de Docker
├── docker-compose.override.yml # Configuración de desarrollo local
├── docker-compose.prod.yml     # Configuración de producción con Nginx
├── nginx.conf            # Configuración de Nginx para SPA
└── vite.config.js        # Configuración de Vite con compilador SWC
```

---

## 🚀 Modo Producción / Servidor Nginx Local

Para compilar los estáticos optimizados y servirlos mediante Nginx:
```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```
* 🌐 [http://localhost:8080](http://localhost:8080)

---

## 📚 Enlaces Útiles
* 📘 [Guía de Primeros Pasos y Flujo de Trabajo](./docs/primeros_pasos.md)
* 🦀 [Documentación de Vite + SWC](https://github.com/vitejs/vite-plugin-react-swc)
* 🌐 [Repositorio Backend](https://github.com/johanP051/honeymetrics-backend)
