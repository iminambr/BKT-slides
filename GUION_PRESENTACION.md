# Guion de la presentacion

Este fichero es el configurador exacto slide a slide. Cualquier texto visible, numero, etiqueta o referencia visual debe editarse aqui.

## S01 · Portada

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Bankinter · Appian · Storyline 2025`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: centro izquierda
- Texto exacto: `Bankinter Appian`

#### C03 · Bajada principal
- Tipo: bajada
- Posicion: debajo del titular
- Texto exacto: `De Iniciativa estable en RPA, a combinar RPA, Appian, IA y temas de gestión en transformación de procesos.`


#### C05 · Metrica 1
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `+15`
- Etiqueta exacta: `procesos Appian desplegados`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `+0` hasta el valor final.

#### C06 · Metrica 2
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `+2`
- Etiqueta exacta: `nuevos directores implicados`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `+0` hasta el valor final.

#### C07 · Metrica 3
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `+15`
- Etiqueta exacta: `crecimiento del equipo`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `+0` hasta el valor final.

#### C08 · Boton de pantalla completa
- Tipo: boton
- Posicion: parte superior izquierda, junto a logos
- Texto exacto: `Pantalla completa`

#### C09 · Panel derecho kicker
- Tipo: kicker
- Posicion: panel derecho
- Texto exacto: Incluir aqui en todo su tamaño la imagen 'imagenes\chica_tarjeta.png'


## S02 · Timeline secuencial

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto: reinterpretar el borrador de timeline aportado en chat como una secuencia Reveal que se lee como un unico recorrido ejecutivo, con un eje horizontal real y tarjetas de detalle alrededor del quarter activo.

### Comportamiento
- La `S02` se compone de 5 estados full-screen visualmente continuos.
- Al avanzar con flecha abajo o scroll debe recorrerse, en este orden: `2024 Q4`, `2025 Q1`, `2025 Q2`, `2025 Q3`, `2025 Q4`, `2026 Q1`, `2026 Q2`.
- El rail lateral debe tratar toda la secuencia como una unica parada `S02`.
- Cada estado mantiene la misma composicion general y anima el eje temporal desde el quarter anterior hasta el quarter activo.
- El quarter activo debe quedar centrado sobre el eje en todos los estados.

### Componentes persistentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Timeline`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda, una sola linea.
- Texto exacto: `Como ha sido la historia`

#### C03 · Texto explicativo
- Tipo: texto
- Posicion: parte superior derecha
- Contenido variable por estado: en cada estado se especificara el texto explicativo del estado.

#### C04 · Eje temporal
- Tipo: timeline horizontal real
- Posicion: zona central del bloque principal
- Labels exactas: `2024 Q4`, `2025 Q1`, `2025 Q2`, `2025 Q3`, `2025 Q4`, `2026 Q1`, `2026 Q2`
- Resumenes exactos sobre el eje: `Solicitud del primer proceso`, `3 procesos lanzados`, `4 frentes en paralelo`, `5 areas activas`, `Factory reconocible`

#### C05 · Bloques fijos de detalle
- Tipo: grid de cuatro tarjetas conectadas al eje
- Posicion: alrededor del quarter activo
- Titulos exactos: `Areas solicitantes`, `Negocio`, `Indicadores`, `Procesos`

### Estado 1 · 2024 Q4
- Quarter activo exacto: `2024 Q4`
- Resumen del eje exacto: `Solicitud del primer proceso`
- Mensaje contextual exacto: `Primera solicitud de orden de magnitud para un proceso del área de riesgos financieros.`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
- Negocio exacto: `Riesgos Financieros`
- Indicadores exactos:
  - `Propuestas 1`
  - `Produccion 0`
  - `Desarrollo 1`
  - `Equipo 1`
  - `Revenue 8.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`

