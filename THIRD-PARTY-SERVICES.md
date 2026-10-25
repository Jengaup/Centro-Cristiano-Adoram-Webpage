# Auditoría de Terceros, Cookies y Almacenamiento

**Fecha de auditoría:** 25 de octubre de 2026
**Método:** Revisión exhaustiva de código fuente (`grep` de `localStorage`, `sessionStorage`, `document.cookie`, `gtag`, `analytics`, `pixel`, `dataLayer`, `<Script`, y de cada dominio externo referenciado en `src/`).

---

## 1. Cookies, analítica y rastreo — conclusión

**El sitio no usa cookies, no tiene analítica de ningún tipo, no tiene píxeles de rastreo y no persiste datos del usuario en `localStorage` ni `sessionStorage`.** Se confirmó por grep exhaustivo en todo `src/`: cero coincidencias de `localStorage`, `sessionStorage`, `document.cookie`, `gtag`, `analytics`, `pixel`, `dataLayer`, o scripts de Cloudflare cargados en el cliente.

**Decisión: no se implementa un banner de cookies**, porque no hay cookies ni rastreadores no esenciales que requieran consentimiento previo. Añadir uno sería una fricción innecesaria sin justificación técnica real — exactamente lo que se nos pidió evitar.

Los únicos usos de APIs del navegador relacionados con estado son locales y no persistentes:
- `src/components/ui/ShareButton.tsx` — Web Share API nativa / portapapeles, no se guarda nada.
- `src/components/ui/DevotionalReader.tsx` — Síntesis de voz del navegador (`window.speechSynthesis`), no se guarda nada.
- `src/components/layout/Navbar.tsx` — estado de scroll/menú en memoria de React, se pierde al recargar.
- El formulario de petición de oración (`PrayerRequestSection.tsx`) mantiene los datos **solo en memoria de React** mientras la pestaña está abierta; nunca se escriben a `localStorage`/`sessionStorage`.

---

## 2. Proveedores externos identificados

