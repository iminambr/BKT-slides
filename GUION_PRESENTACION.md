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
- Texto exacto: `Bankinter · Appian · Business Plan`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: centro izquierda
- Texto exacto: `Bankinter`

#### C03 · Bajada principal
- Tipo: bajada
- Posicion: debajo del titular
- Texto exacto: `De Iniciativa estable en RPA, a combinar RPA, Appian, IA y temas de gestión en transformación de procesos.`


#### C05 · Metrica 1
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `18`
- Etiqueta exacta: `procesos de Appian desplegados`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `0` hasta el valor final.

#### C06 · Metrica 2
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `3`
- Etiqueta exacta: `Directores de Transformación Digital implicados`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `0` hasta el valor final.

#### C07 · Metrica 3
- Tipo: pastilla de metrica
- Posicion: debajo del bloque de texto principal. Bastante grande, porque es uno de los datos importantes a mostrar.
- Valor exacto: `21`
- Etiqueta exacta: `personas en el equipo`
- Animación: Debe aparecer por fragmentos y el numero debe contar rapidamente desde `0` hasta el valor final.

#### C08 · Boton de pantalla completa
- Tipo: boton
- Posicion: parte superior izquierda, junto a logos
- Texto exacto: `Pantalla completa`

#### C09 · Panel derecho kicker
- Tipo: kicker
- Posicion: panel derecho
- Texto exacto: Incluir aqui en todo su tamaño la imagen 'imagenes\chica_tarjeta.png'


## S05 · Timeline secuencial

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto: reinterpretar el borrador de timeline aportado en chat como una secuencia Reveal que se lee como un unico recorrido ejecutivo, con un eje horizontal real y tarjetas de detalle alrededor del quarter activo.

### Comportamiento
- La `S05` se compone de 7 estados full-screen visualmente continuos.
- Al avanzar con flecha abajo o scroll debe recorrerse, en este orden: `2024 Q4`, `2025 Q1`, `2025 Q2`, `2025 Q3`, `2025 Q4`, `2026 Q1`, `2026 Q2`.
- El rail lateral debe tratar toda la secuencia como una unica parada `S05`.
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




## S02 · Resumen ejecutivo

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
- Label exacta: `Revenue YTD Febrero`
- Valor exacto: `673.839 €`
- Texto exacto: `Cifra acumulada hasta febrero, ya como séptima cuenta por volumen en Enterprise Optimization.`

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
- Valor exacto: `21`
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

## S06 · Revenue

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
- Titulo exacto: `Revenue mensual Appian`

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

## S03 · Organizacion BKT · Semilla

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

## S03 · Organizacion BKT · Expansion

### Referencias visuales
- Fuente: misma base visual y misma geometria que `S03 · Organizacion BKT · Semilla`, manteniendo familia visual con la slide anterior.
- Orden exacto: esta slide va inmediatamente despues de `S03 · Organizacion BKT · Semilla`, para que la lectura sea claramente de antes y despues.
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

## S04 · Equipo completo

### Referencias visuales
- Archivo en `imagenes/`:
- Uso previsto: reinterpretar la referencia de organigrama aportada en chat como una slide clara, integrada con el deck y renderizada con componentes React.
- Comportamiento: en la secuencia real del deck va inmediatamente despues de `S07`, para reforzar la lectura de antes y despues.
- Fragmentos exactos al avanzar:
  - Paso 1: `Arturo Cercadillo` + banda `Cross`
  - Paso 2: caja `RPA`
  - Paso 3: caja `Appian`
  - Paso 4: caja `IA`
  - Paso 5: base `ARQ`

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Capacidad instalada`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `El equipo Bankinter ya se percibe como una capacidad completa, no como una suma de perfiles.`

#### C03 · Nodo superior
- Tipo: tarjeta destacada de liderazgo
- Posicion: centrado sobre el organigrama principal
- Nombre exacto: `Arturo Cercadillo`

#### C04 · Banda Cross
- Tipo: banda con tarjetas de personas
- Posicion: franja superior del organigrama principal
- Label exacta: `Cross`
- Nombres exactos: `Stefania Talpa`, `Sofia Pons`, `Curro Arroyo Cerezo`

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

#### C09 · Bloque RPA
- Tipo: panel de equipo integrado en el organigrama principal
- Posicion: tercer panel dentro de la caja principal, al mismo nivel que IA y Appian
- Label exacta: `RPA`
- Equipo exacto: `Jose Javier Vargas`, `Virginia Campayo`, `Sergio Montes`, `Juan Jose Lopez`
- Nota de composicion: `Jose Javier Vargas` se representa con una tarjeta ligeramente mas oscura para marcar liderazgo del squad

#### C10 · Base de arquitectura
- Tipo: banda inferior
- Posicion: base del organigrama
- Label exacta: `ARQ`
- Nombre exacto: `Tomas Redondo`
- Texto exacto: `Base de arquitectura e integracion que sostiene el delivery y la escalabilidad del modelo.`

## S04 · Equipo completo · Hipotecario

### Referencias visuales
- Archivo en `imagenes/`: referencia compartida por el usuario en chat con una nueva caja de `Hipotecario`.
- Uso previsto: mostrar la siguiente foto del mismo equipo, manteniendo el titular y haciendo visible la expansion a un nuevo ambito.
- Comportamiento: debe entrar justo despues de la `S04` actual, compartiendo el mismo identificador visible `S04` y con transicion suave entre ambas.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Capacidad instalada`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `El equipo Bankinter ya se percibe como una capacidad completa, no como una suma de perfiles.`