### Estado 2 · 2025 Q1
- Quarter activo exacto: `2025 Q1`
- Resumen del eje exacto: `3 procesos lanzados`
- Mensaje contextual exacto: `La demanda deja de venir de un solo punto y empieza a circular por varias areas.`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`
- Indicadores exactos:
  - `Propuestas 3`
  - `Produccion 1`
  - `Desarrollo 2`
  - `Equipo 2`
  - `Revenue 19.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`

### Estado 3 · 2025 Q2
- Quarter activo exacto: `2025 Q2`
- Resumen del eje exacto: `4 frentes en paralelo`
- Mensaje contextual exacto: `La llegada se diversifica y aparecen varias lineas activas al mismo tiempo`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`, `Leasing`, `Arquitectura`
- Indicadores exactos:
  - `Propuestas 4`
  - `Produccion 3`
  - `Desarrollo 3`
  - `Equipo 4`
  - `Revenue 40.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`, `Leasing alta disposiciones`, `Cuentas tesoreras`

### Estado 4 · 2025 Q3
- Quarter activo exacto: `2025 Q3`
- Resumen del eje exacto: `Primer Proceso Appian + IA`
- Mensaje contextual exacto: `Sumamos a la última dirección de Transformación Digital`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
  - `Procesos & IA Gen`
    - `Antonio Caballero`
      - `Daniel Guzman`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`, `Leasing`, `Arquitectura`,  `Asesoría Jurídica`,  `Financiero`
- Indicadores exactos:
  - `Propuestas 5`
  - `Produccion 4`
  - `Desarrollo 5`
  - `Equipo 4`
  - `Revenue 45.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`, `Leasing alta disposiciones`, `Cuentas tesoreras`, `Recibos y domiciliaciones`, `Emisión de cheques`, `Bastanteos`

### Estado 5 · 2025 Q4
- Quarter activo exacto: `2025 Q4`
- Resumen del eje exacto: `Proveedor Appian Reconocido`
- Mensaje contextual exacto: `El cierre refleja una capacidad instalada y un backlog compartido entre areas. Apostamos por ampliar en previsión de nuevo negocio.`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
  - `Procesos & IA Gen`
    - `Antonio Caballero`
      - `Daniel Guzman`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`, `Leasing`, `Arquitectura`,  `Asesoría Jurídica`,  `Financiero`
- Indicadores exactos:
  - `Propuestas 4`
  - `Produccion 7`
  - `Desarrollo 4`
  - `Equipo 10`
  - `Revenue 105.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`, `Leasing alta disposiciones`, `Cuentas tesoreras`, `Recibos y domiciliaciones`, `Emisión de cheques`, `Bastanteos`, `Mantenimiento Datos Cliente`

### Estado 6 · 2026 Q1
- Quarter activo exacto: `2026 Q1`
- Resumen del eje exacto: `Procesos Core: Hipotecario y Embargos`
- Mensaje contextual exacto: `Entramos en procesos core bancarios y expandimos a nuevos jefes de proyecto y nuevas áreas del banco`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
      - `Javier Gutierrez`
  - `Procesos & IA Gen`
    - `Antonio Caballero`
      - `Daniel Guzman`
      - `Javier Rodriguez`
      - `David Gil`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`, `Leasing`, `Arquitectura`,  `Asesoría Jurídica`,  `Financiero`, `Marketing`, `Cobros y Pagos`, `Hipotecario`
- Indicadores exactos:
  - `Propuestas 8`
  - `Produccion 9`
  - `Desarrollo 5`
  - `Equipo 12+2`
  - `Revenue 153.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`, `Leasing alta disposiciones`, `Cuentas tesoreras`, `Recibos y domiciliaciones`, `Emisión de cheques`, `Bastanteos`, `Mantenimiento Datos Cliente`, `Gestión de embargos`, `Cuentas Especiales Promotor`, `Disputas`, `Pagos y conciliaciones`. `Creatividades`

### Estado 7 · 2026 Q2
- Quarter activo exacto: `2026 Q2`
- Resumen del eje exacto: `En camino a proveedor principal`
- Mensaje contextual exacto: `Ampliamos la participación en procesos con IA, y nos consolidamos como proveedor principal`
- Area solicitante exacta:
  - `Arquitectura`
    - `Santi Villar`
      - `Pablo Palacios`
  - `Nuevos Desarrollos`
    - `Jorge Rey`
      - `Maria Sarang Lee`
      - `Javier Gutierrez`
      - `Maria Nieto`
  - `Procesos & IA Gen`
    - `Antonio Caballero`
      - `Daniel Guzman`
      - `Javier Rodriguez`
      - `David Gil`
      - `Alberto Azorín`
      - `Enrique Acedo`
- Negocio exacto: `Riesgos Financieros`, `Operaciones`, `Seguros`, `Leasing`, `Arquitectura`,  `Asesoría Jurídica`,  `Financiero`, `Marketing`, `Cobros y Pagos`, `Hipotecario`
- Indicadores exactos:
  - `Propuestas 5*`
  - `Produccion 12*`
  - `Desarrollo 7*`
  - `Equipo 12+4*`
  - `Revenue 175.000 EUR`
- Procesos exactos: `Requerimientos Judiciales`, `Seguros Vida Ahorro`, `Luxemburgo`, `Leasing alta disposiciones`, `Cuentas tesoreras`, `Recibos y domiciliaciones`, `Emisión de cheques`, `Bastanteos`, `Mantenimiento Datos Cliente`, `Gestión de embargos`, `Cuentas Especiales Promotor`, `Disputas`, `Pagos y conciliaciones`. `Creatividades`, `Intercambio`, `Pagos depositaría`, `Bastanteos fase 2`. `Alta y renovación de colaboradores`




## S03 · Resumen ejecutivo

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Resumen ejecutivo`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `La historia se entiende mejor cuando el ritmo se vuelve visible.`

