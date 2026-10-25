# Auditoría de Testimonios

**Fecha de auditoría:** 25 de octubre de 2026
**Alcance:** Todos los testimonios publicados en el sitio ccadoram.com
**Archivo fuente:** `src/data/testimonies.ts`
**Componente que los renderiza:** `src/components/sections/TestimoniesSection.tsx`

> Este documento es solo de **auditoría y verificación**. No se modificó, eliminó ni reescribió ningún testimonio. Cada entrada requiere confirmación del propietario del sitio antes de considerarse apta para publicación continuada.

---

## Cómo se muestran los testimonios

El componente `TestimoniesSection.tsx` (líneas 21–66) renderiza, por cada testimonio: el campo `name` **tal cual está almacenado** (sin truncar adicionalmente — ya viene pre-redactado en el dato como "Nombre + Inicial"), el `role`, los `yearsInChurch`, el `highlight` (frase destacada) y el `excerpt` (texto completo). El avatar circular muestra solo `name.charAt(0)` (la primera letra). El campo `fullText` existe en el tipo `Testimony` pero **nunca se usa** en ningún testimonio ni se renderiza — campo muerto.

---

## Testimonios encontrados (4)

### test-001
- **Nombre mostrado:** "Laura M."
- **Rol:** Miembro · 3 años en la iglesia
- **Frase destacada:** "Encontré restauración cuando más la necesitaba"
- **Texto:** "Llegué a Adoram en uno de los momentos más oscuros de mi vida. No sabía que vendría a encontrarme con un Dios que me conocía por nombre y tenía un plan para mí."
- **Tipo de afirmación inferido:** Experiencia general / restauración personal
- **Avatar:** vacío (sin foto)
- **Estado:** **Requiere confirmación del propietario**

### test-002
- **Nombre mostrado:** "Roberto & Carmen S."
- **Rol:** Matrimonio · 5 años en la iglesia
- **Frase destacada:** "Dios restauró nuestro matrimonio"
- **Texto:** "Nuestro matrimonio estaba en crisis. A través de la comunidad de Adoram, encontramos consejería bíblica, oración y hermanos que creyeron en nosotros. Hoy tenemos un matrimonio completamente renovado."
- **Tipo de afirmación inferido:** Matrimonio / consejería / restauración
- **Avatar:** vacío (sin foto)
- **Estado:** **Requiere confirmación del propietario**
- **Nota adicional:** Es el testimonio con el tema más sensible del conjunto (crisis matrimonial). Recomendamos especialmente conservar autorización escrita para este caso.

### test-003
- **Nombre mostrado:** "Miguel A."
- **Rol:** Joven · 2 años en la iglesia
- **Frase destacada:** "Me encontró donde estaba sin juzgarme"
- **Texto:** "Vine por primera vez porque un amigo me invitó. Pensé que no era 'para mí'. Pero desde el primer servicio sentí algo diferente, una calidez genuina y una presencia que no podía explicar."
- **Tipo de afirmación inferido:** Experiencia general de primera visita / juventud
- **Avatar:** vacío (sin foto)
- **Estado:** **Requiere confirmación del propietario**

### test-004
- **Nombre mostrado:** "Esperanza R."
- **Rol:** Abuela de la congregación · 8 años en la iglesia
- **Frase destacada:** "Nunca es demasiado tarde para comenzar"
- **Texto:** "A mis 67 años, pensaba que era demasiado tarde para cambiar. Adoram me enseñó que para Dios nunca es tarde. Hoy sirvo en el ministerio de intercesión con más fuego que cuando tenía 30."
- **Tipo de afirmación inferido:** Experiencia general / edad / ministerio de intercesión
- **Avatar:** vacío (sin foto)
- **Estado:** **Requiere confirmación del propietario**

---

## Observaciones generales

1. **Patrón de redacción uniforme.** Los cuatro nombres siguen el mismo patrón "Nombre + Inicial del apellido" (o, en el caso de la pareja, "Nombre & Nombre + Inicial compartida"). Esto es consistente con una redacción deliberada para proteger la identidad, pero **no podemos confirmar desde el código si corresponde a personas reales que autorizaron esta versión abreviada**, o si es contenido de ejemplo/plantilla creado al construir el sitio.
2. **Ningún avatar tiene foto** (los cuatro campos `avatar` están vacíos). Esto podría ser diseño intencional (privacidad) o simplemente contenido sin terminar.
3. **Cobertura temática "a propósito".** Los cuatro testimonios cubren categorías distintas (restauración general, matrimonio, juventud/primera visita, adulto mayor/ministerio) — un patrón que también es común en contenido de ejemplo creado para mostrar variedad, no necesariamente evidencia de que sean o no reales.
4. **Riesgo de identificación indirecta.** En una congregación de tamaño mediano/pequeño, combinaciones como "Roberto & Carmen S., matrimonio, 5 años" o "Esperanza R., 67 años, ministerio de intercesión" pueden ser suficientes para que otros miembros identifiquen a la persona, incluso sin el apellido completo. Esto aplica especialmente al testimonio de crisis matrimonial (test-002).

## Recomendación

Antes de mantener estos testimonios publicados de forma indefinida, el propietario del sitio debería confirmar, para cada uno:

- [ ] La persona (o pareja) existe realmente y el relato corresponde a su experiencia.
- [ ] Existe autorización, preferiblemente por escrito, para publicar el testimonio en este formato (nombre abreviado + rol + años + texto).
- [ ] La persona aprobó la versión específica del texto que está publicada (no una paráfrasis posterior).
- [ ] Si alguno de los cuatro es contenido de ejemplo/plantilla (no una experiencia real), debe reemplazarse por un testimonio real autorizado o retirarse, en vez de presentarse como una experiencia genuina.

No se recomienda tomar ninguna acción automática (editar, anonimizar más, o eliminar) sin esta confirmación, ya que podría tanto borrar contenido legítimo y autorizado como mantener contenido sin autorización — ambos escenarios requieren una decisión humana, no una inferencia de código.
