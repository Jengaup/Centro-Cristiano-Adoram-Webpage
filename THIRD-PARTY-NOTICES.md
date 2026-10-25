# Avisos de Terceros: Imágenes, Fuentes, Contenido y Dependencias

**Fecha de auditoría:** 25 de octubre de 2026

> Este documento incluye únicamente licencias o permisos que pueden confirmarse desde el código o metadatos disponibles. Todo lo demás se marca explícitamente como "requiere verificación del propietario". No se eliminó ningún contenido por falta de documentación.

---

## 1. Imágenes en `public/`

| Archivo | Tamaño | Uso | Origen aparente | Licencia/permiso |
|---|---|---|---|---|
| `logo.png` | 393,541 B | Logotipo de la iglesia (Navbar, Footer) | Activo propio de la marca de Centro Cristiano Adoram | **Requiere verificación del propietario** (asumimos propiedad de la iglesia, pero no hay documentación en el repo que lo confirme formalmente) |
| `pastores.jpeg` | 172,144 B | Foto de los Apóstoles en `PastorWelcome.tsx` | Fotografía aparentemente real, subida directamente por la iglesia (nombre de archivo descriptivo) | **Requiere verificación del propietario**: confirmar que todas las personas que aparecen en la foto autorizaron su publicación |
| `Pasadia.jpeg` | 242,241 B | Flyer del evento "Pasadía: Verano Familiar Adoram 2026" | Material promocional aparentemente creado/subido por la iglesia | **Requiere verificación del propietario** sobre autoría del diseño gráfico y de las personas que aparecen en las fotos del flyer |
| `atardecer-valle.jpeg` | 282,584 B | Flyer del evento "Un Atardecer en el Valle con Jesús" | Igual que arriba | **Requiere verificación del propietario** |
| `conferencia-matrimonios.jpeg` | 163,119 B | Flyer de la Conferencia de Matrimonios | Igual que arriba | **Requiere verificación del propietario** |
| `congreso-mujeres.jpeg` | 441,962 B | Flyer del Congreso de Mujeres | Igual que arriba | **Requiere verificación del propietario** |
| `dia-de-clamor.jpeg` | 163,813 B | Flyer del Día de Clamor en Camuy | Igual que arriba | **Requiere verificación del propietario** |

**Conclusión:** No se encontró evidencia de imágenes de banco de imágenes (*stock*) ni de CDNs externos de fotografía en el código — todas las imágenes del sitio son archivos propios alojados en `public/`. Esto es una buena práctica de privacidad (no hay llamadas a servicios externos de imágenes), pero **no podemos verificar desde el código si cada fotografía (especialmente las que incluyen personas identificables, como `pastores.jpeg` y los flyers de eventos) cuenta con la autorización correspondiente de cada persona que aparece**. Se recomienda al propietario mantener un registro simple de autorización por cada fotografía con personas reconocibles.

---

## 2. Fuentes tipográficas

| Fuente | Fuente de origen | Mecanismo de carga | Licencia |
|---|---|---|---|
| Inter | Google Fonts | `next/font/google` — **descargada y auto-alojada en build time**, no hay petición en tiempo real a Google | Open Font License (OFL) — licencia libre estándar de Google Fonts, verificable públicamente |
| Playfair Display | Google Fonts | Igual que arriba | Open Font License (OFL) |

Ambas fuentes usan licencias abiertas y de uso libre bien documentadas por Google Fonts; no requieren atribución ni representan riesgo de licenciamiento.

---

## 3. Contenido de marcador de posición / no apto para producción (identificado, no modificado)

Durante la auditoría se encontró contenido que es claramente una plantilla sin completar, no una fabricación nuestra:

- **`src/data/sermons.ts`**: los cuatro registros de predicaciones usan literalmente `"Pastor(a) Nombre Apellido"` e `"Inv. Nombre Apellido"` como nombre del predicador, y los cuatro reutilizan el mismo ID de video de YouTube `dQw4w9WgXcQ` (el video "Never Gonna Give You Up" de Rick Astley) como miniatura/enlace de marcador de posición. **Este archivo no se modificó** porque no nos corresponde inventar predicaciones reales. Nota importante: el componente que lo consume (`SermonsSection.tsx`) **no se renderiza actualmente en ninguna página del sitio**, por lo que este contenido de plantilla no es visible al público mientras permanezca así.
- **`src/data/config.ts`**: `youtubeConfig.channelId: "UCxxxxxxxxxxxxxxxxxxxxxxxx"` es un ID de canal de marcador de posición, nunca reemplazado por el ID real del canal de YouTube.
- **`src/data/users.ts`**: los cuatro usuarios del panel admin (`admin@adoram.iglesia`, `maria@adoram.iglesia`, etc.) son datos de prueba/demo con un dominio de correo (`adoram.iglesia`) distinto al correo público real de la iglesia (`adoramlares@gmail.com`). Confirmamos que son fixtures de desarrollo, no credenciales reales expuestas.

**Recomendación:** si en el futuro se activa la sección de predicaciones (`SermonsSection`) en la página pública, el contenido de `sermons.ts` debe reemplazarse por predicaciones y nombres reales antes de publicarse — no debe salir a producción con el contenido de plantilla actual.

---

## 4. Dependencias de software (`package.json`)

El proyecto usa únicamente dependencias de código abierto de uso estándar en el ecosistema React/Next.js, todas con licencias permisivas (MIT la gran mayoría):

- `next` (MIT), `react` / `react-dom` (MIT), `lucide-react` (ISC — íconos), `clsx` (MIT), `tailwind-merge` (MIT)
- Dev: `typescript` (Apache-2.0), `tailwindcss` (MIT), `@tailwindcss/typography` (MIT), `autoprefixer`/`postcss` (MIT)

No se identificaron dependencias con licencias restrictivas o incompatibles con un sitio institucional. No se instaló ninguna dependencia nueva como parte de esta auditoría (ver informe final para las herramientas usadas solo para verificación, no añadidas al proyecto).