#### C03 · Organigrama evolucionado
- Tipo: misma base de organigrama de la `S04` anterior
- Posicion: cuerpo principal de la slide
- Contenido exacto: se mantienen `Arturo Cercadillo`, la banda `Cross`, las cajas `IA`, `Appian`, `RPA` y la base `ARQ` con el mismo contenido.

#### C04 · Nueva caja Hipotecario
- Tipo: panel nuevo integrado en el organigrama principal
- Posicion: dentro del cuadro blanco principal, bajo la banda `Cross` y al mismo nivel que `IA`, `Appian` y `RPA`
- Label exacta: `Hipotecario`
- Estilo exacto: misma logica visual que `IA`, pero con fondo morado muy suave y label vertical.
- Composicion exacta: cuatro perfiles sin nombre todavia, con icono de persona y sin texto visible.
- Codigo de color exacto:
  - dos naranjas para representar talento que llega desde `Appian`
  - verde para representar talento que llega desde `IA`
- amarillo para representar talento que llega desde `RPA`
- Intencion narrativa exacta: `Hipotecario` no nace como caja aislada, sino como nueva capacidad que combina talento redistribuido desde ambitos ya existentes.

## S04 · Proceso ejemplo

### Referencias visuales
- Referencia: composicion compartida por el usuario con caso `Bastanteos con IA`, KPIs a la izquierda y demostracion visual del modelo a la derecha.
- Uso previsto: convertir una slide de ejemplo de proceso en el mismo lenguaje del deck, con foco ejecutivo en valor, control y trazabilidad.
- Comportamiento: debe ir justo detras del bloque de equipo y antes de la timeline, pero mantenerse dentro del mismo tramo visual `S04` para no renumerar el relato.

### Componentes

#### C01 · Titular
- Tipo: bloque de apertura
- Posicion: columna izquierda
- Eyebrow exacta: `Proceso ejemplo`
- Texto exacto: `Bastanteos con IA: menos friccion operativa, mismo control.`
- Subtexto exacto: `La IA clasifica y pre-rellena; Appian/ARGO orquesta; el experto valida con evidencia sobre el PDF.`

#### C02 · KPIs del caso
- Tipo: grid 2x2 de metricas
- Posicion: columna izquierda
- Valores exactos:
  - `70k` -> `operaciones / año`
  - `50+` -> `tipologías / documentales`
  - `80+` -> `facultades / a interpretar`
  - `299k€` -> `ahorro potencial / máximo`

#### C03 · Callout de lectura
- Tipo: callout oscuro
- Posicion: parte inferior izquierda
- Texto exacto: `Industrializamos un proceso jurídico crítico sin automatización ciega.`

#### C04 · Panel principal del modelo
- Tipo: gran panel visual
- Posicion: columna derecha
- Tag exacta: `Como se ve el modelo`
- Mensaje exacto: `Lo diferencial: la persona valida cada atributo sobre la evidencia del documento.`

#### C05 · Vista operativa superior
- Tipo: comparativa documento + formulario
- Posicion: parte superior del panel principal
- Composicion exacta:
  - mock de PDF con evidencias resaltadas
  - mock de formulario estructurado con campos pre-rellenados
  - conexion visual entre ambos

#### C06 · Flujo inferior
- Tipo: secuencia horizontal de pasos
- Posicion: parte media-inferior del panel principal
- Nodos exactos: `PDF`, `OCR`, `IA`, `VAL`, `ARGO`
- Lectura exacta:
  - `PDF`: entrada de documentacion
  - `OCR`: captura de texto
  - `IA`: clasificacion y propuesta de atributos
  - `VAL`: validacion humana sobre evidencia
  - `ARGO`: integracion y trazabilidad