#### C03 · Caption superior
- Tipo: tarjeta de contexto
- Posicion: parte superior derecha
- Texto exacto: `Resultados despues de un año y medio de trabajo`

#### C04 · Tarjeta de metrica 1
- Tipo: tarjeta de metrica
- Posicion: grid central, columna 1
- Label exacta: `Revenue`
- Valor exacto: `545.000 €`
- Texto exacto: `De los cuales 175k solo en el último trimestre y con crecimiento exponencial.`

#### C05 · Tarjeta de metrica 2
- Tipo: tarjeta de metrica
- Posicion: grid central, columna 2
- Label exacta: `Jefes de Proyecto`
- Valor exacto: `9`
- Texto exacto: `El patrocinio deja de depender de un unico sponsor y se distribuye por areas.`

#### C06 · Tarjeta de metrica 3
- Tipo: tarjeta de metrica
- Posicion: grid central, columna 3
- Label exacta: `Tamaño del equipo`
- Valor exacto: `16`
- Texto exacto: `Combinacion de delivery, arquitectura, analisis funcional y gobierno. Todo gestionado por squads.`

#### C07 · Tarjeta de metrica 4
- Tipo: tarjeta de metrica
- Posicion: grid central, columna 4
- Label exacta: `Tecnologías en el cliente`
- Valor exacto: `3`
- Texto exacto: `Estabilizado RPA, y consolidando Appian e IA, se irán alcanzando nuevas.`

#### C08 · Callout izquierdo label
- Tipo: callout
- Posicion: parte inferior izquierda
- Label exacta: `Lo que conviene demostrar`
- Texto exacto: `A diferencia de contratos y RFP concretas, aqui no hay fecha de inicio, ni fecha de fin, ni tarifas escasas comprometidas. La permanencia y la escalabilidad depende del contacto con cliente y la calidad de los resultados.`

#### C09 · Callout derecho label
- Tipo: callout oscuro
- Posicion: parte inferior derecha
- Label exacta: `Lectura ejecutiva`
- Texto exacto: `Farmear ingreso, es casi tan importante (o más) que las oportunidades comerciales singulares.`

## S04 · Revenue

### Referencias visuales
- Capturas facilitadas en la conversacion, no almacenadas en `imagenes/`.
- Uso previsto: extraer la serie mensual de Bankinter y rehacer el bloque `Top Clientes Revenue` en estilo propio de la presentacion.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Revenue`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Bankinter acelera mes a mes.`

#### C03 · Caption superior
- Tipo: caption
- Posicion: parte superior derecha
- Texto exacto: `5 meses superando el record de forma consecutiva`

#### C04 · Panel izquierdo
- Tipo: tarjeta principal
- Posicion: mitad izquierda
- Label exacta: `Bankinter - NR`
- Titulo exacto: `Revenue mensual`

