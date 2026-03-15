# AGENTS.md

## Proyecto
- Nombre de trabajo: `Presentacion Bankinter Retiro`
- Objetivo: construir una presentacion web en modo scrollytelling para contar el storyline del ultimo ano del proyecto Appian en Bankinter.
- Audiencia prevista: equipo mixto negocio + delivery + direccion. El tono debe ser ejecutivo, sobrio y con sensacion de progreso.

## Estado actual
- Repositorio creado desde cero en esta sesion.
- No hay `git` inicializado en el directorio.
- La primera version usa HTML/CSS/JS estatico y carga `reveal.js 5.2.1` desde CDN.
- Entorno macOS validado el `2026-03-14`:
  - `python3` esta disponible en `/usr/bin/python3`.
  - `playwright` para Python esta instalado.
  - Existe un navegador `Chromium` de Playwright ya descargado en `~/Library/Caches/ms-playwright/chromium-1208`.
  - Tambien existe `chromium_headless_shell` en `~/Library/Caches/ms-playwright/chromium_headless_shell-1208`.
  - `Microsoft Edge.app` esta disponible como fallback si el binario cacheado de Playwright deja de existir o falla.
- Entorno Windows validado el `2026-03-13`:
  - `node` y `npm` estan disponibles.
  - `git` esta instalado en `C:\Users\iminambr\AppData\Local\Programs\Git\cmd\git.exe`.
  - `python` `3.12` esta instalado en `C:\Users\iminambr\AppData\Local\Programs\Python\Python312\python.exe`.
  - `playwright` para Python esta instalado y validado con capturas locales de la presentacion usando el Chrome del sistema.
- En este Windows, la descarga de `Chromium` gestionada por `playwright install chromium` falla por certificados TLS corporativos (`unable to get local issuer certificate`).
- Por esa razon, en Windows no debe asumirse que `playwright` podra descargar su propio navegador; la opcion estable es reutilizar `Chrome` o `Edge` ya instalados.
- Tras instalar `git` o `python` con `winget`, algunas sesiones de terminal pueden seguir resolviendo los alias de `WindowsApps`; si ocurre, abrir una nueva terminal o usar las rutas completas anteriores.
- El proyecto ya dispone de identificadores visibles por slide (`S01`, `S02`, etc.) y de un fichero `GUION_PRESENTACION.md` para iterar narrativa y datos.
- `GUION_PRESENTACION.md` ya no debe usarse para contexto general: su funcion es ser el configurador exacto slide a slide, por componentes y texto visible.
- El proyecto dispone de una carpeta `imagenes/` para referencias visuales externas que luego se citan desde el guion.

## Decisiones de diseno tomadas
- Direccion visual inicial: fondo claro tipo marfil/calido, no negro.
- Motivo: Bankinter funciona mejor con acentos naranja sobre fondo claro, y para una historia anual de transformacion resulta mas limpio, mas ejecutivo y mas facil de imprimir/exportar.
- Ajuste posterior: se elimina el marco/caja principal de cada slide. El contenido queda directamente sobre el fondo para una sensacion mas full-screen y para reducir problemas de overflow.
- Acentos:
  - Primario: naranja Bankinter.
  - Secundario: azul NTT DATA.
  - Base: grafito, blanco roto y grises calidos.
- Branding:
  - Los logos de Bankinter y NTT DATA aparecen de forma sutil y fija en toda la experiencia.
  - El logo de NTT DATA debe ser el nuevo con `dynamic loop`, no el wordmark antiguo.
  - El asset actual de NTT DATA se ha reconstruido en local a partir del SVG oficial corporativo.
  - El logo de Bankinter se ha sustituido por un crop del wordmark oficial visible en la portada del Informe Anual Integrado 2024 de Bankinter.
- Formato:
  - `reveal.js` en `view: "scroll"`.
  - La narrativa mezcla slides de impacto, metricas, timeline trimestral y cierre.
  - Hay animaciones con `fragments`, `auto-animate` y animaciones CSS al entrar en viewport.