| Proveedor | Propósito | Dónde se usa | Cuándo se activa | Datos que potencialmente recibe | Esencial / Opcional | Recomendación |
|---|---|---|---|---|---|---|
| **FormSubmit** (formsubmit.co) | Procesa técnicamente el envío del formulario de petición de oración hasta una cuenta de correo | `src/components/sections/PrayerRequestSection.tsx` | Solo al enviar el formulario de oración | Nombre, email (opcional), teléfono (opcional), texto de la petición, preferencia de privacidad | **Esencial** para la funcionalidad actual del formulario | Mantener. Documentado en la Política de Privacidad. Ver [formsubmit.co](https://formsubmit.co) para sus propias prácticas. |
| **Gmail / Google** | Recepción final del correo con la petición de oración (`adoramlares@gmail.com`) | Destino del POST de FormSubmit | Cada envío exitoso del formulario | El mismo contenido que recibe FormSubmit | **Esencial** (es la bandeja real del equipo pastoral) | Mantener. Sujeto a la política de privacidad de Google una vez el mensaje llega ahí. |
| **Cloudflare** | DNS/CDN para el dominio personalizado `ccadoram.com` (confirmado por `public/CNAME`) | Infraestructura de entrega, no código de la app | Siempre que se visita el sitio | Metadatos de red estándar de cualquier CDN (IP, user-agent) — no el contenido del formulario | **Esencial** para el dominio personalizado | Mantener. Es infraestructura de entrega, no recibe el contenido de peticiones de oración. |
| **GitHub Pages** | Alojamiento estático del sitio exportado | `.github/workflows/deploy.yml`, `output: "export"` | Siempre que se visita el sitio | Igual que cualquier hosting estático | **Esencial** | Mantener. |
| **YouTube** | Enlaces y (código existente, no usado en home) *embed* del canal | `src/data/config.ts` (enlaces), `src/lib/youtube.ts` + `YouTubeLiveSection.tsx`/`SermonsSection.tsx` (no renderizados actualmente en la página de inicio) | Al hacer clic en un enlace, o si se habilitara el *embed* | Si se usa el *embed*, YouTube puede aplicar sus propias prácticas al cargar el reproductor | Opcional (enlaces) / el *embed* está en código pero inactivo | Mantener enlaces. Si se activa el *embed* en el futuro, revisar si conviene usar modo "youtube-nocookie.com" para reducir datos antes de cargar el reproductor. |
| **Facebook** | Enlace a la página de la iglesia | `src/data/config.ts` → `Footer.tsx` | Solo al hacer clic | Ninguno desde este sitio; Facebook aplica sus propias prácticas al llegar | Opcional | Mantener. |
| **Instagram** | Enlace al perfil de la iglesia | `src/data/config.ts` → `Footer.tsx` | Solo al hacer clic | Ninguno desde este sitio | Opcional | Mantener. |
| **WhatsApp** (wa.me) | Enlace directo para escribir a la iglesia | `src/data/config.ts` → `Footer.tsx`, `QuickAccess.tsx`, `PlanVisitSection.tsx`, `visitar/page.tsx`, y ahora también como alternativa en el error del formulario de oración | Solo al hacer clic | Ninguno desde este sitio | Opcional (pero ahora también sirve como alternativa de contacto si el formulario falla) | Mantener. |
| **Google Maps** (maps.app.goo.gl) | Enlaces a la ubicación de Lares y Bayamón | `src/data/config.ts` → `Footer.tsx`, `visitar/page.tsx` | Solo al hacer clic | Ninguno desde este sitio | Opcional | Mantener. |
| **Zoom** (us02web.zoom.us) | Enlace a reuniones recurrentes (Oración/Intercesión, Estudios Bíblicos) | `src/data/events.ts` (`ZOOM_URL`) → `MonthCalendar.tsx` | Solo al hacer clic | Ninguno desde este sitio; Zoom aplica sus propias prácticas | Opcional, pero **ver riesgo de seguridad abajo** | **Ver sección 3 — riesgo a decidir por el propietario.** |
| **Google Forms** (forms.gle) | Registro externo para el Congreso de Mujeres | `src/data/events.ts` | Solo al hacer clic | Ninguno desde este sitio | Opcional | Mantener. |
| **Google Fonts** (Inter, Playfair Display) | Tipografías | `src/app/layout.tsx` vía `next/font/google` | En build time, no en tiempo real | **Ninguno** — `next/font` descarga y auto-aloja las fuentes en el build; no hay petición en vivo a Google al cargar el sitio | Esencial (diseño) | Mantener. Ya es la opción más privada (auto-alojada). |

---

## 3. Riesgo de seguridad identificado (no corregido — requiere decisión del propietario)

**El enlace de Zoom usado para los servicios semanales (Oración/Intercesión lunes 5am, Estudios Bíblicos martes, Servicio de Oración viernes) incluye la contraseña de la reunión en texto plano, directamente en el código fuente público del sitio** (`src/data/events.ts`, constante `ZOOM_URL`):

```
https://us02web.zoom.us/j/85293924829?pwd=KCeqASTEdyT1r17rJLuqa9tAhbaREH.1
```

Esto significa que cualquier persona (no solo los miembros) puede ver el ID de reunión y la contraseña simplemente inspeccionando el código del sitio o el archivo JavaScript publicado, sin necesidad de visitar la página. **No modificamos este enlace** porque es una decisión operativa de la iglesia (cómo gestionan el acceso a sus reuniones de Zoom), no un error de código a corregir unilateralmente. Opciones a considerar por el propietario:

- Activar "sala de espera" en la configuración de Zoom y admitir manualmente, sin depender de la contraseña como única barrera.
- Rotar el ID/contraseña de reunión periódicamente.
- Aceptar el riesgo actual como parte de hacer las reuniones fácilmente accesibles al público (puede ser intencional, si las reuniones son abiertas a cualquiera).

---

## 4. Panel de administración (`/admin`) — nota de seguridad relacionada

El panel `/admin` (bloqueado en `robots.txt` y marcado `noindex`) **no tiene autenticación real**: `src/data/users.ts` siempre devuelve un usuario mock (`getMockCurrentUser()` = `super_admin`) sin verificación de sesión ni credenciales. Cualquier persona que navegue directamente a `/es/admin` o `/en/admin` accede con privilegios de administrador. Esto es consistente con `output: "export"` (sitio estático, sin backend) y aparenta ser una demo/plantilla. **No se intentó construir autenticación real** porque requeriría infraestructura de servidor incompatible con la arquitectura estática actual — está fuera del alcance de este cambio, pero se documenta aquí como un riesgo real si el panel se usa en producción con datos sensibles.