#### C05 · KPIs dentro del panel izquierdo
- Tipo: tira de metricas
- Posicion: cabecera del panel izquierdo
- Metric 1: `Pico mensual` -> `61.890 €`
- Metric 2: `Desde abr-25` -> `×5,5`

#### C06 · Grafico de barras mensual
- Tipo: grafico de barras verticales
- Posicion: cuerpo del panel izquierdo
- Titulo accesible exacto: `Revenue mensual de Bankinter de abril de 2025 a febrero de 2026`
- Serie exacta:
  - `Apr-25` -> `11.265`
  - `May-25` -> `15.450`
  - `Jun-25` -> `15.067`
  - `Jul-25` -> `18.880`
  - `Aug-25` -> `10.498`
  - `Sep-25` -> `16.297`
  - `Oct-25` -> `26.925`
  - `Nov-25` -> `35.796`
  - `Dec-25` -> `43.161`
  - `Jan-26` -> `56.354`
  - `Feb-26` -> `61.890`

#### C07 · Panel derecho
- Tipo: tarjeta secundaria
- Posicion: mitad derecha
- Label exacta: `Top Clientes Revenue`
- Titulo exacto: `FY25`
- Texto de apoyo exacto: `Séptima cuenta en volumen de Enterprise Optimization.`

#### C08 · Tabla Top Clientes Revenue
- Tipo: tabla
- Posicion: cuerpo del panel derecho
- Cabeceras exactas: `Cliente`, `Net Revenue`, `CM (%)`
- Filas exactas:
  - `TELEFONICA DE ESPAÑA` | `3.745.885 €` | `24,7 %`
  - `JT International SA` | `1.562.974 €` | `25,1 %`
  - `ADIF (Administrador de Infraestructuras)` | `882.945 €` | `28,3 %`
  - `ENAIRE` | `788.553 €` | `28,6 %`
  - `REPSOL Utilities` | `757.509 €` | `39,8 %`
  - `Madrid Digital Empleo` | `709.345 €` | `28,9 %`
  - `Bankinter` | `673.839 €` | `44,2 %`

## S05 · Organizacion BKT · Semilla

### Referencias visuales
- Fuente: borrador compartido por el usuario con organigrama de sistemas y esquema de orbita.
- Uso previsto: mostrar el punto de partida con el responsable de sistemas ya definido y el primer alcance visible sobre negocio y geografia.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Organizacion BKT`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Inicios de RPA`

#### C03 · Caption
- Tipo: texto de apoyo
- Posicion: parte superior derecha
- Texto exacto: `RPA y automatización concentrada en arquitectura, para usuario final de Operaciones`

#### C04 · Panel izquierdo
- Tipo: panel de organizacion
- Posicion: mitad izquierda
- Label exacta: `Organizacion BKT`
- Sub-label exacta: `Sistemas`
- Responsable principal exacto: `Antonio Piqueras`
- Rol exacto: `Director de Transformacion de Procesos & IA Generativa`

#### C05 · Stream visible
- Tipo: bloque de organizacion
- Posicion: panel izquierdo, columna 1
- Label exacta: `Arquitectura`
- Responsable exacto: `Santiago Villar`
- Equipo exacto:
  - `Pablo J. Palacios`

#### C06 · Streams reservados para la siguiente slide
- Tipo: placeholders ocultos para continuidad visual
- Posicion: panel izquierdo, columnas 2 y 3
- Contenido reservado:
  - `Nuevos desarrollos` -> `Jorge Rey`
  - `IA` -> `Antonio Caballero`

#### C07 · Panel derecho
- Tipo: panel de alcance
- Posicion: mitad derecha
- Label exacta: `Alcance actual`
- Texto exacto: `Siempre ha habido un trabajo donde no solo nos relacionamos con sistemas, sino muy de cerca con negocio.`

#### C08 · Stats de alcance inicial
- Tipo: mini KPI
- Posicion: esquina superior derecha del panel derecho
- Valores exactos:
  - `1` -> `area`
  - `1` -> `geografia`

#### C09 · Nucleo
- Tipo: bloque central de orbita
- Posicion: centro del panel derecho
- Texto superior exacto: `Automatizacion y desarrollo`
- Texto principal exacto: `RPA - Appian - IA`

