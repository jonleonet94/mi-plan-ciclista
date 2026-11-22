# Mi Plan Ciclista — PWA personal

## Qué incluye
- Calendario completo de 41 semanas (23 nov 2026–5 sep 2027), con la marcha de abril y el bloque de preparación y viaje alpino.
- Sesiones detalladas de martes, jueves y sábado; sesiones dominicales opcionales cuando corresponden; calendario diario específico durante el viaje.
- Calendario de gimnasio y descanso durante los bloques de entrenamiento previos al viaje.
- Fichas de sesiones y registro ciclista de duración, distancia, desnivel, potencia media/normalizada, FC media/máxima, cadencia, RPE, sensación de piernas y notas.
- Historial de entrenamientos con edición y borrado de registros.
- Selección explícita de bicicleta en cada registro y cálculo de vatios según el FTP correspondiente.
- Gráficos FTP indoor y carretera separados; el FTP indoor de 275 W aparece como estimación inicial, no como test histórico.
- Estimación orientativa de carga semanal mediante minutos × RPE.
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

## Novedades V3
- Conserva la clave de almacenamiento local de V2 para reutilizar los datos existentes.
- Al iniciar, elimina del historial la entrada ficticia que etiquetaba los 275 W iniciales como test; conserva el valor de FTP como estimación.
- La carga semanal es una métrica orientativa basada en duración × RPE, no una prescripción automática.

## Consideraciones
- El FTP indoor inicial se configura a 275 W como estimación. El FTP de carretera queda sin registrar hasta que se mida.
- Al cambiar FTP se recalculan las referencias de potencia de las sesiones; los registros históricos conservan los valores guardados.
- Los tests de 20 min son estimaciones (95% de la media), no una medición directa de FTP.
- Las zonas son orientativas. Z7 no tiene rango fijo.
- La planificación del viaje alpino es orientativa y debe ajustarse a rutas, meteorología, altitud y recuperación reales.


## Versión 3.1
- Inicio: entrenamiento del día, progreso semanal, cuenta atrás a los objetivos y calendario de la semana.
- Plan: se conserva el calendario semanal y la vista de bloques/sesiones.
- Zonas: zonas de potencia con W/kg y zonas de frecuencia cardíaca por % de FC máxima.
- Registro: añade FC máxima y elimina campos de hidratos, sueño y fatiga.
- Tests FTP: peso, FC media, FC máxima y W/kg calculado.
- Progreso: historial, carga semanal, evolución FTP, perfil de potencia y métricas acumuladas.


## Versión 3.2
- Enfoque exclusivo en el registro y análisis de ciclismo; no se añade registro de gimnasio. La vista de lista del Plan muestra sesiones ciclistas y el calendario semanal de Inicio prioriza ciclismo.
- Carga interna estimada de las últimas 8 semanas mediante minutos × RPE; el TSS de carretera se muestra separado y no se mezcla con las unidades de carga.
- IF y TSS automáticos para sesiones de carretera cuando están disponibles NP, duración y FTP de carretera. Se guarda el FTP usado como referencia histórica.
- Zonas: W/kg junto al FTP indoor y de carretera; zonas de FC por FC máxima, identificadas como estimaciones generales.
- Perfil de potencia fechado y separado por bicicleta: 5 s, 20 s, 1 min, 5 min, 20 min y 60 min, con W/kg y curva visual. Los valores antiguos sin fecha/bicicleta se conservan sin reasignarlos.
- Registro visual de potencia media por intervalo en sesiones estructuradas compatibles.
- Historial de peso con W/kg calculado usando las referencias FTP guardadas en cada fecha.
- Calculadora independiente para planificar hidratos, líquidos y sodio en salidas largas; estos datos no se añaden al formulario general de entrenamiento.
- Conserva la clave local `cycling-plan-pwa-v1` para mantener los registros de versiones anteriores; exporta una copia JSON antes de actualizar.

## Cálculos y límites
- IF = NP / FTP. TSS = duración en horas × IF² × 100. Se calcula solo para carretera y requiere NP, duración y FTP. El FTP empleado se guarda en el registro.
- Carga semanal = minutos × RPE. Se presenta separada del TSS porque son métricas distintas.
- Las zonas de FC basadas en FC máxima son orientativas y no sustituyen una evaluación individual de umbrales.
- El análisis de intervalos reconoce las estructuras comunes del plan (series repetidas con rango porcentual y bloques over-under). Otras descripciones pueden no generar campos automáticos de intervalo.
