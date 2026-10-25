# Verificación de Contenido Institucional

**Fecha de auditoría:** 25 de octubre de 2026

> Este documento lista cada inconsistencia o dato encontrado durante la auditoría que requiere confirmación del propietario. **No se corrigió ningún dato de esta lista** (nombres, direcciones, teléfonos, horarios) — solo se documenta, tal como se solicitó, para que el propietario decida cuál es correcto.

---

## 1. Conflicto: apellido de la Apóstol Wendy

- **Dato consistente en la mayoría del sitio:** "Wendy **Ortiz**"
  - `src/data/config.ts` (`siteConfig.pastorName`): "Apóstol Juan Alberto Martínez & Apóstol Wendy **Ortiz**"
  - `src/i18n/dictionaries/es.ts` (`pastor.signature`): "Apóstoles Juan Alberto Martínez & Wendy **Ortiz**"
  - `src/data/events.ts` (evento "Día de Clamor en Camuy"): "los Apóstoles Juan Alberto Martínez y Wendy **Ortiz**"
  - `src/data/events.ts` (evento "Un Atardecer en el Valle con Jesús"): "Juan A. Martínez y Wendy **Ortiz**"
- **Dato en conflicto:** "Wendy **Martínez**"
  - `src/data/events.ts` (evento "Congreso de Mujeres"): "Anfitriones: Apóstoles Juan y Wendy **Martínez**" (en inglés también: "Apostles Juan and Wendy **Martínez**")
- **Acción recomendada:** Confirmar si el apellido correcto es "Ortiz" (como aparece en 3 de 4 lugares, incluida la configuración central del sitio) y corregir la entrada del Congreso de Mujeres en `src/data/events.ts`.

## 2. Conflicto: apellido del Pastor invitado Misael

- `src/data/events.ts` (evento "Congreso de Mujeres"): "Pastores Misael **Mejías** y Ángela Peña"
- `src/data/events.ts` (evento "Conferencia de Matrimonios"): "Pastor Misael **Mejía**"
- **Acción recomendada:** Confirmar la ortografía correcta del apellido ("Mejía" o "Mejías") y unificarla en ambos eventos, asumiendo que se trata de la misma persona.

## 3. Números de teléfono adicionales no documentados en `siteConfig`

El teléfono oficial de la iglesia en `siteConfig.phone` es `787-379-8296`. Se encontraron otros números asociados a personas específicas en eventos, que no están registrados en ningún lugar central:

| Número | Contexto | Archivo |
|---|---|---|
| `787-312-9765` | Segundo número de contacto, Congreso de Mujeres (junto al oficial) | `src/data/events.ts` |
| `(939) 459-3451` | Teléfono personal de "Richard Rodríguez", coordinador del Día de Clamor | `src/data/events.ts` |
| `(787) 646-9932` | Número de registro, evento "Un Atardecer en el Valle con Jesús" (sin nombre de coordinador asociado) | `src/data/events.ts` |

**Acción recomendada:** Confirmar que cada coordinador/persona autorizó la publicación de su número personal en el sitio público.

## 4. Tercera identidad pastoral sin referencia cruzada

`src/data/devotionals.ts` usa `authorName: "Pastor Jose Alberto Jimenez"` como autor de los 5 devocionales publicados (líneas 95, 175, 255, 335, 414). Este nombre:
- No aparece en `siteConfig` (que solo define a los Apóstoles Juan Alberto Martínez y Wendy Ortiz como liderazgo).
- No tiene tildes ("Jose", "Jimenez"), a diferencia del resto del contenido en español del sitio, que sí usa acentuación correcta de forma consistente.

**Acción recomendada:** Confirmar que "Pastor José Alberto Jiménez" es una persona real con rol legítimo de escribir devocionales (por ejemplo, un pastor asociado o colaborador), y considerar corregir la acentuación del nombre si así se confirma.

## 5. Dominio del sitio desactualizado (corregido en esta auditoría)

`src/data/config.ts` tenía `url: "https://adoram.iglesia"`, que **no coincide** con el dominio real desplegado (`ccadoram.com`, confirmado por `public/CNAME`). Este campo no es doctrinal, pastoral, ni un dato de contacto/dirección/horario — es un valor técnico de configuración usado para construir URLs de SEO (sitemap, hreflang). **Se corrigió directamente** a `https://ccadoram.com`, y se documenta aquí por transparencia. Si existe alguna razón para mantener `adoram.iglesia` (por ejemplo, un dominio adicional en uso), avísanos para revertir el cambio.

## 6. Contenido de plantilla sin completar (ver también `THIRD-PARTY-NOTICES.md`)

- `src/data/sermons.ts`: nombres de predicador literalmente sin rellenar (`"Pastor(a) Nombre Apellido"`), y las cuatro miniaturas de video usan el mismo ID de YouTube de marcador de posición. Este componente no se muestra actualmente en el sitio público, pero debe corregirse antes de activarlo.
- `src/data/config.ts`: `youtubeConfig.channelId` tiene un valor de marcador de posición (`"UCxxxxxxxxxxxxxxxxxxxxxxxx"`), no el ID real del canal.

## 7. Texto de marcador de posición ya obsoleto en los diccionarios (sin corregir, informativo)

`src/i18n/dictionaries/es.ts` y `en.ts` conservan las claves `pastor.photoPlaceholder` / `photoPlaceholderSub` ("Foto de los Apóstoles" / "Actualiza con foto real"), aunque ya existe una foto real (`pastores.jpeg`) en uso en `PastorWelcome.tsx`. No se encontró ningún lugar del código donde estas claves se rendericen actualmente (parecen no utilizarse), así que no representan un problema visible, pero quedan como texto muerto en los diccionarios. No se eliminaron en esta auditoría para evitar tocar contenido fuera del alcance solicitado.

---

## Resumen de acciones tomadas vs. pendientes

| # | Hallazgo | Acción tomada |
|---|---|---|
| 1 | Wendy Martínez vs. Ortiz | **Documentado, no corregido** — pendiente de tu confirmación |
| 2 | Misael Mejía vs. Mejías | **Documentado, no corregido** — pendiente de tu confirmación |
| 3 | Teléfonos personales no centralizados | **Documentado, no corregido** — pendiente de confirmar autorización |
| 4 | Pastor José Alberto Jiménez sin referencia cruzada | **Documentado, no corregido** — pendiente de confirmar rol |
| 5 | Dominio `siteConfig.url` desactualizado | **Corregido** (campo técnico, no institucional/pastoral) |
| 6 | `sermons.ts` con contenido de plantilla | **Documentado, no corregido** — componente inactivo actualmente |
| 7 | Claves de diccionario muertas sobre foto placeholder | **Documentado, no corregido** — sin impacto visible |