#### C10 · Nodo visible de area
- Tipo: nodo de orbita exterior
- Posicion: anillo exterior del panel derecho
- Texto exacto: `Operaciones`

#### C11 · Nodo visible de geografia
- Tipo: nodo de orbita interior
- Posicion: anillo interior del panel derecho
- Texto exacto: `Espana`

## S06 · Organizacion BKT · Expansion

### Referencias visuales
- Fuente: misma base visual y misma geometria que `S05`, para transicionar con auto-animate.
- Uso previsto: hacer aparecer el resto de responsables, areas y geografias sin mover el layout.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Organizacion BKT`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Actual: Llegada a todas las áreas de transformación digital`

#### C03 · Caption
- Tipo: texto de apoyo
- Posicion: parte superior derecha
- Texto exacto: `Diversificada la llegada de peticiones y nuevos procesos / desarrollos a muchos mas puntos origen, y con llegada a nuevas áreas de negocio.`

#### C04 · Panel izquierdo
- Tipo: panel de organizacion
- Posicion: mitad izquierda
- Label exacta: `Organizacion BKT`
- Sub-label exacta: `Sistemas`
- Responsable principal exacto: `Antonio Piqueras`
- Rol exacto: `Director de Transformacion de Procesos & IA Generativa`

#### C05 · Stream 1
- Tipo: bloque de organizacion
- Posicion: panel izquierdo, columna 1
- Label exacta: `Arquitectura`
- Responsable exacto: `Santiago Villar`
- Equipo exacto:
  - `Pablo J. Palacios`

#### C06 · Stream 2
- Tipo: bloque de organizacion
- Posicion: panel izquierdo, columna 2
- Label exacta: `Nuevos desarrollos`
- Responsable exacto: `Jorge Rey`
- Equipo exacto:
  - `M. Sarang Lee`
  - `Javier Gutierrez`
  - `Maria Nieto`

#### C07 · Stream 3
- Tipo: bloque de organizacion
- Posicion: panel izquierdo, columna 3
- Label exacta: `IA`
- Responsable exacto: `Antonio Caballero`
- Equipo exacto:
  - `Daniel Guzman`
  - `Javier Rodriguez`
  - `David Gil`
  - `Alberto Azorin`
  - `Enrique Acedo`

#### C08 · Panel derecho
- Tipo: panel de alcance
- Posicion: mitad derecha
- Label exacta: `Alcance actual`
- Texto exacto: `Siempre ha habido un trabajo donde no solo nos relacionamos con sistemas, sino muy de cerca con negocio.`

#### C09 · Stats de alcance completo
- Tipo: mini KPI
- Posicion: esquina superior derecha del panel derecho
- Valores exactos:
  - `6` -> `areas`
  - `4` -> `geografias`

#### C10 · Nucleo
- Tipo: bloque central de orbita
- Posicion: centro del panel derecho
- Texto superior exacto: `Automatizacion y desarrollo`
- Texto principal exacto: `RPA - Appian - IA`

#### C11 · Orbita exterior
- Tipo: nodos de areas finales
- Posicion: anillo exterior del panel derecho
- Nodos exactos:
  - `Operaciones`
  - `Mercados`
  - `Juridico`
  - `Financiero`
  - `Cobros y pagos`
  - `Riesgos`

#### C12 · Orbita interior
- Tipo: nodos de geografias
- Posicion: anillo interior del panel derecho
- Nodos exactos:
  - `Espana`
  - `Portugal`
  - `Irlanda`
  - `BKCF`

