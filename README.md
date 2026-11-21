# Mi Plan Ciclista — PWA personal

## Qué incluye
- Calendario completo de 41 semanas (23 nov 2026–5 sep 2027), con la marcha de abril y el bloque de preparación y viaje alpino.
- Sesiones detalladas de martes, jueves y sábado; sesiones dominicales opcionales cuando corresponden; calendario diario específico durante el viaje.
- Calendario de gimnasio y descanso durante los bloques de entrenamiento previos al viaje.
- Fichas de sesiones y registro de duración, distancia, desnivel, potencia, FC, cadencia, RPE, hidratos y notas.
- FTP indoor y carretera independientes; zonas y objetivos de vatios calculados dinámicamente.
- Registro de tests FTP, panel de progreso, gráficos y copia de seguridad JSON/importación.
- Sin entrenador IA, Strava, suscripciones ni servicios de pago. Los datos se guardan localmente en el navegador.

## Ejecutar en local
La PWA y el service worker requieren HTTPS o localhost. En un ordenador con Python:
1. Descomprime el ZIP.
2. Abre una terminal dentro de la carpeta.
3. Ejecuta `python -m http.server 8000`.
4. Abre `http://localhost:8000` en el navegador.

## Publicar gratis para instalarla en el móvil
Puedes subir el contenido de esta carpeta a un repositorio GitHub y activar GitHub Pages, o usar otro alojamiento estático HTTPS. Abre la URL desde el móvil y usa "Añadir a pantalla de inicio" / "Instalar aplicación".

## Datos y copias de seguridad
Los registros se guardan en el almacenamiento local del navegador y no se sincronizan automáticamente entre dispositivos. Exporta periódicamente una copia JSON desde Más > Copia de seguridad.

## Consideraciones
- El FTP indoor inicial se configura a 275 W. El FTP de carretera queda sin registrar hasta que se mida.
- Al cambiar FTP se recalculan las referencias de potencia de las sesiones; los registros históricos conservan los valores guardados.
- Los tests de 20 min son estimaciones (95% de la media), no una medición directa de FTP.
- Las zonas son orientativas. Z7 no tiene rango fijo.
- La planificación del viaje alpino es orientativa y debe ajustarse a rutas, meteorología, altitud y recuperación reales.