## Alcance de la demo actual
- Es una demo inspiracional, no una version final.
- Todos los datos son de relleno, pensados para que el layout y el relato sean creibles:
  - numero de procesos desarrollados por mes,
  - crecimiento del equipo,
  - nuevos directores incorporados,
  - industrializacion de la fabrica Appian.
- La historia esta estructurada como:
  1. Portada / tesis narrativa
  2. Resumen ejecutivo
  3. Evolucion mensual
  4. Q1
  5. Q2
  6. Q3
  7. Q4
  8. Expansion de stakeholders
  9. Crecimiento del equipo y modelo operativo
  10. Cierre

## Archivos clave
- `index.html`: estructura del deck.
- `styles.css`: identidad visual, layout, responsive y animaciones.
- `app.js`: inicializacion de `reveal.js`, rail de progreso y animaciones numericas.
- `GUION_PRESENTACION.md`: fuente de verdad editable para narrativa, datos y notas por slide.
- `imagenes/README.md`: carpeta para referencias visuales que el usuario quiera aportar.
- `assets/bankinter-wordmark-official.png`: wordmark de Bankinter extraido desde fuente oficial.
- `assets/bankinter-wordmark.svg`: wordmark provisional ya no usado.
- `assets/ntt-data-wordmark.svg`: logo con `dynamic loop`, basado en el SVG oficial de NTT DATA.

## Como ejecutar localmente
- Opcion simple en macOS:
  - `python3 -m http.server 8000`
  - abrir `http://127.0.0.1:8000`
- Opcion simple en Windows:
  - `python -m http.server 8000`
  - si `python` sigue apuntando al alias de Store, usar `C:\Users\iminambr\AppData\Local\Programs\Python\Python312\python.exe -m http.server 8000`
  - abrir `http://127.0.0.1:8000`
- No requiere build.

## Comprobacion visual
- macOS y Windows pueden validar el deck con navegador real en modo headless.
- En macOS, el flujo verificado es:
  - servir el proyecto en local,
  - abrirlo con `playwright` para Python,
  - preferir el `Chromium` cacheado de Playwright en `~/Library/Caches/ms-playwright/chromium-1208`,
  - usar `Microsoft Edge.app` solo como fallback si ese binario no esta disponible.
- En Windows, el flujo verificado es:
  - servir el proyecto en local,
  - abrirlo con `playwright` para Python,
  - lanzar `Chrome` del sistema mediante `executable_path`.
- Despues de cualquier cambio no trivial de layout, animacion o responsive, hacer comprobacion visual con capturas locales antes de dar la iteracion por buena.
- No asumir como requisito que exista `playwright` global por `npm` ni que `playwright install chromium` funcione en red corporativa.

## Criterios para siguientes iteraciones
- Sustituir los datos ficticios por datos reales del proyecto.
- Reescribir el guion para que cada slide tenga un mensaje ejecutivo claro.
- Decidir si el deck final mantiene fondo claro o incorpora una o dos secciones oscuras para crear contraste.
- Incorporar logos oficiales si el usuario los facilita.
- Valorar incluir:
  - capturas reales de Appian,
  - diagrama del operating model,
  - cifras de productividad o SLA,
  - testimonios o quotes de negocio,
  - cierre con roadmap 2026.

## Notas para futuras sesiones
- Mantener la base actual como prototipo navegable y editable.
- Evitar migrar a framework si no hay una necesidad clara.
- `node` ya esta disponible al menos en el Windows validado; aun asi, mantener el proyecto sin build mientras siga siendo suficiente.
- Si mas adelante se decide migrar a framework, la opcion natural sigue siendo `Vite` + dependencias locales.
- Si el usuario pide una variante oscura, hacerla como branch visual del CSS, no como reescritura total.
- Si se trabaja alternando Mac y Windows, priorizar instrucciones operativas que no dependan de:
  - rutas absolutas salvo cuando sean necesarias en Windows,
  - navegadores descargados por `playwright`, salvo el `Chromium` ya validado en este Mac mientras siga presente en cache,
  - paquetes globales de `npm` no verificados en ambas maquinas.