## S07 · Equipo completo

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto: reinterpretar la referencia de organigrama aportada en chat como una slide clara, integrada con el deck y renderizada con componentes React.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Capacidad instalada`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `El equipo Bankinter ya se percibe como una capacidad completa, no como una suma de perfiles.`

#### C03 · Caption superior
- Tipo: caption
- Posicion: parte superior derecha
- Texto exacto: `Slide exploratoria para visualizar todo el equipo que sostiene el delivery en Bankinter.`

#### C04 · Banda Cross
- Tipo: banda con tarjetas de personas
- Posicion: franja superior del organigrama
- Label exacta: `Cross`
- Nombres exactos: `Arturo Cercadillo`, `Stefania Talpa`, `Sofia Pons`

#### C05 · Panel IA
- Tipo: panel lateral
- Posicion: columna izquierda del organigrama
- Label exacta: `IA`
- Nombres exactos: `Ramon Rodriguez`, `Aina Caselles`

#### C06 · Panel Appian leads
- Tipo: fila superior de liderazgo Appian
- Posicion: panel principal derecho
- Label exacta: `Appian`
- Nombres exactos: `Jose Luis Boix`, `Carlos Dominguez`, `Gema Lopez`

#### C07 · Panel Appian delivery
- Tipo: grid de delivery
- Posicion: panel principal derecho, dos filas centrales
- Nombres exactos: `Ruben Blanca`, `V. Javier Diaz`, `Cesar Pinto`, `Pablo Altes`, `Tania Robledo`, `Angelica Quaranta`

#### C08 · Nodo hibrido
- Tipo: tarjeta mixta
- Posicion: panel principal derecho, franja inferior
- Nombre exacto: `Mercedes Suarez`

#### C09 · Base de arquitectura
- Tipo: banda inferior
- Posicion: base del organigrama
- Label exacta: `ARQ`
- Nombre exacto: `Tomas Redondo`
- Texto exacto: `Base de arquitectura e integracion que sostiene el delivery y la escalabilidad del modelo.`

## S08 · Q3

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Tramo 3`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Q3 · Expandir el patrocinio`

#### C03 · KPI 1
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Procesos acumulados`
- Valor exacto: `24`

#### C04 · KPI 2
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Directores activos`
- Valor exacto: `7`

#### C05 · KPI 3
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Equipo`
- Valor exacto: `13`

#### C06 · Quote
- Tipo: quote card
- Posicion: columna izquierda
- Texto exacto: `“La velocidad hace visible el valor. Y cuando el valor se ve, la demanda se multiplica.”`

#### C07 · Focus card
- Tipo: tarjeta de mensaje
- Posicion: columna izquierda
- Label exacta: `Mensaje que deja`
- Texto exacto: `Aqui el relato deja de ser tecnico y se vuelve institucional: mas directores, mas casos y una plataforma que empieza a circular por el banco.`

#### C08 · Tarjeta mes 1
- Tipo: tarjeta de mes
- Posicion: derecha, columna 1
- Chip exacto: `Julio`
- Titular exacto: `Escala visible`
- Texto exacto: `18 procesos acumulados y entrada de Atencion al Cliente.`

#### C09 · Tarjeta mes 2
- Tipo: tarjeta de mes
- Posicion: derecha, columna 2
- Chip exacto: `Agosto`
- Titular exacto: `Continuidad`
- Texto exacto: `Se mantiene la cadencia incluso en verano gracias al modelo de factory.`

#### C10 · Tarjeta mes 3
- Tipo: tarjeta de mes
- Posicion: derecha, columna 3
- Chip exacto: `Septiembre`
- Titular exacto: `Nueva legitimidad`
- Texto exacto: `24 procesos, 7 directores y backlog compartido con mayor ambicion.`

## S09 · Q4

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Tramo 4`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Q4 · Consolidar la fabrica`

#### C03 · KPI 1
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Procesos acumulados`
- Valor exacto: `32`

#### C04 · KPI 2
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Directores activos`
- Valor exacto: `8`

#### C05 · KPI 3
- Tipo: tarjeta KPI
- Posicion: parte superior derecha
- Label exacta: `Equipo`
- Valor exacto: `16`

#### C06 · Quote
- Tipo: quote card
- Posicion: columna izquierda
- Texto exacto: `“A cierre de ano ya no estamos defendiendo el modelo. Estamos gestionando su siguiente nivel de escala.”`

#### C07 · Focus card
- Tipo: tarjeta de mensaje
- Posicion: columna izquierda
- Label exacta: `Mensaje que deja`
- Texto exacto: `El cierre debe sentirse maduro: mas gobierno, mas reutilizacion y una sensacion clara de capacidad instalada, no de esfuerzo puntual.`

