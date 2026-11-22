const PLAN = [{"week": 1, "start": "2026-11-23", "block": "Adaptación", "deload": false, "tue": "Test FTP indoor 20 min", "thu": "30 min Z1–Z2", "sat": "3 h Z2"}, {"week": 2, "start": "2026-11-30", "block": "Adaptación", "deload": false, "tue": "3×10 min al 80–85% · rec. 5 min", "thu": "30–35 min Z1–Z2", "sat": "3 h Z2; opcional últimos 15–20 min tempo suave"}, {"week": 3, "start": "2026-12-07", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 80–85% · rec. 5 min", "thu": "35 min Z1–Z2", "sat": "3 h 15 min Z2"}, {"week": 4, "start": "2026-12-14", "block": "Base aeróbica", "deload": false, "tue": "2×15 min al 85–88% · rec. 6 min", "thu": "35–40 min fácil; opcional 4×1 min a 100–110 rpm", "sat": "3 h 30 min Z2; opcional 2×10 min tempo en subida"}, {"week": 5, "start": "2026-12-21", "block": "Base aeróbica", "deload": false, "tue": "3×8 min SS al 88–92% · rec. 4 min", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 6, "start": "2026-12-28", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85% · rec. 5 min", "thu": "25–30 min fácil", "sat": "2 h 30 min Z2 suave"}, {"week": 7, "start": "2027-01-04", "block": "Base aeróbica", "deload": false, "tue": "Test FTP carretera 20 min si ya estás familiarizado; si no, 3×10 min al 85% indoor", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 8, "start": "2027-01-11", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 85–88% · rec. 5 min", "thu": "40 min fácil", "sat": "3 h 45 min Z2; opcional 2×10 min tempo en subida"}, {"week": 9, "start": "2027-01-18", "block": "Base aeróbica", "deload": false, "tue": "3×10 min SS al 88–92% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2, sin bloques intensos"}, {"week": 10, "start": "2027-01-25", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "2 h 45 min Z2 suave"}, {"week": 11, "start": "2027-02-01", "block": "Base aeróbica", "deload": false, "tue": "4×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h Z2, sin intensidad"}, {"week": 12, "start": "2027-02-08", "block": "Base aeróbica", "deload": false, "tue": "Test FTP indoor 20 min si recuperado; alternativa 2×10 min tempo", "thu": "30 min fácil", "sat": "3 h 30 min Z2"}, {"week": 13, "start": "2027-02-15", "block": "Desarrollo", "deload": false, "tue": "3×8 min al 95–100% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2; opcional 2×12 min tempo"}, {"week": 14, "start": "2027-02-22", "block": "Desarrollo", "deload": false, "tue": "5×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2, sin intensidad"}, {"week": 15, "start": "2027-03-01", "block": "Desarrollo", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2; opcional 2×15 min tempo en subida"}, {"week": 16, "start": "2027-03-08", "block": "Desarrollo", "deload": true, "tue": "Test FTP carretera 20 min si recuperado; alternativa 2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "3 h Z2 suave"}, {"week": 17, "start": "2027-03-15", "block": "Preparación específica", "deload": false, "tue": "2×15 min al 92–97% · rec. 7 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2 + 2×15 min tempo en subida"}, {"week": 18, "start": "2027-03-22", "block": "Preparación específica", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 30 min con desnivel, Z2 + 2×20 min tempo en subida"}, {"week": 19, "start": "2027-03-29", "block": "Preparación específica", "deload": true, "tue": "2×10 min al 85–90% · rec. 5 min", "thu": "25–30 min fácil", "sat": "3 h Z2 suave, sin intensidad"}, {"week": 20, "start": "2027-04-05", "block": "Preparación específica", "deload": false, "tue": "2×12 min over-unders: 2 min 102–105% + 4 min 90–95% · rec. 6 min; si fatiga, 2×12 min tempo alto", "thu": "30 min fácil", "sat": "3 h 30 min–4 h Z2; opcional 2×12 min tempo en subida"}, {"week": 21, "start": "2027-04-12", "block": "Puesta a punto", "deload": false, "tue": "3×5 min al 90–95% · rec. 4 min", "thu": "30 min fácil", "sat": "1 h 45 min–2 h 15 min Z1–Z2, sin intervalos"}, {"week": 22, "start": "2027-04-19", "block": "Puesta a punto", "deload": false, "tue": "45–50 min con 3×3 min al 90–95% · rec. 4 min", "thu": "25–30 min muy fácil; opcional 3×30 s a 100–110 rpm", "sat": "COMPETICIÓN 24 ABR: 120 km · 2.000 m+"}];
const EXTENDED_PLAN = [{"week": 23, "start": "2027-04-26", "block": "Recuperación y transición", "deload": true, "tue": "Recuperación: descanso o 20–30 min en Z1 (≤55 % FTP), solo sin fatiga residual; 85–95 rpm.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm; si hay molestias o cansancio, descanso.", "sat": "60–90 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 24, "start": "2027-05-03", "block": "Recuperación y transición", "deload": false, "tue": "45 min Z1–Z2 (50–70 % FTP), 85–95 rpm.", "thu": "30–40 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm.", "sat": "2 h Z2 baja (56–65 % FTP), 85–95 rpm; evitar puertos exigentes.", "sun": "Descanso."}, {"week": 25, "start": "2027-05-10", "block": "Recuperación y transición", "deload": false, "tue": "Calentamiento 15 min; 2 × 10 min al 76–82 % FTP, rec. 5 min Z1; 85–95 rpm; enfriar hasta unos 60 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–72 % FTP), 85–95 rpm en llano; desnivel moderado, sin bloques obligatorios.", "sun": "Descanso."}, {"week": 26, "start": "2027-05-17", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot bajo: 15 min calentamiento; 3 × 12 min al 85–88 % FTP, rec. 5 min Z1–Z2; 85–95 rpm; 10 min enfriamiento. Total 70–75 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h 30 min Z2 (56–75 % FTP); 85–95 rpm llano, 75–90 rpm subida; desnivel moderado, sin intervalos obligatorios.", "sun": "Descanso."}, {"week": 27, "start": "2027-05-24", "block": "Base aeróbica específica", "deload": false, "tue": "Tempo alto: 15 min calentamiento; 2 × 20 min al 85–90 % FTP, rec. 7 min; 85–95 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), incluir 2 × 12 min al 80–85 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso o 45 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 28, "start": "2027-05-31", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 3 × 15 min al 88–92 % FTP, rec. 6 min; 85–95 rpm llano o 75–90 rpm subida; 10 min enfriamiento. Total 80–90 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), con desnivel; 2 × 15 min al 80–88 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 29, "start": "2027-06-07", "block": "Base aeróbica específica", "deload": true, "tue": "15 min calentamiento; 2 × 12 min al 80–85 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin tempo ni subidas exigentes.", "sun": "Descanso."}, {"week": 30, "start": "2027-06-14", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min Z1–Z2; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), con desnivel; 2 × 20 min al 80–88 % FTP en subida, rec. 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 31, "start": "2027-06-21", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "VO₂ máx.: 15–20 min calentamiento; 4 × 4 min al 108–115 % FTP, rec. 4 min Z1; 90–105 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), desnivel moderado, sin bloques de intensidad obligatorios.", "sun": "Descanso."}, {"week": 32, "start": "2027-06-28", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; 2 × 20 min al 80–88 % FTP en subida, preferentemente segunda mitad si buenas sensaciones; 75–90 rpm.", "sun": "Opcional: 45–60 min Z1 (≤55 % FTP), 85–95 rpm; solo con buena recuperación."}, {"week": 33, "start": "2027-07-05", "block": "Descarga", "deload": true, "tue": "15 min calentamiento; 2 × 10 min al 85–88 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin bloques de intensidad.", "sun": "Descanso."}, {"week": 34, "start": "2027-07-12", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 25 min al 88–92 % FTP, rec. 8 min; 80–90 rpm; 10 min enfriamiento. Total aprox. 90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 30–40 min al 75–82 % FTP. Si buenas sensaciones, añadir 2 × 12 min al 85–88 % FTP, rec. 8 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 35, "start": "2027-07-19", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral controlado: 15–20 min calentamiento; 3 × 15 min al 90–95 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 85–95 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 45 min Z2 (56–75 % FTP), bastante desnivel; ascensión continua 40–50 min principalmente al 70–82 % FTP; 75–90 rpm.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; solo sin fatiga muscular relevante."}, {"week": 36, "start": "2027-07-26", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "5 h Z2 (56–75 % FTP), desnivel importante; dos ascensiones de 30–45 min al 70–82 % FTP separadas por recuperación Z1–Z2; 75–90 rpm, sin esfuerzos máximos.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm, solo con buena recuperación."}, {"week": 37, "start": "2027-08-02", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 45–60 min al 70–82 % FTP; no superar umbral sostenido; 75–90 rpm.", "sun": "Descanso o 60 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 38, "start": "2027-08-09", "block": "Taper y puesta a punto", "deload": false, "tue": "15 min calentamiento; 2 × 12 min al 88–92 % FTP, rec. 6 min; 85–95 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "30 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–70 % FTP), desnivel moderado, sin bloques de intensidad.", "sun": "Descanso."}, {"week": 39, "start": "2027-08-16", "block": "Taper y puesta a punto", "deload": false, "tue": "Activación: 15 min calentamiento; 2 × 8 min al 85–90 % FTP, rec. 5 min; añadir 3 × 1 min a 100–110 rpm con resistencia baja y 2 min suaves; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "2 h Z1–Z2 (50–65 % FTP), terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 40, "start": "2027-08-23", "block": "Activación previa y comienzo del viaje", "deload": true, "customCalendar": true, "days": {"0": ["Descanso.", "rest", "Descanso"], "1": ["Activación breve: 40–45 min en Z1–Z2; incluir 3 × 2 min al 85–90 % FTP, rec. 3 min suaves; cadencia 85–95 rpm.", "ride", "Activación"], "2": ["Descanso.", "rest", "Descanso"], "3": ["Adaptación: 60–90 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm. Sin intervalos ni ascensiones exigentes.", "ride", "Adaptación"], "4": ["Resistencia suave: 2–3 h en Z2 (56–75 % FTP); 85–95 rpm en llano y 75–90 rpm en subida. Si hay ascensión larga, mantener Z2 y evitar superar el 75 % FTP sostenido.", "ride", "Resistencia suave"], "5": ["Recuperación: descanso o 60–90 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "6": ["Resistencia con subida: 3–4 h en Z2 (56–75 % FTP). Si buenas sensaciones, ascensión de 30–45 min al 70–80 % FTP; cadencia en subida 75–90 rpm.", "ride", "Resistencia con subida"]}}, {"week": 41, "start": "2027-08-30", "block": "Viaje alpino", "deload": false, "customCalendar": true, "days": {"0": ["Recuperación: descanso o 45–60 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "1": ["Jornada de montaña: 3–5 h según ruta. Predominio Z2 (56–75 % FTP). En ascensiones largas, referencia 70–82 % FTP; cadencia 75–90 rpm. Evitar comenzar puertos por encima del umbral.", "ride", "Jornada de montaña"], "2": ["Recuperación: descanso o 45–60 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "3": ["Posible gran puerto: 3–5 h según recorrido. En ascensiones largas, preferentemente 70–82 % FTP. En tramos exigentes se puede superar puntualmente, evitando permanecer por encima del 90–95 % durante periodos prolongados; cadencia 75–90 rpm.", "ride", "Posible gran puerto"], "4": ["Recuperación: descanso o 30–60 min en Z1 (≤55 % FTP), si facilita la recuperación.", "ride", "Recuperación"], "5": ["Posible segunda gran jornada: 3–5 h según recorrido y recuperación. Z2 predominante; ascensiones largas al 70–82 % FTP. Si hay fatiga acumulada, reducir duración o sustituir por salida suave.", "ride", "Segunda gran jornada"], "6": ["Final del viaje: descanso o actividad muy suave según el desplazamiento.", "rest", "Final del viaje"]}}];
PLAN.push(...EXTENDED_PLAN);
const $ = id => document.getElementById(id);
const STORAGE_KEY = "cycling-plan-pwa-v1";
const defaultState = {
  profile:{name:"Ciclista",weight:76,hrMax:null},
  powerProfile:{p5: null,p60:null,p300:null,p1200:null},
  ftp:{indoor:275,road:null,indoorDate:null,roadDate:null},
  ftpHistory:[],
  logs:{},
  customSessions:{},
  selectedZone:"indoor",
  calendarWeek:0,
  calendarMode:"week"
};
let state = loadState();
let currentSession = null;

function loadState(){
  try {
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(!saved)return structuredClone(defaultState);
    const migrated={...structuredClone(defaultState),...saved,profile:{...defaultState.profile,...saved.profile},powerProfile:{...defaultState.powerProfile,...saved.powerProfile},ftp:{...defaultState.ftp,...saved.ftp}};
    migrated.ftpHistory=Array.isArray(saved.ftpHistory)?saved.ftpHistory.filter(t=>!(t.note==="Estimación inicial indicada" && t.date==="2026-11-24" && Number(t.ftp)===275)):[];
    if(migrated.ftp.indoorDate==="2026-11-24" && migrated.ftpHistory.length===0)migrated.ftp.indoorDate=null;
    return migrated;
  } catch(e){ return structuredClone(defaultState); }
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
function getBikeForSession(text){return /carretera/i.test(text)?(state.ftp.road?"road":"indoor"):"indoor";}
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
  $("todayType").textContent=event?.kind==="event"?"COMPETICIÓN":(event?.kind==="ride"?sessionType(event.description):event?.kind==="gym"?"GIMNASIO":event?.kind==="rest"?"DESCANSO":"DÍA");
  $("todayTitle").textContent=event?.title||"Día sin sesión programada";
  $("todayDescription").textContent=event?.description||"No hay una sesión planificada para hoy.";
  $("todayDuration").textContent=event?.duration||"";
  $("homeIndoor").textContent=`${state.ftp.indoor} W`;
  $("homeRoad").textContent=state.ftp.road?`${state.ftp.road} W`:"Sin registrar";
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const targets=[{id:"marchCountdown",date:new Date(2027,3,24),label:"marcha"},{id:"alpsCountdown",date:new Date(2027,7,26),label:"viaje"}];
  const daysTo=(d)=>Math.ceil((d-today)/86400000);
  const firstDays=daysTo(targets[0].date);$("countdown").textContent=firstDays>=0?`${firstDays} días` : "Superado";
  targets.forEach(t=>{const el=$(t.id);if(el){const n=daysTo(t.date);el.textContent=n>=0?`${n} días restantes`:`Hace ${Math.abs(n)} días`;}});
  const start=mondayOf(now),events=[];
  for(let d=0;d<7;d++){const date=addDays(start,d);getDailyEvents(date).forEach(e=>{if(e.kind==="ride"||e.kind==="event"){const log=state.logs[e.date];events.push({e,log});}});}
  const done=events.filter(x=>x.log?.status==="done"||x.log?.status==="partial").length;
  $("weekProgress").textContent=`${done}/${events.length} sesiones de ciclismo completadas`;
  $("weekBar").style.width=(events.length?done/events.length*100:0)+"%";
  $("weekSummary").innerHTML=`<div class="mini-item"><div class="left"><strong>${done} de ${events.length} sesiones realizadas</strong><small>${events.filter(x=>x.log?.status==="done").length} completas · ${events.filter(x=>x.log?.status==="partial").length} parciales · ${events.length-done} pendientes</small></div></div>`;
  $("homeCalendarWeek").textContent=`${fmt(start,{day:"numeric",month:"short"})} – ${fmt(addDays(start,6),{day:"numeric",month:"short"})}`;
  $("homeWeekCalendar").innerHTML=Array.from({length:7},(_,d)=>{const date=addDays(start,d),dayEvents=getDailyEvents(date);return `<div class="home-day"><div class="home-day-head"><strong>${fmt(date,{weekday:"short",day:"numeric"})}</strong><small>${dayEvents.length?dayEvents.length+ (dayEvents.length===1?" actividad":" actividades"):"Libre"}</small></div>${dayEvents.map(e=>{const log=state.logs[e.date],click=(e.kind==="ride"||e.kind==="event")?`data-home-session="${e.date}"`:"";return `<div class="home-event ${e.kind}"><span>${esc(e.title)}</span>${log?.status==="done"?'<b>✓</b>':log?.status==="partial"?'<b>◐</b>':''}${click?`<button ${click} aria-label="Abrir sesión">›</button>`:""}</div>`;}).join("")}</div>`;}).join("");
  $("homeWeekCalendar").querySelectorAll("[data-home-session]").forEach(btn=>btn.addEventListener("click",()=>{const date=btn.dataset.homeSession;const ev=getDailyEvents(parseDate(date)).find(e=>e.kind==="ride"||e.kind==="event");if(ev)openSession(ev);}));
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
  const inferredBike=getBikeForSession(e.description);
  $("dialogBody").innerHTML=`<div class="detail-block"><strong>Sesión prevista</strong>${esc(e.description)}<br><b id="targetPower"></b><br><span class="muted">Cadencia: según bloque y terreno; normalmente 85–95 rpm en intervalos y Z2.</span></div>
  <form id="logForm" class="dialog-form">
    <label>Bicicleta utilizada<select name="bike"><option value="indoor">Indoor / rodillo</option><option value="road">Carretera</option></select></label>
    <div class="form-row"><label>Estado<select name="status"><option value="done" ${log.status==="done"?"selected":""}>Completada</option><option value="partial" ${log.status==="partial"?"selected":""}>Parcial</option><option value="missed" ${log.status==="missed"?"selected":""}>No realizada</option></select></label><label>Duración real (min)<input name="minutes" type="number" min="0" value="${log.minutes??""}" placeholder="Ej. 65"></label></div>
    <div class="form-row"><label>Distancia (km)<input name="km" type="number" min="0" step=".1" value="${log.km??""}"></label><label>Desnivel (m)<input name="climb" type="number" min="0" value="${log.climb??""}"></label></div>
    <div class="form-row"><label>Potencia media (W)<input name="power" type="number" min="0" value="${log.power??""}"></label><label>Potencia normalizada (W)<input name="np" type="number" min="0" value="${log.np??""}"></label></div>
    <div class="form-row"><label>FC media (bpm)<input name="hr" type="number" min="0" value="${log.hr??""}"></label><label>FC máxima (bpm)<input name="hrMax" type="number" min="0" value="${log.hrMax??""}"></label></div>
    <div class="form-row"><label>Cadencia media (rpm)<input name="cadence" type="number" min="0" value="${log.cadence??""}"></label><label>RPE (1–10)<input name="rpe" type="number" min="1" max="10" value="${log.rpe??""}"></label></div>
    <label>Sensación de piernas (1–5)<input name="legs" type="number" min="1" max="5" value="${log.legs??""}" placeholder="1 muy pesadas · 5 muy frescas"></label>
    <label>Sensaciones / notas<textarea name="notes" placeholder="Fatiga, sensaciones, nutrición, incidencias…">${esc(log.notes||"")}</textarea></label>
    <div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelLog">Cerrar</button><button class="btn btn-primary" type="submit">Guardar registro</button></div>
  </form>`;
  $("sessionDialog").showModal();
  const bikeSelect=$("logForm").elements.bike;bikeSelect.value=log.bike||inferredBike;
  const updateTarget=()=>{const range=pctRange(e.description),bike=bikeSelect.value,ftp=state.ftp[bike];$("targetPower").textContent=range&&ftp?`Objetivo orientativo (${bike==="road"?"carretera":"indoor"}): ${Math.round(ftp*range.lo)}–${Math.round(ftp*range.hi)} W`:range?"Registra un FTP para esta bicicleta para calcular los vatios.":"";};
  bikeSelect.addEventListener("change",updateTarget);updateTarget();
  $("cancelLog").onclick=()=>$("sessionDialog").close();
  $("logForm").onsubmit=ev=>{ev.preventDefault();const fd=new FormData(ev.target),obj={};for(const [k,v] of fd.entries())obj[k]=v===""?"":(["minutes","km","climb","power","np","hr","cadence","rpe","hrMax","legs"].includes(k)?Number(v):v);obj.date=e.date;obj.planned=e.description;obj.bike=obj.bike||inferredBike;obj.ftpUsed=state.ftp[obj.bike]||null;state.logs[e.date]=obj;saveState();$("sessionDialog").close();renderHome();renderCalendar();renderProgress();toast("Entrenamiento guardado");};
}
$("closeDialog").onclick=()=>$("sessionDialog").close();
function renderZones(){
  $("ftpIndoor").value=state.ftp.indoor;$("ftpRoad").value=state.ftp.road||"";
  $("indoorUpdated").textContent=state.ftp.indoorDate?`Última actualización: ${state.ftp.indoorDate}`:"Estimación inicial: confirma con un test cuando corresponda";
  $("roadUpdated").textContent=state.ftp.roadDate?`Última actualización: ${state.ftp.roadDate}`:"Aún sin test registrado";
  $("hrMaxInput").value=state.profile.hrMax||"";
  document.querySelectorAll("[data-zone]").forEach(b=>b.classList.toggle("active",b.dataset.zone===state.selectedZone));
  const ftp=state.ftp[state.selectedZone],weight=Number(state.profile.weight)||null,ratio=ftp&&weight?ftp/weight:null;
  const rows=[["Z1 · Recuperación",0,.55,"≤"],["Z2 · Resistencia",.56,.75,""],["Z3 · Tempo",.76,.90,""],["Sweet spot",.88,.94,""],["Z4 · Umbral",.91,1.05,""],["Z5 · VO₂ máx.",1.06,1.20,""],["Z6 · Anaeróbica",1.21,1.50,""]];
  $("zoneTable").innerHTML=ftp?rows.map(([name,a,b,prefix])=>{const watts=prefix?`≤${Math.round(ftp*b)} W`:`${Math.round(ftp*a)}–${Math.round(ftp*b)} W`;const wk=ratio?(prefix?`≤${(ratio*b).toFixed(2)}`:`${(ratio*a).toFixed(2)}–${(ratio*b).toFixed(2)}`):"—";return `<div class="zone-row"><span class="zone-name"><i class="dot"></i>${name}</span><span class="zone-value">${watts}<small class="zone-wkg"> · ${wk} W/kg</small></span></div>`;}).join(""):`<p class="muted">Registra un FTP de carretera para consultar estas zonas.</p>`;
  const hr=Number(state.profile.hrMax);
  const hrRows=[["Z1 · Muy suave",.50,.60],["Z2 · Suave",.60,.70],["Z3 · Aeróbica",.70,.80],["Z4 · Umbral",.80,.90],["Z5 · Máxima",.90,1.00]];
  $("hrZoneTable").innerHTML=hr?hrRows.map(([name,a,b])=>`<div class="zone-row"><span>${name}</span><strong>${Math.round(hr*a)}–${Math.round(hr*b)} bpm</strong></div>`).join(""):'<p class="muted">Introduce tu FC máxima para calcular las zonas.</p>';
  $("testHistory").innerHTML=state.ftpHistory.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="mini-item"><div class="left"><strong>${t.bike==="indoor"?"Indoor":"Carretera"} · ${t.ftp} W</strong><small>${t.date} · Media 20 min: ${t.mean20||"—"} W · Peso ${t.weight||"—"} kg · FC ${t.hrAvg||"—"}/${t.hrMax||"—"} bpm · ${(t.wkg??(t.weight? t.ftp/t.weight:null))?.toFixed(2)||"—"} W/kg ${t.note?"· "+esc(t.note):""}</small></div><span class="status ${t.mean20?"done":"partial"}">${t.mean20?"Test":"Manual"}</span></div>`).join("")||'<p class="muted small">Todavía no hay tests registrados.</p>';
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
$("saveHrMax").onclick=()=>{const v=Number($("hrMaxInput").value);if(!v||v<100||v>230){toast("Introduce una FC máxima válida (100–230 bpm)");return;}state.profile.hrMax=v;saveState();renderZones();toast("FC máxima guardada; zonas actualizadas");};
$("addTest").onclick=()=>{
  $("dialogEyebrow").textContent="HISTORIAL FTP";$("dialogTitle").textContent="Registrar test FTP";
  $("dialogBody").innerHTML=`<form id="testForm" class="dialog-form"><label>Fecha<input name="date" type="date" value="${todayISO()}" required></label><label>Bicicleta<select name="bike"><option value="indoor">Indoor</option><option value="road">Carretera</option></select></label><label>Potencia media de 20 min (W)<input name="mean20" type="number" min="80" required></label><label>FTP estimado (95% de la media)<input name="ftp" type="number" readonly></label><div class="form-row"><label>Peso corporal (kg)<input name="weight" type="number" min="30" max="200" step="0.1" value="${state.profile.weight||""}" required></label><label>W/kg (FTP / peso)<input name="wkg" type="number" readonly></label></div><div class="form-row"><label>FC media (bpm)<input name="hrAvg" type="number" min="0"></label><label>FC máxima (bpm)<input name="hrMax" type="number" min="0"></label></div><label>Notas<textarea name="note"></textarea></label><div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelTest">Cancelar</button><button class="btn btn-primary">Guardar test</button></div></form>`;
  $("sessionDialog").showModal();const f=$("testForm"),mean=f.elements.mean20,ftp=f.elements.ftp,weight=f.elements.weight,wkg=f.elements.wkg;
  const calc=()=>{ftp.value=mean.value?Math.round(Number(mean.value)*.95):"";wkg.value=ftp.value&&weight.value?(Number(ftp.value)/Number(weight.value)).toFixed(2):"";};
  mean.addEventListener("input",calc);weight.addEventListener("input",calc);calc();
  $("cancelTest").onclick=()=>$("sessionDialog").close();
  f.onsubmit=ev=>{ev.preventDefault();const obj={date:f.elements.date.value,bike:f.elements.bike.value,mean20:Number(mean.value),ftp:Math.round(Number(mean.value)*.95),weight:Number(weight.value),hrAvg:Number(f.elements.hrAvg.value)||null,hrMax:Number(f.elements.hrMax.value)||null,wkg:Number(wkg.value)||null,note:f.elements.note.value};state.ftpHistory.push(obj);state.ftp[obj.bike]=obj.ftp;state.ftp[obj.bike+"Date"]=obj.date;state.profile.weight=obj.weight;if(obj.hrMax)state.profile.hrMax=obj.hrMax;saveState();$("sessionDialog").close();renderZones();renderHome();renderCalendar();toast("Test FTP guardado");};
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
  const history=Object.values(state.logs).filter(l=>l.date).sort((a,b)=>b.date.localeCompare(a.date));
  $("historyCount").textContent=history.length+" registros";
  $("trainingHistory").innerHTML=history.length?history.map(l=>`<div class="mini-item"><div class="left"><strong>${fmt(parseDate(l.date),{day:"numeric",month:"short",year:"numeric"})} · ${l.bike==="road"?"Carretera":"Indoor"}</strong><small>${esc(l.planned||"Actividad")} · ${l.minutes||"—"} min · ${l.km||"—"} km · ${l.climb||0} m+ · FC ${l.hr||"—"}/${l.hrMax||"—"} · RPE ${l.rpe||"—"}</small></div><div class="history-actions"><button class="text-btn" data-edit="${l.date}">Editar</button><button class="text-btn danger" data-delete="${l.date}">Borrar</button></div></div>`).join(""):'<p class="muted small">Todavía no hay entrenamientos registrados.</p>';
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{const date=b.dataset.edit;const ev=getDailyEvents(parseDate(date)).find(x=>x.kind==="ride"||x.kind==="event")||{date,title:"Actividad registrada",description:state.logs[date].planned||"Actividad",kind:"ride"};openSession({...ev,date});});
  document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{const date=b.dataset.delete;if(confirm("¿Borrar el registro de este entrenamiento?")){delete state.logs[date];saveState();renderProgress();renderHome();renderCalendar();toast("Registro eliminado");}});
  const monday=mondayOf(new Date()),weekEnd=iso(addDays(monday,6));
  const weeks=PLAN.filter(w=>w.start<=iso(monday)).slice(-8);const vals=weeks.map(w=>Object.values(state.logs).filter(l=>l.date>=w.start&&l.date<=iso(addDays(parseDate(w.start),6))).reduce((a,l)=>a+(Number(l.minutes)||0)/60,0));
  drawChart($("hoursChart"),weeks.map(w=>`S${w.week}`),vals,"Horas registradas por semana");
  const weekLogs=valid.filter(l=>l.date>=iso(monday)&&l.date<=weekEnd),load=weekLogs.reduce((a,l)=>a+(Number(l.minutes)||0)*(Number(l.rpe)||0),0);
  $("loadSummary").innerHTML=`<div class="zone-row"><span>Carga registrada esta semana</span><strong>${Math.round(load)} UA</strong></div><p class="hint">${weekLogs.filter(l=>Number(l.rpe)>0).length} sesiones con RPE registrado. Minutos × RPE; referencia orientativa.</p>`;
  const hist=state.ftpHistory.slice().sort((a,b)=>a.date.localeCompare(b.date));const indoor=hist.filter(x=>x.bike==="indoor"),road=hist.filter(x=>x.bike==="road");
  drawChart($("ftpIndoorChart"),indoor.map(x=>x.date.slice(5)),indoor.map(x=>x.ftp),"FTP indoor (W)");drawChart($("ftpRoadChart"),road.map(x=>x.date.slice(5)),road.map(x=>x.ftp),"FTP carretera (W)");
  const pp=state.powerProfile||defaultState.powerProfile,weight=Number(state.profile.weight)||null;
  const powerRows=[["5 segundos","p5"],["1 minuto","p60"],["5 minutos","p300"],["20 minutos","p1200"]];
  $("powerProfileDisplay").innerHTML=powerRows.map(([label,key])=>{const v=Number(pp[key])||0;return `<div class="zone-row"><span>${label}</span><strong>${v?v+" W · "+(weight?(v/weight).toFixed(2)+" W/kg":"—"):"Sin registrar"}</strong></div>`;}).join("");
  const done=valid.length,partial=logs.filter(l=>l.status==="partial").length,missed=logs.filter(l=>l.status==="missed").length,planned=logs.length;
  $("completionBreakdown").innerHTML=`<div class="zone-row"><span>Completadas</span><strong>${logs.filter(l=>l.status==="done").length}</strong></div><div class="barline"><span style="width:${planned?done/planned*100:0}%"></span></div><div class="zone-row"><span>Parciales</span><strong>${partial}</strong></div><div class="zone-row"><span>No realizadas</span><strong>${missed}</strong></div>`;
}
$("editPowerProfile").onclick=()=>{
  const p=state.powerProfile||defaultState.powerProfile;
  $("dialogEyebrow").textContent="RENDIMIENTO";$("dialogTitle").textContent="Editar perfil de potencia";
  $("dialogBody").innerHTML=`<form id="powerProfileForm" class="dialog-form"><p class="muted small">Introduce tus mejores potencias máximas conocidas, preferiblemente medidas en esfuerzos recientes y comparables.</p><div class="form-row"><label>5 segundos (W)<input name="p5" type="number" min="0" value="${p.p5||""}"></label><label>1 minuto (W)<input name="p60" type="number" min="0" value="${p.p60||""}"></label></div><div class="form-row"><label>5 minutos (W)<input name="p300" type="number" min="0" value="${p.p300||""}"></label><label>20 minutos (W)<input name="p1200" type="number" min="0" value="${p.p1200||""}"></label></div><div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelPowerProfile">Cancelar</button><button class="btn btn-primary">Guardar perfil</button></div></form>`;
  $("sessionDialog").showModal();$("cancelPowerProfile").onclick=()=>$("sessionDialog").close();
  $("powerProfileForm").onsubmit=ev=>{ev.preventDefault();const fd=new FormData(ev.target);state.powerProfile={};for(const k of ["p5","p60","p300","p1200"])state.powerProfile[k]=Number(fd.get(k))||null;saveState();$("sessionDialog").close();renderProgress();toast("Perfil de potencia actualizado");};
};
$("saveProfile").onclick=()=>{state.profile.name=$("athleteName").value||"Ciclista";state.profile.weight=Number($("athleteWeight").value)||76;saveState();renderZones();renderProgress();toast("Perfil guardado");};
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