#### C07 · Pildoras de sintesis
- Tipo: tres pildoras horizontales
- Posicion: base del panel principal
- Textos exactos: `IA prepara`, `humano decide`, `plataforma integra`

## S08 · Competidores

### Referencias visuales
- Assets locales:
  - `assets/competitors/vass.png`
  - `assets/competitors/accenture.svg`
  - `assets/competitors/ey-logo-black.png`
  - `assets/competitors/softtek.svg`
- Uso previsto: slide visual para situar competidores recurrentes en Bankinter cuando la conversación mezcla procesos, transformación y algo de Appian.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Paisaje competitivo`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `En Bankinter, el espacio de procesos y Appian se cruza siempre con cuatro nombres reconocibles.`

#### C03 · Nota ejecutiva superior
- Tipo: tarjeta de mensaje
- Posicion: parte superior derecha
- Label exacta: `Lectura ejecutiva`
- Texto exacto: `VASS, Accenture, EY y Softtek aparecen como referencias recurrentes cuando el banco piensa en capacidad de transformación, industrialización y credibilidad en la cuenta.`

#### C04 · Nota de lectura
- Tipo: tarjeta de contexto
- Posicion: columna izquierda
- Label exacta: `Como leer esta slide`
- Texto exacto: `No es un ranking cerrado. Es el mapa mental más frecuente cuando Bankinter compara proveedores con conversación real en procesos y algo de tracción en Appian.`

#### C05 · Nube de temas
- Tipo: grupo de chips
- Posicion: columna izquierda
- Chips exactos:
  - `Procesos`
  - `Automatizacion`
  - `Appian`
  - `Delivery`

#### C06 · Espacio libre inferior
- Tipo: aire compositivo
- Posicion: columna izquierda, parte inferior
- Nota de composicion: reservar hueco visual para que la slide respire y no se corte en viewport

#### C07 · Núcleo central
- Tipo: panel central
- Posicion: cabecera del bloque visual derecho
- Label exacta: `Terreno de juego`
- Titular exacto: `Procesos, BPM y Appian`
- Texto exacto: `Ahí es donde Bankinter compara presencia, credibilidad y capacidad de ejecución.`
- Chips exactos:
  - `Cuenta`
  - `Delivery`
  - `Low-code`

#### C08 · Tarjeta competidor VASS
- Tipo: tarjeta de competidor con logo
- Posicion: bloque visual derecho, cuadrante superior izquierdo
- Nombre exacto: `VASS`
- Dominio exacto: `Procesos + delivery`
- Texto exacto: `Presencia visible cuando la conversación baja a fábrica, continuidad operativa y transformación de procesos.`

#### C09 · Tarjeta competidor Accenture
- Tipo: tarjeta de competidor con logo
- Posicion: bloque visual derecho, cuadrante superior derecho
- Nombre exacto: `Accenture`
- Dominio exacto: `Transformacion a escala`
- Texto exacto: `Competidor natural cuando el banco busca marca global, capacidad de programa y relato de transformación amplio.`

#### C10 · Tarjeta competidor EY
- Tipo: tarjeta de competidor con logo
- Posicion: bloque visual derecho, cuadrante inferior izquierdo
- Nombre exacto: `EY`
- Dominio exacto: `Cambio + advisory`
- Texto exacto: `Entra en la conversación cuando procesos y transformación se conectan con narrativa ejecutiva y sponsorship.`

#### C11 · Tarjeta competidor Softtek
- Tipo: tarjeta de competidor con logo
- Posicion: bloque visual derecho, cuadrante inferior derecho
- Nombre exacto: `Softtek`
- Dominio exacto: `Capacidad industrial`
- Texto exacto: `Jugador a tener en cuenta cuando se valora delivery sostenido, escalabilidad y modelo de fábrica.`

## S09 · Presentacion hecha con IA

### Referencias visuales
- Logos locales en `assets/ai-tools/`: `openai-blossom-mark.svg`, `github-copilot-logo.svg`, `revealjs-logo.svg`
- Uso previsto: slide explicativa de backstage, en primera version, para contar que el deck nace como producto web y no como PowerPoint cerrado.
- Direccion visual: variante oscura para abrir contraste en el tramo final de la presentacion.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Presentacion hecha con IA`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `De una conversacion a un deck navegable y editable.`

#### C03 · Caption superior
- Tipo: caption
- Posicion: parte superior derecha
- Texto exacto: `ChatGPT ayuda a sintetizar el relato, Codex ejecuta cambios end-to-end sobre el deck, GitHub Copilot acelera remates de codigo y reveal.js pone el motor de navegacion.`