#### C08 · Tarjeta mes 1
- Tipo: tarjeta de mes
- Posicion: derecha, columna 1
- Chip exacto: `Octubre`
- Titular exacto: `Governance reforzado`
- Texto exacto: `Se incorporan Cumplimiento y un backlog con priorizacion conjunta.`

#### C09 · Tarjeta mes 2
- Tipo: tarjeta de mes
- Posicion: derecha, columna 2
- Chip exacto: `Noviembre`
- Titular exacto: `Capacidad reconocible`
- Texto exacto: `30 procesos acumulados y operating model mas robusto.`

#### C10 · Tarjeta mes 3
- Tipo: tarjeta de mes
- Posicion: derecha, columna 3
- Chip exacto: `Diciembre`
- Titular exacto: `Cierre con narrativa`
- Texto exacto: `32 procesos, 16 personas y un roadmap que ya apunta al siguiente ano.`

## S10 · Stakeholders

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Expansion del patrocinio`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Los stakeholders dejan de ser una lista y pasan a ser una red.`

#### C03 · Caption superior
- Tipo: caption
- Posicion: parte superior derecha
- Texto exacto: `Buena slide para mostrar que el valor ya no depende de un solo sponsor.`

#### C04 · Nucleo del diagrama
- Tipo: diagrama de orbita
- Posicion: izquierda
- Texto exacto: `Appian Factory`

#### C05 · Nodos del diagrama
- Tipo: nodos orbitando
- Posicion: izquierda
- Etiquetas exactas: `Operaciones`, `Riesgos`, `Banca Digital`, `Canales`, `Atencion Cliente`, `Cumplimiento`, `Calidad`, `Transformacion`

#### C06 · Insight 1
- Tipo: tarjeta insight
- Posicion: derecha
- Label exacta: `Senal de madurez`
- Texto exacto: `La mejor prueba de exito no es el numero bruto de entregas, sino la variedad de areas que empiezan a pedir el mismo modelo.`

#### C07 · Insight 2
- Tipo: tarjeta insight
- Posicion: derecha
- Label exacta: `Como contarlo`
- Texto exacto: `“En enero teniamos un sponsor. En diciembre teniamos una red de directores que ya usaban Appian como palanca de simplificacion.”`

#### C08 · Insight stat
- Tipo: dato resumen
- Posicion: derecha
- Valor exacto: `8`
- Texto exacto: `direcciones implicadas al cierre`

## S11 · Equipo

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto:

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Equipo y operating model`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Escalar entregas tambien es escalar el sistema que las hace repetibles.`

#### C03 · Caption superior
- Tipo: caption
- Posicion: parte superior derecha
- Texto exacto: `Slide util para conectar crecimiento del equipo con mejora de la capacidad.`

#### C04 · Encabezado del grafico
- Tipo: encabezado de grafico
- Posicion: izquierda
- Label exacta: `Evolucion del equipo`
- Valor exacto: `7 → 16 personas`

#### C05 · Barras del grafico
- Tipo: grafico de barras
- Posicion: izquierda
- Valores exactos: `ENE 7`, `MAR 8`, `MAY 9`, `JUL 11`, `SEP 13`, `DIC 16`

#### C06 · Tarjeta operating model 1
- Tipo: tarjeta
- Posicion: derecha
- Label exacta: `Discovery`
- Texto exacto: `Priorizacion y framing mas rapidos, con menos ida y vuelta entre areas.`

#### C07 · Tarjeta operating model 2
- Tipo: tarjeta
- Posicion: derecha
- Label exacta: `Delivery`
- Texto exacto: `Plantillas, componentes y cadencia de releases para sostener velocidad.`

#### C08 · Tarjeta operating model 3
- Tipo: tarjeta
- Posicion: derecha
- Label exacta: `Governance`
- Texto exacto: `Visibilidad ejecutiva, cartera priorizada y ownership mas claro.`

#### C09 · Tarjeta operating model 4
- Tipo: tarjeta
- Posicion: derecha
- Label exacta: `Adopcion`
- Texto exacto: `El valor se hace visible en distintas direcciones, no solo en tecnologia.`

## S12 · Cierre
