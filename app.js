const PLAN = [{"week": 1, "start": "2026-11-23", "block": "Adaptación", "deload": false, "tue": "Test FTP indoor 20 min", "thu": "30 min Z1–Z2", "sat": "3 h Z2"}, {"week": 2, "start": "2026-11-30", "block": "Adaptación", "deload": false, "tue": "3×10 min al 80–85% · rec. 5 min", "thu": "30–35 min Z1–Z2", "sat": "3 h Z2; opcional últimos 15–20 min tempo suave"}, {"week": 3, "start": "2026-12-07", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 80–85% · rec. 5 min", "thu": "35 min Z1–Z2", "sat": "3 h 15 min Z2"}, {"week": 4, "start": "2026-12-14", "block": "Base aeróbica", "deload": false, "tue": "2×15 min al 85–88% · rec. 6 min", "thu": "35–40 min fácil; opcional 4×1 min a 100–110 rpm", "sat": "3 h 30 min Z2; opcional 2×10 min tempo en subida"}, {"week": 5, "start": "2026-12-21", "block": "Base aeróbica", "deload": false, "tue": "3×8 min SS al 88–92% · rec. 4 min", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 6, "start": "2026-12-28", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85% · rec. 5 min", "thu": "25–30 min fácil", "sat": "2 h 30 min Z2 suave"}, {"week": 7, "start": "2027-01-04", "block": "Base aeróbica", "deload": false, "tue": "Test FTP carretera 20 min si ya estás familiarizado; si no, 3×10 min al 85% indoor", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 8, "start": "2027-01-11", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 85–88% · rec. 5 min", "thu": "40 min fácil", "sat": "3 h 45 min Z2; opcional 2×10 min tempo en subida"}, {"week": 9, "start": "2027-01-18", "block": "Base aeróbica", "deload": false, "tue": "3×10 min SS al 88–92% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2, sin bloques intensos"}, {"week": 10, "start": "2027-01-25", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "2 h 45 min Z2 suave"}, {"week": 11, "start": "2027-02-01", "block": "Base aeróbica", "deload": false, "tue": "4×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h Z2, sin intensidad"}, {"week": 12, "start": "2027-02-08", "block": "Base aeróbica", "deload": false, "tue": "Test FTP indoor 20 min si recuperado; alternativa 2×10 min tempo", "thu": "30 min fácil", "sat": "3 h 30 min Z2"}, {"week": 13, "start": "2027-02-15", "block": "Desarrollo", "deload": false, "tue": "3×8 min al 95–100% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2; opcional 2×12 min tempo"}, {"week": 14, "start": "2027-02-22", "block": "Desarrollo", "deload": false, "tue": "5×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2, sin intensidad"}, {"week": 15, "start": "2027-03-01", "block": "Desarrollo", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2; opcional 2×15 min tempo en subida"}, {"week": 16, "start": "2027-03-08", "block": "Desarrollo", "deload": true, "tue": "Test FTP carretera 20 min si recuperado; alternativa 2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "3 h Z2 suave"}, {"week": 17, "start": "2027-03-15", "block": "Preparación específica", "deload": false, "tue": "2×15 min al 92–97% · rec. 7 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2 + 2×15 min tempo en subida"}, {"week": 18, "start": "2027-03-22", "block": "Preparación específica", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 30 min con desnivel, Z2 + 2×20 min tempo en subida"}, {"week": 19, "start": "2027-03-29", "block": "Preparación específica", "deload": true, "tue": "2×10 min al 85–90% · rec. 5 min", "thu": "25–30 min fácil", "sat": "3 h Z2 suave, sin intensidad"}, {"week": 20, "start": "2027-04-05", "block": "Preparación específica", "deload": false, "tue": "2×12 min over-unders: 2 min 102–105% + 4 min 90–95% · rec. 6 min; si fatiga, 2×12 min tempo alto", "thu": "30 min fácil", "sat": "3 h 30 min–4 h Z2; opcional 2×12 min tempo en subida"}, {"week": 21, "start": "2027-04-12", "block": "Puesta a punto", "deload": false, "tue": "3×5 min al 90–95% · rec. 4 min", "thu": "30 min fácil", "sat": "1 h 45 min–2 h 15 min Z1–Z2, sin intervalos"}, {"week": 22, "start": "2027-04-19", "block": "Puesta a punto", "deload": false, "tue": "45–50 min con 3×3 min al 90–95% · rec. 4 min", "thu": "25–30 min muy fácil; opcional 3×30 s a 100–110 rpm", "sat": "COMPETICIÓN 24 ABR: 120 km · 2.000 m+"}];
const EXTENDED_PLAN = [{"week": 23, "start": "2027-04-26", "block": "Recuperación y transición", "deload": true, "tue": "Recuperación: descanso o 20–30 min en Z1 (≤55 % FTP), solo sin fatiga residual; 85–95 rpm.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm; si hay molestias o cansancio, descanso.", "sat": "60–90 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 24, "start": "2027-05-03", "block": "Recuperación y transición", "deload": false, "tue": "45 min Z1–Z2 (50–70 % FTP), 85–95 rpm.", "thu": "30–40 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm.", "sat": "2 h Z2 baja (56–65 % FTP), 85–95 rpm; evitar puertos exigentes.", "sun": "Descanso."}, {"week": 25, "start": "2027-05-10", "block": "Recuperación y transición", "deload": false, "tue": "Calentamiento 15 min; 2 × 10 min al 76–82 % FTP, rec. 5 min Z1; 85–95 rpm; enfriar hasta unos 60 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–72 % FTP), 85–95 rpm en llano; desnivel moderado, sin bloques obligatorios.", "sun": "Descanso."}, {"week": 26, "start": "2027-05-17", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot bajo: 15 min calentamiento; 3 × 12 min al 85–88 % FTP, rec. 5 min Z1–Z2; 85–95 rpm; 10 min enfriamiento. Total 70–75 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h 30 min Z2 (56–75 % FTP); 85–95 rpm llano, 75–90 rpm subida; desnivel moderado, sin intervalos obligatorios.", "sun": "Descanso."}, {"week": 27, "start": "2027-05-24", "block": "Base aeróbica específica", "deload": false, "tue": "Tempo alto: 15 min calentamiento; 2 × 20 min al 85–90 % FTP, rec. 7 min; 85–95 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), incluir 2 × 12 min al 80–85 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso o 45 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 28, "start": "2027-05-31", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 3 × 15 min al 88–92 % FTP, rec. 6 min; 85–95 rpm llano o 75–90 rpm subida; 10 min enfriamiento. Total 80–90 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), con desnivel; 2 × 15 min al 80–88 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 29, "start": "2027-06-07", "block": "Base aeróbica específica", "deload": true, "tue": "15 min calentamiento; 2 × 12 min al 80–85 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin tempo ni subidas exigentes.", "sun": "Descanso."}, {"week": 30, "start": "2027-06-14", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min Z1–Z2; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), con desnivel; 2 × 20 min al 80–88 % FTP en subida, rec. 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 31, "start": "2027-06-21", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "VO₂ máx.: 15–20 min calentamiento; 4 × 4 min al 108–115 % FTP, rec. 4 min Z1; 90–105 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), desnivel moderado, sin bloques de intensidad obligatorios.", "sun": "Descanso."}, {"week": 32, "start": "2027-06-28", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; 2 × 20 min al 80–88 % FTP en subida, preferentemente segunda mitad si buenas sensaciones; 75–90 rpm.", "sun": "Opcional: 45–60 min Z1 (≤55 % FTP), 85–95 rpm; solo con buena recuperación."}, {"week": 33, "start": "2027-07-05", "block": "Descarga", "deload": true, "tue": "15 min calentamiento; 2 × 10 min al 85–88 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin bloques de intensidad.", "sun": "Descanso."}, {"week": 34, "start": "2027-07-12", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 25 min al 88–92 % FTP, rec. 8 min; 80–90 rpm; 10 min enfriamiento. Total aprox. 90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 30–40 min al 75–82 % FTP. Si buenas sensaciones, añadir 2 × 12 min al 85–88 % FTP, rec. 8 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 35, "start": "2027-07-19", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral controlado: 15–20 min calentamiento; 3 × 15 min al 90–95 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 85–95 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 45 min Z2 (56–75 % FTP), bastante desnivel; ascensión continua 40–50 min principalmente al 70–82 % FTP; 75–90 rpm.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; solo sin fatiga muscular relevante."}, {"week": 36, "start": "2027-07-26", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "5 h Z2 (56–75 % FTP), desnivel importante; dos ascensiones de 30–45 min al 70–82 % FTP separadas por recuperación Z1–Z2; 75–90 rpm, sin esfuerzos máximos.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm, solo con buena recuperación."}, {"week": 37, "start": "2027-08-02", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 45–60 min al 70–82 % FTP; no superar umbral sostenido; 75–90 rpm.", "sun": "Descanso o 60 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 38, "start": "2027-08-09", "block": "Taper y puesta a punto", "deload": false, "tue": "15 min calentamiento; 2 × 12 min al 88–92 % FTP, rec. 6 min; 85–95 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "30 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–70 % FTP), desnivel moderado, sin bloques de intensidad.", "sun": "Descanso."}, {"week": 39, "start": "2027-08-16", "block": "Taper y puesta a punto", "deload": false, "tue": "Activación: 15 min calentamiento; 2 × 8 min al 85–90 % FTP, rec. 5 min; añadir 3 × 1 min a 100–110 rpm con resistencia baja y 2 min suaves; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "2 h Z1–Z2 (50–65 % FTP), terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 40, "start": "2027-08-23", "block": "Activación previa y comienzo del viaje", "deload": true, "customCalendar": true, "days": {"0": ["Descanso.", "rest", "Descanso"], "1": ["Activación breve: 40–45 min en Z1–Z2; incluir 3 × 2 min al 85–90 % FTP, rec. 3 min suaves; cadencia 85–95 rpm.", "ride", "Activación"], "2": ["Descanso.", "rest", "Descanso"], "3": ["Adaptación: 60–90 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm. Sin intervalos ni ascensiones exigentes.", "ride", "Adaptación"], "4": ["Resistencia suave: 2–3 h en Z2 (56–75 % FTP); 85–95 rpm en llano y 75–90 rpm en subida. Si hay ascensión larga, mantener Z2 y evitar superar el 75 % FTP sostenido.", "ride", "Resistencia suave"], "5": ["Recuperación: descanso o 60–90 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "6": ["Resistencia con subida: 3–4 h en Z2 (56–75 % FTP). Si buenas sensaciones, ascensión de 30–45 min al 70–80 % FTP; cadencia en subida 75–90 rpm.", "ride", "Resistencia con subida"]}}, {"week": 41, "start": "2027-08-30", "block": "Viaje alpino", "deload": false, "customCalendar": true, "days": {"0": ["Recuperación: descanso o 45–60 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "1": ["Jornada de montaña: 3–5 h según ruta. Predominio Z2 (56–75 % FTP). En ascensiones largas, referencia 70–82 % FTP; cadencia 75–90 rpm. Evitar comenzar puertos por encima del umbral.", "ride", "Jornada de montaña"], "2": ["Recuperación: descanso o 45–60 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "3": ["Posible gran puerto: 3–5 h según recorrido. En ascensiones largas, preferentemente 70–82 % FTP. En tramos exigentes se puede superar puntualmente, evitando permanecer por encima del 90–95 % durante periodos prolongados; cadencia 75–90 rpm.", "ride", "Posible gran puerto"], "4": ["Recuperación: descanso o 30–60 min en Z1 (≤55 % FTP), si facilita la recuperación.", "ride", "Recuperación"], "5": ["Posible segunda gran jornada: 3–5 h según recorrido y recuperación. Z2 predominante; ascensiones largas al 70–82 % FTP. Si hay fatiga acumulada, reducir duración o sustituir por salida suave.", "ride", "Segunda gran jornada"], "6": ["Final del viaje: descanso o actividad muy suave según el desplazamiento.", "rest", "Final del viaje"]}}];
PLAN.push(...EXTENDED_PLAN);
const $ = id => document.getElementById(id);
const STORAGE_KEY = "cycling-plan-pwa-v1";
const defaultState = {
  profile:{name:"Ciclista",weight:76},
  ftp:{indoor:275,road:null,indoorDate:"2026-11-24",roadDate:null},
  ftpHistory:[{date:"2026-11-24",bike:"indoor",ftp:275,mean20:289.5,note:"Estimación inicial indicada"}],
  logs:{},
  customSessions:{},
  selectedZone:"indoor",
  calendarWeek:0,
  calendarMode:"week"
};
let state = loadState();
let currentSession = null;

function loadState(){
  try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)); return saved ? {...structuredClone(defaultState),...saved,profile:{...defaultState.profile,...saved.profile},ftp:{...defaultState.ftp,...saved.ftp}} : structuredClone(defaultState); }
  catch(e){ return structuredClone(defaultState); }
}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function parseDate(s){const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12);}
function iso(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x;}
function fmt(d,opts={day:"numeric",month:"short"}){return d.toLocaleDateString("es-ES",opts);}
function todayISO(){return iso(new Date());}
function mondayOf(d){const x=new Date(d);x.setHours(12,0,0,0);x.setDate(x.getDate()-((x.getDay()+6)%7));return x;}
function weekIndexFor(d){const key=iso(mondayOf(d));return PLAN.findIndex(w=>w.start===key);}
function weekData(i){return PLAN[Math.max(0,Math.min(PLAN.length-1,i))];}
function pctRange(text){
  const m=text.match(/(\d{2,3})[–-](\d{2,3})%/);
  return m?{lo:+m[1]/100,hi:+m[2]/100}:null;
}
function getBikeForSession(text){return /carretera/i.test(text)||/over-unders/i.test(text)||/umbral/i.test(text)?(state.ftp.road?"road":"indoor"):"indoor";}
function calcTarget(text){
  const range=pctRange(text); if(!range)return "";
  const bike=getBikeForSession(text), ftp=state.ftp[bike]||state.ftp.indoor;
  return `${Math.round(ftp*range.lo)}–${Math.round(ftp*range.hi)} W (${bike==="road"?"carretera":"indoor"})`;
}
function sessionType(t){if(/test FTP|Test FTP/i.test(t))return "TEST FTP";if(/VO₂/i.test(t))return "VO₂ MÁX.";if(/over-unders/i.test(t))return "OVER-UNDERS";if(/SS/i.test(t))return "SWEET SPOT";if(/umbral|95–100|92–97/i.test(t))return "UMBRAL";if(/COMPETICIÓN/i.test(t))return "COMPETICIÓN";return "CICLISMO";}
function sessionDate(week,day){return addDays(parseDate(week.start),day);}
function getWorkout(week,day){
  const key=iso(sessionDate(week,day));
  const custom=state.customSessions[key];
  const entry=week.days?.[String(day)];
  const raw=custom?.description || (entry ? entry[0] : day===1?week.tue:day===3?week.thu:day===5?week.sat:day===6?week.sun:"");
  const title=entry?.[2] || (day===1?"Calidad / test":day===3?"Rodaje suave":day===5?"Fondo / objetivo":day===6?"Sesión opcional":"Sesión");
  return {date:key,day,title,description:raw,kind:entry?.[1]||sessionType(raw),duration:day===1?(raw.includes("Test FTP")?"45–60 min":"50–90 min"):day===3?"25–45 min":day===5?(raw.match(/(\d+ h(?:\s\d+ min)?)/)?.[0]||"Según plan"):day===6?"Opcional":"Según plan",week};
}
function getDailyEvents(date){
  const dow=date.getDay(),idx=weekIndexFor(date);
  if(idx<0 || idx>=PLAN.length)return [];
  const w=PLAN[idx],day=(dow+6)%7,events=[];
  if(w.customCalendar){
    const entry=w.days[String(day)];
    if(!entry)return [];
    return [{date:iso(date),day,title:entry[2],description:entry[0],kind:entry[1],week:w}];
  }
  if(day===0)events.push({title:"Gimnasio · tren superior",description:"Trabajo de fuerza de tren superior",kind:"gym"});
  if(day===1)events.push({...getWorkout(w,1),kind:"ride"});
  if(day===2)events.push({title:"Gimnasio · tren inferior",description:"Trabajo controlado, sin llegar al fallo",kind:"gym"});
  if(day===3){events.push({title:"Gimnasio · tren superior",description:"Trabajo de tren superior",kind:"gym"});events.push({...getWorkout(w,3),kind:"ride"});}
  if(day===4)events.push({title:"Gimnasio · cuerpo completo",description:"Piernas mínimas o muy ligeras antes del fondo",kind:"gym"});
  if(day===5)events.push({...getWorkout(w,5),kind:"ride"});
  if(day===6){
    const sun=w.sun||"Descanso.";
    if(!/^Descanso\.?$/i.test(sun))events.push({...getWorkout(w,6),kind:"ride"});
    else events.push({title:"Descanso",description:"Descanso o paseo muy suave opcional",kind:"rest"});
  }
  if(day===4 && w.week===22)events[0]={title:"Descanso precompetición",description:"Sin gimnasio de piernas",kind:"rest"};
  if(day===5 && w.week===22)events[0]={title:"Marcha objetivo · 120 km / 2.000 m+",description:"Competición · 24 de abril de 2027",kind:"event",...getWorkout(w,5)};
  return events;
}
function setView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  if(name==="calendar")renderCalendar();if(name==="zones")renderZones();if(name==="progress")renderProgress();if(name==="home")renderHome();
}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300);}
function renderHome(){
  const now=new Date(),idx=weekIndexFor(now),w=idx>=0?PLAN[idx]:PLAN[0],todayEvents=getDailyEvents(now),event=todayEvents.find(e=>e.kind==="ride"||e.kind==="event")||todayEvents[0];
  $("homeDate").textContent=fmt(now,{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  $("todayLabel").textContent=idx<0?"PLAN PERSONAL":`SEMANA ${w.week} · ${w.block.toUpperCase()}`;
  $("todayType").textContent=event?.kind==="event"?"COMPETICIÓN":(event?.kind==="ride"?event.kind==="ride"?sessionType(event.description):"HOY":"DÍA");
  $("todayTitle").textContent=event?.title||"Día sin sesión programada";
  $("todayDescription").textContent=event?.description||"Puedes descansar o registrar una actividad adicional.";
  $("todayDuration").textContent=event?.duration||"";
  $("homeIndoor").textContent=`${state.ftp.indoor} W`;
  $("homeRoad").textContent=state.ftp.road?`${state.ftp.road} W`:"Sin registrar";
  const target=new Date(2027,3,24,12),days=Math.ceil((target-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/86400000);
  $("countdown").textContent=days>=0?`${days} días`:"Objetivo superado";
  const start=mondayOf(now),events=[];
  for(let d=0;d<7;d++){const date=addDays(start,d);getDailyEvents(date).forEach(e=>{if(e.kind==="ride"||e.kind==="event"){const log=state.logs[e.date];events.push({e,log});}});}
  const done=events.filter(x=>x.log?.status==="done"||x.log?.status==="partial").length;
  $("weekProgress").textContent=`${done}/${events.length} sesiones de ciclismo registradas`;
  $("weekBar").style.width=(events.length?done/events.length*100:0)+"%";
  $("weekSummary").innerHTML=events.map(({e,log})=>`<div class="mini-item"><div class="left"><strong>${fmt(parseDate(e.date),{weekday:"short",day:"numeric",month:"short"})} · ${esc(e.title)}</strong><small>${esc(e.description)}</small></div><span class="status ${log?.status||""}">${log?.status==="done"?"Hecho":log?.status==="partial"?"Parcial":"Pendiente"}</span></div>`).join("")||'<p class="muted small">No hay sesiones en esta semana.</p>';
  $("todayDetails").onclick=()=>{if(event?.date)openSession(event);else setView("calendar");};
}
function renderCalendar(){
  const idx=state.calendarWeek,week=weekData(idx),start=parseDate(week.start),end=addDays(start,6);
  $("calendarTitle").textContent=`Semana ${week.week} · ${week.block} · ${fmt(start,{day:"numeric",month:"short"})}–${fmt(end,{day:"numeric",month:"short",year:"numeric"})}`;
  document.querySelectorAll("[data-cal]").forEach(b=>b.classList.toggle("active",b.dataset.cal===state.calendarMode));
  if(state.calendarMode==="list"){
    $("calendarContent").innerHTML=PLAN.map(w=>`<div class="day-card"><div class="day-head"><strong>Semana ${w.week} · ${esc(w.block)}</strong><small>${w.deload?"DESCARGA":""}</small></div>${(w.customCalendar?Object.keys(w.days).map(Number):[1,3,5,...(w.sun&&!/^Descanso\.?$/i.test(w.sun)?[6]:[])]).map(day=>{const e=w.customCalendar?{date:iso(sessionDate(w,day)),title:w.days[String(day)][2],description:w.days[String(day)][0],kind:w.days[String(day)][1]}:getWorkout(w,day);return eventHTML(e);}).join("")}</div>`).join("");
  }else{
    $("calendarContent").innerHTML=Array.from({length:7},(_,d)=>{const date=addDays(start,d),events=getDailyEvents(date);return `<div class="day-card"><div class="day-head"><strong>${fmt(date,{weekday:"long",day:"numeric",month:"long"})}</strong><small>${events.length} ${events.length===1?"actividad":"actividades"}</small></div>${events.map(e=>eventHTML(e)).join("")||'<small class="muted">Sin actividad programada</small>'}</div>`;}).join("");
  }
  $("calendarContent").querySelectorAll("[data-session-date]").forEach(btn=>btn.addEventListener("click",()=>{const date=btn.dataset.sessionDate;const picked=getDailyEvents(parseDate(date)).find(e=>e.kind==="ride"||e.kind==="event");if(picked)openSession(picked);}));
}
function eventHTML(e){
  const log=state.logs[e.date],cls=e.kind==="gym"?"gym":e.kind==="rest"?"rest":"";
  if(e.kind==="gym"||e.kind==="rest")return `<div class="event ${cls}"><div><strong>${esc(e.title)}</strong><small>${esc(e.description)}</small></div></div>`;
  return `<div class="event"><div><strong>${esc(e.title)}</strong><small>${esc(e.description)} ${calcTarget(e.description)? "· "+calcTarget(e.description):""}</small></div><button data-session-date="${e.date}" aria-label="Abrir sesión">›</button></div>`;
}
$("prevWeek").onclick=()=>{state.calendarWeek=Math.max(0,state.calendarWeek-1);saveState();renderCalendar();};
$("nextWeek").onclick=()=>{state.calendarWeek=Math.min(PLAN.length-1,state.calendarWeek+1);saveState();renderCalendar();};
document.querySelectorAll("[data-cal]").forEach(b=>b.addEventListener("click",()=>{state.calendarMode=b.dataset.cal;saveState();renderCalendar();}));
function openSession(e){
  currentSession=e;
  $("dialogEyebrow").textContent=`${e.kind||sessionType(e.description)} · ${fmt(parseDate(e.date),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}`;
  $("dialogTitle").textContent=e.title;
  const log=state.logs[e.date]||{};
  const target=calcTarget(e.description);
  $("dialogBody").innerHTML=`<div class="detail-block"><strong>Sesión prevista</strong>${esc(e.description)}${target?`<br><b>Objetivo de potencia orientativo: ${target}</b>`:""}<br><span class="muted">Cadencia: según bloque y terreno; normalmente 85–95 rpm en intervalos y Z2.</span></div>
  <form id="logForm" class="dialog-form">
    <div class="form-row"><label>Estado<select name="status"><option value="done" ${log.status==="done"?"selected":""}>Completada</option><option value="partial" ${log.status==="partial"?"selected":""}>Parcial</option><option value="missed" ${log.status==="missed"?"selected":""}>No realizada</option></select></label><label>Duración real (min)<input name="minutes" type="number" min="0" value="${log.minutes??""}" placeholder="Ej. 65"></label></div>
    <div class="form-row"><label>Distancia (km)<input name="km" type="number" min="0" step=".1" value="${log.km??""}"></label><label>Desnivel (m)<input name="climb" type="number" min="0" value="${log.climb??""}"></label></div>
    <div class="form-row"><label>Potencia media (W)<input name="power" type="number" min="0" value="${log.power??""}"></label><label>Potencia normalizada (W)<input name="np" type="number" min="0" value="${log.np??""}"></label></div>
    <div class="form-row"><label>FC media (bpm)<input name="hr" type="number" min="0" value="${log.hr??""}"></label><label>Cadencia media (rpm)<input name="cadence" type="number" min="0" value="${log.cadence??""}"></label></div>
    <div class="form-row"><label>RPE (1–10)<input name="rpe" type="number" min="1" max="10" value="${log.rpe??""}"></label><label>Hidratos (g/h)<input name="carbs" type="number" min="0" value="${log.carbs??""}"></label></div>
    <label>Sensaciones / notas<textarea name="notes" placeholder="Fatiga, sensaciones, nutrición, incidencias…">${esc(log.notes||"")}</textarea></label>
    <div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelLog">Cerrar</button><button class="btn btn-primary" type="submit">Guardar registro</button></div>
  </form>`;
  $("sessionDialog").showModal();
  $("cancelLog").onclick=()=>$("sessionDialog").close();
  $("logForm").onsubmit=ev=>{ev.preventDefault();const fd=new FormData(ev.target),obj={};for(const [k,v] of fd.entries())obj[k]=v===""?"":(["minutes","km","climb","power","np","hr","cadence","rpe","carbs"].includes(k)?Number(v):v);obj.date=e.date;obj.planned=e.description;obj.ftpUsed=state.ftp[getBikeForSession(e.description)]||state.ftp.indoor;obj.bike=getBikeForSession(e.description);state.logs[e.date]=obj;saveState();$("sessionDialog").close();renderHome();renderCalendar();renderProgress();toast("Entrenamiento guardado");};
}
$("closeDialog").onclick=()=>$("sessionDialog").close();
function renderZones(){
  $("ftpIndoor").value=state.ftp.indoor;$("ftpRoad").value=state.ftp.road||"";
  $("indoorUpdated").textContent=state.ftp.indoorDate?`Última actualización: ${state.ftp.indoorDate}`:"";
  $("roadUpdated").textContent=state.ftp.roadDate?`Última actualización: ${state.ftp.roadDate}`:"Aún sin test registrado";
  document.querySelectorAll("[data-zone]").forEach(b=>b.classList.toggle("active",b.dataset.zone===state.selectedZone));
  const ftp=state.ftp[state.selectedZone];
  const rows=[["Z1 · Recuperación",0,.55,"≤"],["Z2 · Resistencia",.56,.75,""],["Z3 · Tempo",.76,.90,""],["Sweet spot",.88,.94,""],["Z4 · Umbral",.91,1.05,""],["Z5 · VO₂ máx.",1.06,1.20,""],["Z6 · Anaeróbica",1.21,1.50,""]];
  $("zoneTable").innerHTML=ftp?rows.map(([name,a,b,prefix])=>`<div class="zone-row"><span class="zone-name"><i class="dot"></i>${name}</span><span class="zone-value">${prefix?prefix+Math.round(ftp*b):`${Math.round(ftp*a)}–${Math.round(ftp*b)}`} W</span></div>`).join(""):`<p class="muted">Registra un FTP de carretera para consultar estas zonas.</p>`;
  $("testHistory").innerHTML=state.ftpHistory.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="mini-item"><div class="left"><strong>${t.bike==="indoor"?"Indoor":"Carretera"} · ${t.ftp} W</strong><small>${t.date} · Media 20 min: ${t.mean20||"—"} W ${t.note? "· "+esc(t.note):""}</small></div><span class="status done">Test</span></div>`).join("")||'<p class="muted small">Todavía no hay tests registrados.</p>';
}
document.querySelectorAll("[data-zone]").forEach(b=>b.addEventListener("click",()=>{state.selectedZone=b.dataset.zone;saveState();renderZones();}));
function saveFTP(bike){
  const input=$(bike==="indoor"?"ftpIndoor":"ftpRoad"),v=Number(input.value);
  if(!v||v<80||v>600){toast("Introduce un FTP válido (80–600 W)");return;}
  state.ftp[bike]=v;state.ftp[bike+"Date"]=todayISO();
  state.ftpHistory.push({date:todayISO(),bike,ftp:v,note:"Actualización manual"});
  saveState();renderZones();renderHome();renderCalendar();toast("FTP actualizado; las sesiones futuras recalculan sus vatios");
}
$("saveIndoor").onclick=()=>saveFTP("indoor");$("saveRoad").onclick=()=>saveFTP("road");
$("addTest").onclick=()=>{
  $("dialogEyebrow").textContent="HISTORIAL FTP";$("dialogTitle").textContent="Registrar test FTP";
  $("dialogBody").innerHTML=`<form id="testForm" class="dialog-form"><label>Fecha<input name="date" type="date" value="${todayISO()}" required></label><label>Bicicleta<select name="bike"><option value="indoor">Indoor</option><option value="road">Carretera</option></select></label><label>Potencia media de 20 min (W)<input name="mean20" type="number" min="80" required></label><label>FTP estimado (95% de la media)<input name="ftp" type="number" readonly></label><label>Notas<textarea name="note"></textarea></label><div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelTest">Cancelar</button><button class="btn btn-primary">Guardar test</button></div></form>`;
  $("sessionDialog").showModal();const f=$("testForm"),mean=f.elements.mean20,ftp=f.elements.ftp;
  mean.addEventListener("input",()=>ftp.value=mean.value?Math.round(Number(mean.value)*.95):"");
  $("cancelTest").onclick=()=>$("sessionDialog").close();
  f.onsubmit=ev=>{ev.preventDefault();const obj={date:f.elements.date.value,bike:f.elements.bike.value,mean20:Number(mean.value),ftp:Math.round(Number(mean.value)*.95),note:f.elements.note.value};state.ftpHistory.push(obj);state.ftp[obj.bike]=obj.ftp;state.ftp[obj.bike+"Date"]=obj.date;saveState();$("sessionDialog").close();renderZones();renderHome();renderCalendar();toast("Test FTP guardado");};
};
function drawChart(canvas,labels,values,label){
  const ctx=canvas.getContext("2d"),w=canvas.clientWidth||320,h=190,dpr=window.devicePixelRatio||1;
  canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);
  const pad={l:32,r:10,t:15,b:35},max=Math.max(1,...values)*1.18,plotH=h-pad.t-pad.b,plotW=w-pad.l-pad.r;
  ctx.strokeStyle="#e8edf0";ctx.fillStyle="#83909d";ctx.font="10px sans-serif";
  for(let i=0;i<4;i++){const y=pad.t+plotH*i/3;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();}
  if(!values.length)return;
  const gap=plotW/values.length,barW=Math.min(25,gap*.55);
  values.forEach((v,i)=>{const bh=v/max*plotH,x=pad.l+i*gap+(gap-barW)/2,y=pad.t+plotH-bh;ctx.fillStyle="#3b8a70";ctx.beginPath();ctx.roundRect(x,y,barW,bh,5);ctx.fill();ctx.fillStyle="#7b8794";ctx.textAlign="center";ctx.fillText(labels[i],x+barW/2,h-12);});
  ctx.fillStyle="#3b8a70";ctx.textAlign="left";ctx.fillText(label, pad.l,10);
}
function renderProgress(){
  const logs=Object.values(state.logs),valid=logs.filter(l=>l.status==="done"||l.status==="partial");
  const sum=k=>valid.reduce((a,l)=>a+(Number(l[k])||0),0);
  $("statDone").textContent=valid.length;$("statHours").textContent=(sum("minutes")/60).toFixed(1)+" h";$("statKm").textContent=sum("km").toFixed(1)+" km";$("statClimb").textContent=Math.round(sum("climb"))+" m";
  const weeks=PLAN.slice(0,Math.max(1,weekIndexFor(new Date())+1)).slice(-8);
  const vals=weeks.map(w=>Object.values(state.logs).filter(l=>l.date>=w.start&&l.date<=iso(addDays(parseDate(w.start),6))).reduce((a,l)=>a+(Number(l.minutes)||0)/60,0));
  drawChart($("hoursChart"),weeks.map(w=>`S${w.week}`),vals,"Horas registradas");
  const hist=state.ftpHistory.slice().sort((a,b)=>a.date.localeCompare(b.date)).slice(-8);
  const road=hist.filter(x=>x.bike==="road"),indoor=hist.filter(x=>x.bike==="indoor");
  drawChart($("ftpChart"),hist.map(x=>x.date.slice(5)),hist.map(x=>x.ftp),"FTP (W)");
  const planned=Object.keys(state.logs).length,done=valid.length,partial=logs.filter(l=>l.status==="partial").length,missed=logs.filter(l=>l.status==="missed").length;
  $("completionBreakdown").innerHTML=`<div class="zone-row"><span>Completadas</span><strong>${done}</strong></div><div class="barline"><span style="width:${planned?done/planned*100:0}%"></span></div><div class="zone-row"><span>Parciales</span><strong>${partial}</strong></div><div class="zone-row"><span>No realizadas</span><strong>${missed}</strong></div><p class="hint">El cumplimiento se calcula sobre las sesiones que has registrado, no sobre todas las sesiones previstas.</p>`;
}
$("saveProfile").onclick=()=>{state.profile.name=$("athleteName").value||"Ciclista";state.profile.weight=Number($("athleteWeight").value)||76;saveState();toast("Perfil guardado");};
function exportData(){
  const blob=new Blob([JSON.stringify({app:"Mi Plan Ciclista",version:1,exportedAt:new Date().toISOString(),state},null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`mi-plan-ciclista-${todayISO()}.json`;a.click();URL.revokeObjectURL(a.href);toast("Copia de seguridad exportada");
}
$("exportData").onclick=exportData;$("backupQuick").onclick=exportData;
$("importData").onchange=async ev=>{const file=ev.target.files[0];if(!file)return;try{const obj=JSON.parse(await file.text());if(!obj.state||!obj.state.ftp||!obj.state.logs)throw new Error("Formato no válido");if(confirm("La importación sustituirá los datos actuales. ¿Continuar?")){state=obj.state;saveState();location.reload();}}catch(e){toast("No se pudo importar el archivo");}ev.target.value="";};
$("resetData").onclick=()=>{if(confirm("¿Seguro que quieres borrar todos los registros y volver a los valores iniciales? Exporta antes una copia si quieres conservarlos.")){localStorage.removeItem(STORAGE_KEY);location.reload();}};
$("athleteName").value=state.profile.name;$("athleteWeight").value=state.profile.weight;
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function init(){
  const idx=weekIndexFor(new Date());state.calendarWeek=idx>=0?idx:0;
  renderHome();renderCalendar();renderZones();renderProgress();
  if("serviceWorker" in navigator && location.protocol!=="file:"){navigator.serviceWorker.register("./sw.js").catch(()=>{});}
}
window.addEventListener("resize",()=>{if($("view-progress").classList.contains("active"))renderProgress();});
init();