#### C04 · Tarjeta ChatGPT
- Tipo: tarjeta de herramienta
- Posicion: grid izquierda, fila 1 columna 1
- Nombre exacto: `ChatGPT`
- Label exacta: `Narrativa`
- Texto exacto: `Ordena el storyline, resume ideas y ayuda a convertir notas sueltas en mensajes ejecutivos.`

#### C05 · Tarjeta Codex
- Tipo: tarjeta de herramienta
- Posicion: grid izquierda, fila 1 columna 2
- Nombre exacto: `Codex`
- Label exacta: `Implementacion`
- Texto exacto: `Aplica cambios reales en HTML, CSS y JS, reordena slides, ajusta layout y valida el resultado.`

#### C06 · Tarjeta GitHub Copilot
- Tipo: tarjeta de herramienta
- Posicion: grid izquierda, fila 2 columna 1
- Nombre exacto: `GitHub Copilot`
- Label exacta: `Aceleracion`
- Texto exacto: `Sirve de apoyo para snippets, remates repetitivos y pequenas iteraciones sobre el codigo.`

#### C07 · Tarjeta reveal.js
- Tipo: tarjeta de herramienta
- Posicion: grid izquierda, fila 2 columna 2
- Nombre exacto: `reveal.js`
- Label exacta: `Motor`
- Texto exacto: `Convierte todo lo anterior en una presentacion web: scroll, rail lateral, fragments y navegacion.`

#### C08 · Panel derecho
- Tipo: panel explicativo
- Posicion: columna derecha
- Titulo exacto: `Secuencia de trabajo`
- Eyebrow exacta: `Como se llega`

#### C09 · Paso 1
- Tipo: paso de proceso
- Posicion: panel derecho
- Numero exacto: `01`
- Titulo exacto: `Guion y mensaje`
- Texto exacto: `Se parte de notas, feedback y objetivos. ChatGPT ayuda a compactar la historia y a definir el titular de cada slide.`

#### C10 · Paso 2
- Tipo: paso de proceso
- Posicion: panel derecho
- Numero exacto: `02`
- Titulo exacto: `Construccion del deck`
- Texto exacto: `Codex aterriza la propuesta en el proyecto real: HTML, CSS, JS, orden de slides, rail y validacion local.`

#### C11 · Paso 3
- Tipo: paso de proceso
- Posicion: panel derecho
- Numero exacto: `03`
- Titulo exacto: `Pulido y entrega`
- Texto exacto: `Copilot acelera ajustes pequenos y reveal.js deja una presentacion versionable, navegable y facil de iterar.`

#### C12 · Nota final
- Tipo: callout de cierre
- Posicion: parte inferior del panel derecho
- Label exacta: `Resultado`
- Texto exacto: `Una presentacion que no nace en PowerPoint: nace como producto web, editable en Git y afinable por iteraciones cortas.`

## S10 · Cierre

### Referencias visuales
- Assets locales:
  - `assets/bankinter-wordmark-official.png`
  - `assets/ntt-data-wordmark.svg`
- Uso previsto: cierre visual de tono ejecutivo con fondo oscuro, logos visibles y una composicion abstracta tipo horizonte para rematar la presentacion sin volver a una slide de texto.

### Componentes

#### C01 · Eyebrow
- Tipo: eyebrow
- Posicion: parte superior izquierda
- Texto exacto: `Cierre`

#### C02 · Titular principal
- Tipo: titular principal
- Posicion: parte superior izquierda
- Texto exacto: `Seguimos construyendo la siguiente escala.`

#### C03 · Lead
- Tipo: texto de cierre
- Posicion: parte superior izquierda
- Texto exacto: `Bankinter y NTT DATA llegan a este punto con una capacidad Appian ya visible: mas industrial, mas transversal y lista para el siguiente salto.`

#### C04 · Logo Bankinter
- Tipo: tarjeta de logo
- Posicion: columna izquierda
- Asset exacto: `assets/bankinter-wordmark-official.png`

#### C05 · Logo NTT DATA
- Tipo: tarjeta de logo
- Posicion: columna izquierda
- Asset exacto: `assets/ntt-data-wordmark.svg`

#### C06 · Visual abstracto
- Tipo: composicion de cierre
- Posicion: columna derecha
- Direccion visual exacta: horizonte oscuro con glow naranja, glow azul, reticula sutil y panel glass final.

#### C07 · Glass card
- Tipo: tarjeta superpuesta sobre el visual
- Posicion: parte inferior del visual
- Label exacta: `2026`
- Titular exacto: `Next scale`
- Texto exacto: `Appian, IA y delivery industrial como capacidad ya reconocible en la cuenta.`
