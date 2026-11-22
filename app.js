const PLAN = [{"week": 1, "start": "2026-11-23", "block": "Adaptación", "deload": false, "tue": "Test FTP indoor 20 min", "thu": "30 min Z1–Z2", "sat": "3 h Z2"}, {"week": 2, "start": "2026-11-30", "block": "Adaptación", "deload": false, "tue": "3×10 min al 80–85% · rec. 5 min", "thu": "30–35 min Z1–Z2", "sat": "3 h Z2; opcional últimos 15–20 min tempo suave"}, {"week": 3, "start": "2026-12-07", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 80–85% · rec. 5 min", "thu": "35 min Z1–Z2", "sat": "3 h 15 min Z2"}, {"week": 4, "start": "2026-12-14", "block": "Base aeróbica", "deload": false, "tue": "2×15 min al 85–88% · rec. 6 min", "thu": "35–40 min fácil; opcional 4×1 min a 100–110 rpm", "sat": "3 h 30 min Z2; opcional 2×10 min tempo en subida"}, {"week": 5, "start": "2026-12-21", "block": "Base aeróbica", "deload": false, "tue": "3×8 min SS al 88–92% · rec. 4 min", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 6, "start": "2026-12-28", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85% · rec. 5 min", "thu": "25–30 min fácil", "sat": "2 h 30 min Z2 suave"}, {"week": 7, "start": "2027-01-04", "block": "Base aeróbica", "deload": false, "tue": "Test FTP carretera 20 min si ya estás familiarizado; si no, 3×10 min al 85% indoor", "thu": "30–35 min fácil", "sat": "3 h 30 min Z2"}, {"week": 8, "start": "2027-01-11", "block": "Base aeróbica", "deload": false, "tue": "3×12 min al 85–88% · rec. 5 min", "thu": "40 min fácil", "sat": "3 h 45 min Z2; opcional 2×10 min tempo en subida"}, {"week": 9, "start": "2027-01-18", "block": "Base aeróbica", "deload": false, "tue": "3×10 min SS al 88–92% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2, sin bloques intensos"}, {"week": 10, "start": "2027-01-25", "block": "Base aeróbica", "deload": true, "tue": "2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "2 h 45 min Z2 suave"}, {"week": 11, "start": "2027-02-01", "block": "Base aeróbica", "deload": false, "tue": "4×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h Z2, sin intensidad"}, {"week": 12, "start": "2027-02-08", "block": "Base aeróbica", "deload": false, "tue": "Test FTP indoor 20 min si recuperado; alternativa 2×10 min tempo", "thu": "30 min fácil", "sat": "3 h 30 min Z2"}, {"week": 13, "start": "2027-02-15", "block": "Desarrollo", "deload": false, "tue": "3×8 min al 95–100% · rec. 5 min", "thu": "35 min fácil", "sat": "4 h Z2; opcional 2×12 min tempo"}, {"week": 14, "start": "2027-02-22", "block": "Desarrollo", "deload": false, "tue": "5×3 min VO₂ al 110–115% · rec. 3 min · 90–105 rpm", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2, sin intensidad"}, {"week": 15, "start": "2027-03-01", "block": "Desarrollo", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2; opcional 2×15 min tempo en subida"}, {"week": 16, "start": "2027-03-08", "block": "Desarrollo", "deload": true, "tue": "Test FTP carretera 20 min si recuperado; alternativa 2×10 min al 80–85%", "thu": "25–30 min fácil", "sat": "3 h Z2 suave"}, {"week": 17, "start": "2027-03-15", "block": "Preparación específica", "deload": false, "tue": "2×15 min al 92–97% · rec. 7 min", "thu": "30–35 min fácil", "sat": "4 h 15 min Z2 + 2×15 min tempo en subida"}, {"week": 18, "start": "2027-03-22", "block": "Preparación específica", "deload": false, "tue": "3×10 min over-unders: 2 min 102–105% + 3 min 90–95% · rec. 6 min", "thu": "30–35 min fácil", "sat": "4 h 30 min con desnivel, Z2 + 2×20 min tempo en subida"}, {"week": 19, "start": "2027-03-29", "block": "Preparación específica", "deload": true, "tue": "2×10 min al 85–90% · rec. 5 min", "thu": "25–30 min fácil", "sat": "3 h Z2 suave, sin intensidad"}, {"week": 20, "start": "2027-04-05", "block": "Preparación específica", "deload": false, "tue": "2×12 min over-unders: 2 min 102–105% + 4 min 90–95% · rec. 6 min; si fatiga, 2×12 min tempo alto", "thu": "30 min fácil", "sat": "3 h 30 min–4 h Z2; opcional 2×12 min tempo en subida"}, {"week": 21, "start": "2027-04-12", "block": "Puesta a punto", "deload": false, "tue": "3×5 min al 90–95% · rec. 4 min", "thu": "30 min fácil", "sat": "1 h 45 min–2 h 15 min Z1–Z2, sin intervalos"}, {"week": 22, "start": "2027-04-19", "block": "Puesta a punto", "deload": false, "tue": "45–50 min con 3×3 min al 90–95% · rec. 4 min", "thu": "25–30 min muy fácil; opcional 3×30 s a 100–110 rpm", "sat": "COMPETICIÓN 24 ABR: 120 km · 2.000 m+"}];
const EXTENDED_PLAN = [{"week": 23, "start": "2027-04-26", "block": "Recuperación y transición", "deload": true, "tue": "Recuperación: descanso o 20–30 min en Z1 (≤55 % FTP), solo sin fatiga residual; 85–95 rpm.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm; si hay molestias o cansancio, descanso.", "sat": "60–90 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 24, "start": "2027-05-03", "block": "Recuperación y transición", "deload": false, "tue": "45 min Z1–Z2 (50–70 % FTP), 85–95 rpm.", "thu": "30–40 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm.", "sat": "2 h Z2 baja (56–65 % FTP), 85–95 rpm; evitar puertos exigentes.", "sun": "Descanso."}, {"week": 25, "start": "2027-05-10", "block": "Recuperación y transición", "deload": false, "tue": "Calentamiento 15 min; 2 × 10 min al 76–82 % FTP, rec. 5 min Z1; 85–95 rpm; enfriar hasta unos 60 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–72 % FTP), 85–95 rpm en llano; desnivel moderado, sin bloques obligatorios.", "sun": "Descanso."}, {"week": 26, "start": "2027-05-17", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot bajo: 15 min calentamiento; 3 × 12 min al 85–88 % FTP, rec. 5 min Z1–Z2; 85–95 rpm; 10 min enfriamiento. Total 70–75 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h 30 min Z2 (56–75 % FTP); 85–95 rpm llano, 75–90 rpm subida; desnivel moderado, sin intervalos obligatorios.", "sun": "Descanso."}, {"week": 27, "start": "2027-05-24", "block": "Base aeróbica específica", "deload": false, "tue": "Tempo alto: 15 min calentamiento; 2 × 20 min al 85–90 % FTP, rec. 7 min; 85–95 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), incluir 2 × 12 min al 80–85 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso o 45 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 28, "start": "2027-05-31", "block": "Base aeróbica específica", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 3 × 15 min al 88–92 % FTP, rec. 6 min; 85–95 rpm llano o 75–90 rpm subida; 10 min enfriamiento. Total 80–90 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), con desnivel; 2 × 15 min al 80–88 % FTP en subida, rec. al menos 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 29, "start": "2027-06-07", "block": "Base aeróbica específica", "deload": true, "tue": "15 min calentamiento; 2 × 12 min al 80–85 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin tempo ni subidas exigentes.", "sun": "Descanso."}, {"week": 30, "start": "2027-06-14", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min Z1–Z2; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h Z2 (56–75 % FTP), con desnivel; 2 × 20 min al 80–88 % FTP en subida, rec. 10 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 31, "start": "2027-06-21", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "VO₂ máx.: 15–20 min calentamiento; 4 × 4 min al 108–115 % FTP, rec. 4 min Z1; 90–105 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "35–40 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 15 min Z2 (56–75 % FTP), desnivel moderado, sin bloques de intensidad obligatorios.", "sun": "Descanso."}, {"week": 32, "start": "2027-06-28", "block": "Desarrollo de resistencia en subida", "deload": false, "tue": "Sweet spot: 15 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; 2 × 20 min al 80–88 % FTP en subida, preferentemente segunda mitad si buenas sensaciones; 75–90 rpm.", "sun": "Opcional: 45–60 min Z1 (≤55 % FTP), 85–95 rpm; solo con buena recuperación."}, {"week": 33, "start": "2027-07-05", "block": "Descarga", "deload": true, "tue": "15 min calentamiento; 2 × 10 min al 85–88 % FTP, rec. 5 min; 85–95 rpm; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "3 h Z2 baja (56–65 % FTP), sin bloques de intensidad.", "sun": "Descanso."}, {"week": 34, "start": "2027-07-12", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 25 min al 88–92 % FTP, rec. 8 min; 80–90 rpm; 10 min enfriamiento. Total aprox. 90 min.", "thu": "35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 30–40 min al 75–82 % FTP. Si buenas sensaciones, añadir 2 × 12 min al 85–88 % FTP, rec. 8 min suaves; 75–90 rpm.", "sun": "Descanso."}, {"week": 35, "start": "2027-07-19", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral controlado: 15–20 min calentamiento; 3 × 15 min al 90–95 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 85–95 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 45 min Z2 (56–75 % FTP), bastante desnivel; ascensión continua 40–50 min principalmente al 70–82 % FTP; 75–90 rpm.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm; solo sin fatiga muscular relevante."}, {"week": 36, "start": "2027-07-26", "block": "Preparación específica alpina", "deload": false, "tue": "Sweet spot prolongado: 15–20 min calentamiento; 2 × 20 min al 88–92 % FTP, rec. 7 min; 80–90 rpm; 10 min enfriamiento. Total 80–90 min.", "thu": "30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "5 h Z2 (56–75 % FTP), desnivel importante; dos ascensiones de 30–45 min al 70–82 % FTP separadas por recuperación Z1–Z2; 75–90 rpm, sin esfuerzos máximos.", "sun": "Opcional: 1 h 30 min Z1–Z2 baja (50–65 % FTP), 85–95 rpm, solo con buena recuperación."}, {"week": 37, "start": "2027-08-02", "block": "Preparación específica alpina", "deload": false, "tue": "Umbral bajo: 15–20 min calentamiento; 3 × 12 min al 92–97 % FTP, rec. 6 min; 80–90 rpm; 10 min enfriamiento. Total 75–85 min.", "thu": "30–35 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "4 h 30 min Z2 (56–75 % FTP), desnivel; ascensión continua 45–60 min al 70–82 % FTP; no superar umbral sostenido; 75–90 rpm.", "sun": "Descanso o 60 min Z1 (≤55 % FTP), solo con buena recuperación."}, {"week": 38, "start": "2027-08-09", "block": "Taper y puesta a punto", "deload": false, "tue": "15 min calentamiento; 2 × 12 min al 88–92 % FTP, rec. 6 min; 85–95 rpm; 10 min enfriamiento. Total 65–75 min.", "thu": "30 min Z1–Z2 (50–65 % FTP), 85–95 rpm.", "sat": "3 h Z2 (56–70 % FTP), desnivel moderado, sin bloques de intensidad.", "sun": "Descanso."}, {"week": 39, "start": "2027-08-16", "block": "Taper y puesta a punto", "deload": false, "tue": "Activación: 15 min calentamiento; 2 × 8 min al 85–90 % FTP, rec. 5 min; añadir 3 × 1 min a 100–110 rpm con resistencia baja y 2 min suaves; enfriar hasta 55–65 min.", "thu": "25–30 min Z1 (≤55 % FTP), 85–95 rpm.", "sat": "2 h Z1–Z2 (50–65 % FTP), terreno sencillo, sin desnivel exigente.", "sun": "Descanso."}, {"week": 40, "start": "2027-08-23", "block": "Activación previa y comienzo del viaje", "deload": true, "customCalendar": true, "days": {"0": ["Descanso.", "rest", "Descanso"], "1": ["Activación breve: 40–45 min en Z1–Z2; incluir 3 × 2 min al 85–90 % FTP, rec. 3 min suaves; cadencia 85–95 rpm.", "ride", "Activación"], "2": ["Descanso.", "rest", "Descanso"], "3": ["Adaptación: 60–90 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm. Sin intervalos ni ascensiones exigentes.", "ride", "Adaptación"], "4": ["Resistencia suave: 2–3 h en Z2 (56–75 % FTP); 85–95 rpm en llano y 75–90 rpm en subida. Si hay ascensión larga, mantener Z2 y evitar superar el 75 % FTP sostenido.", "ride", "Resistencia suave"], "5": ["Recuperación: descanso o 60–90 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "6": ["Resistencia con subida: 3–4 h en Z2 (56–75 % FTP). Si buenas sensaciones, ascensión de 30–45 min al 70–80 % FTP; cadencia en subida 75–90 rpm.", "ride", "Resistencia con subida"]}}, {"week": 41, "start": "2027-08-30", "block": "Viaje alpino", "deload": false, "customCalendar": true, "days": {"0": ["Recuperación: descanso o 45–60 min en Z1 (≤55 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "1": ["Jornada de montaña: 3–5 h según ruta. Predominio Z2 (56–75 % FTP). En ascensiones largas, referencia 70–82 % FTP; cadencia 75–90 rpm. Evitar comenzar puertos por encima del umbral.", "ride", "Jornada de montaña"], "2": ["Recuperación: descanso o 45–60 min en Z1–Z2 baja (50–65 % FTP), cadencia 85–95 rpm.", "ride", "Recuperación"], "3": ["Posible gran puerto: 3–5 h según recorrido. En ascensiones largas, preferentemente 70–82 % FTP. En tramos exigentes se puede superar puntualmente, evitando permanecer por encima del 90–95 % durante periodos prolongados; cadencia 75–90 rpm.", "ride", "Posible gran puerto"], "4": ["Recuperación: descanso o 30–60 min en Z1 (≤55 % FTP), si facilita la recuperación.", "ride", "Recuperación"], "5": ["Posible segunda gran jornada: 3–5 h según recorrido y recuperación. Z2 predominante; ascensiones largas al 70–82 % FTP. Si hay fatiga acumulada, reducir duración o sustituir por salida suave.", "ride", "Segunda gran jornada"], "6": ["Final del viaje: descanso o actividad muy suave según el desplazamiento.", "rest", "Final del viaje"]}}];
PLAN.push(...EXTENDED_PLAN);
const $ = id => document.getElementById(id);
const STORAGE_KEY = "cycling-plan-pwa-v1";
const defaultState = {
  profile:{name:"Ciclista",weight:76,hrMax:null},
  powerProfile:{p5:null,p60:null,p300:null,p1200:null},
  powerProfileHistory:[], powerProfileBike:"indoor", weightHistory:[],
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
    const migrated={...structuredClone(defaultState),...saved,profile:{...defaultState.profile,...saved.profile},powerProfile:{...defaultState.powerProfile,...saved.powerProfile},ftp:{...defaultState.ftp,...saved.ftp},powerProfileHistory:Array.isArray(saved.powerProfileHistory)?saved.powerProfileHistory:[],weightHistory:Array.isArray(saved.weightHistory)?saved.weightHistory:[]};
    migrated.ftpHistory=Array.isArray(saved.ftpHistory)?saved.ftpHistory.filter(t=>!(t.note==="Estimación inicial indicada" && t.date==="2026-11-24" && Number(t.ftp)===275)):[];
    if(migrated.ftp.indoorDate==="2026-11-24" && migrated.ftpHistory.length===0)migrated.ftp.indoorDate=null;
    Object.values(migrated.logs||{}).forEach(l=>{if(l&&l.bike==="road"&&Number(l.ftpUsed)>0&&Number(l.np)>0&&Number(l.minutes)>0){l.if=Number(l.np)/Number(l.ftpUsed);l.tss=(Number(l.minutes)/60)*Math.pow(l.if,2)*100;}});
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
  const now=new Date(),idx=weekIndexFor(now),w=idx>=0?PLAN[idx]:PLAN[0],todayEvents=getDailyEvents(now);
  $("homeDate").textContent=fmt(now,{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  $("todayLabel").textContent=idx<0?"PLAN PERSONAL":`SEMANA ${w.week} · ${w.block.toUpperCase()}`;
  const cyclingEvent=todayEvents.find(e=>e.kind==="ride"||e.kind==="event");
  $("todayType").textContent=cyclingEvent?.kind==="event"?"COMPETICIÓN":(cyclingEvent?sessionType(cyclingEvent.description):"SIN CICLISMO");
  $("todayTitle").textContent=cyclingEvent?.title||"Día sin sesión de ciclismo";
  $("todayDescription").textContent=cyclingEvent?.description||"No hay una sesión de ciclismo programada para hoy.";
  $("todayDuration").textContent=cyclingEvent?.duration||"";
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
  $("homeWeekCalendar").innerHTML=Array.from({length:7},(_,d)=>{const date=addDays(start,d),dayEvents=getDailyEvents(date).filter(e=>e.kind==="ride"||e.kind==="event");return `<div class="home-day"><div class="home-day-head"><strong>${fmt(date,{weekday:"short",day:"numeric"})}</strong><small>${dayEvents.length?dayEvents.length+ (dayEvents.length===1?" sesión":" sesiones") :"Sin ciclismo"}</small></div>${dayEvents.map(e=>{const log=state.logs[e.date],click=`data-home-session="${e.date}"`;return `<div class="home-event ${e.kind}"><span>${esc(e.title)}</span>${log?.status==="done"?'<b>✓</b>':log?.status==="partial"?'<b>◐</b>':''}<button ${click} aria-label="Abrir sesión">›</button></div>`;}).join("")}</div>`;}).join("");
  $("homeWeekCalendar").querySelectorAll("[data-home-session]").forEach(btn=>btn.addEventListener("click",()=>{const date=btn.dataset.homeSession;const ev=getDailyEvents(parseDate(date)).find(e=>e.kind==="ride"||e.kind==="event");if(ev)openSession(ev);}));
  $("todayDetails").onclick=()=>{if(cyclingEvent?.date)openSession(cyclingEvent);else setView("calendar");};
}
function renderCalendar(){
  const idx=state.calendarWeek,week=weekData(idx),start=parseDate(week.start),end=addDays(start,6);
  $("calendarTitle").textContent=`Semana ${week.week} · ${week.block} · ${fmt(start,{day:"numeric",month:"short"})}–${fmt(end,{day:"numeric",month:"short",year:"numeric"})}`;
  document.querySelectorAll("[data-cal]").forEach(b=>b.classList.toggle("active",b.dataset.cal===state.calendarMode));
  if(state.calendarMode==="list"){
    $("calendarContent").innerHTML=PLAN.map(w=>{
      const days=w.customCalendar?Object.keys(w.days).map(Number):[1,3,5,...(w.sun&&!/^Descanso\.?$/i.test(w.sun)?[6]:[])];
      const cycling=days.map(day=>w.customCalendar?{date:iso(sessionDate(w,day)),title:w.days[String(day)][2],description:w.days[String(day)][0],kind:w.days[String(day)][1]}:getWorkout(w,day)).filter(e=>!['gym','rest'].includes(e.kind));
      return `<div class="day-card"><div class="day-head"><strong>Semana ${w.week} · ${esc(w.block)}</strong><small>${w.deload?"DESCARGA":""}</small></div>${cycling.map(eventHTML).join("")||'<small class="muted">Sin sesiones ciclistas programadas</small>'}</div>`;
    }).join("");
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
function parseIntervalTargets(text){
  const over=text.match(/(\d+)\s*[×x]\s*(\d+)\s*min[^.]*?over-unders[^:]*:\s*(\d+)\s*min\s*(\d{2,3})[–-](\d{2,3})%\s*\+\s*(\d+)\s*min\s*(\d{2,3})[–-](\d{2,3})%/i);
  if(over){const reps=+over[1],blockDuration=+over[2],parts=[{duration:+over[3],lo:+over[4],hi:+over[5],name:"Parte alta"},{duration:+over[6],lo:+over[7],hi:+over[8],name:"Parte baja"}],cycleDuration=parts.reduce((a,p)=>a+p.duration,0),cycles=Math.max(1,Math.round(blockDuration/cycleDuration)),out=[];for(let r=1;r<=reps;r++)for(let c=1;c<=cycles;c++)parts.forEach(p=>out.push({...p,label:`Serie ${r} · Ciclo ${c} · ${p.name}`}));return out;}
  const m=text.match(/(\d+)\s*[×x]\s*(\d+)\s*min[^.]*?(?:al\s*)?(\d{2,3})[–-](\d{2,3})%/i);
  if(m){return Array.from({length:+m[1]},(_,i)=>({label:`Intervalo ${i+1}`,duration:+m[2],lo:+m[3],hi:+m[4]}));}
  return [];
}
function sessionIntervalMarkup(e,log,bike){
  const targets=parseIntervalTargets(e.description||"");if(!targets.length)return "";
  const ftp=Number(state.ftp[bike])||0,old=Array.isArray(log.intervalPowers)?log.intervalPowers:[];
  return `<div class="interval-log-box"><strong>Registro de intervalos</strong><p class="muted small">Introduce la potencia media de cada bloque. Los rangos objetivo se calculan con el FTP de la bicicleta seleccionada.</p>${targets.map((it,i)=>{const lo=ftp?Math.round(ftp*it.lo/100):null,hi=ftp?Math.round(ftp*it.hi/100):null;return `<label class="interval-input-row"><span>${esc(it.label)} · ${it.duration} min<small>${lo&&hi?`${lo}–${hi} W · ${it.lo}–${it.hi}% FTP`:it.lo+"–"+it.hi+"% FTP"}</small></span><input data-interval-index="${i}" type="number" min="0" step="1" placeholder="W medios" value="${old[i]?.actualPower??""}"></label>`;}).join("")}</div>`;
}
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
    <div class="form-row"><label>Potencia media (W)<input name="power" type="number" min="0" value="${log.power??""}"></label><label>Potencia normalizada (W)<input name="np" id="logNp" type="number" min="0" value="${log.np??""}"></label></div>
    <div class="form-row"><label>FC media (bpm)<input name="hr" type="number" min="0" value="${log.hr??""}"></label><label>FC máxima (bpm)<input name="hrMax" type="number" min="0" value="${log.hrMax??""}"></label></div>
    <div class="form-row"><label>Cadencia media (rpm)<input name="cadence" type="number" min="0" value="${log.cadence??""}"></label><label>RPE (1–10)<input name="rpe" type="number" min="1" max="10" value="${log.rpe??""}"></label></div>
    <div id="roadLoadMetrics" class="road-load-metrics"></div>
    <div id="intervalLogContainer">${sessionIntervalMarkup(e,log,log.bike||inferredBike)}</div>
    <label>Sensación de piernas (1–5)<input name="legs" type="number" min="1" max="5" value="${log.legs??""}" placeholder="1 muy pesadas · 5 muy frescas"></label>
    <label>Sensaciones / notas<textarea name="notes" placeholder="Sensaciones, incidencias…">${esc(log.notes||"")}</textarea></label>
    <div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelLog">Cerrar</button><button class="btn btn-primary" type="submit">Guardar registro</button></div>
  </form>`;
  $("sessionDialog").showModal();
  const form=$("logForm"),bikeSelect=form.elements.bike;bikeSelect.value=log.bike||inferredBike;
  const updateTarget=()=>{const range=pctRange(e.description),bike=bikeSelect.value,ftp=state.ftp[bike];$("targetPower").textContent=range&&ftp?`Objetivo orientativo (${bike==="road"?"carretera":"indoor"}): ${Math.round(ftp*range.lo)}–${Math.round(ftp*range.hi)} W`:range?"Registra un FTP para esta bicicleta para calcular los vatios.":"";const prior=[...$("intervalLogContainer").querySelectorAll("[data-interval-index]")].map(x=>x.value);const carry={...log,intervalPowers:parseIntervalTargets(e.description||"").map((_,i)=>({actualPower:prior[i]||log.intervalPowers?.[i]?.actualPower||""}))};$("intervalLogContainer").innerHTML=sessionIntervalMarkup(e,carry,bike);};
  const updateRoadMetrics=()=>{
    const isRoad=bikeSelect.value==="road",minutes=Number(form.elements.minutes.value),np=Number(form.elements.np.value);
    const oldSameRoad=log.bike==="road"&&log.ftpUsed?Number(log.ftpUsed):null,ftp=oldSameRoad||Number(state.ftp.road)||0;
    if(!isRoad){$("roadLoadMetrics").innerHTML="";return;}
    const valid=ftp>0&&np>0&&minutes>0,ifValue=valid?np/ftp:null,tss=valid?(minutes/60)*Math.pow(ifValue,2)*100:null;
    $("roadLoadMetrics").innerHTML=`<div class="road-metric-grid"><div><small>Factor de intensidad (IF)</small><strong>${ifValue?ifValue.toFixed(2):"—"}</strong></div><div><small>Training Stress Score (TSS)</small><strong>${tss!==null?Math.round(tss):"—"}</strong></div></div><p class="hint">Calculado automáticamente: IF = NP / FTP; TSS = horas × IF² × 100. ${ftp?`FTP utilizado: ${ftp} W.`:"Necesitas registrar el FTP de carretera, la NP y la duración."}</p>`;
  };
  const updateAll=()=>{updateTarget();updateRoadMetrics();};
  bikeSelect.addEventListener("change",updateAll);form.elements.minutes.addEventListener("input",updateRoadMetrics);form.elements.np.addEventListener("input",updateRoadMetrics);updateAll();
  $("cancelLog").onclick=()=>$("sessionDialog").close();
  form.onsubmit=ev=>{ev.preventDefault();const fd=new FormData(form),obj={};for(const [k,v] of fd.entries())obj[k]=v===""?"":(["minutes","km","climb","power","np","hr","cadence","rpe","hrMax","legs"].includes(k)?Number(v):v);
    obj.date=e.date;obj.planned=e.description;obj.bike=obj.bike||inferredBike;
    const ftpSnapshot=(obj.bike==="road"&&log.bike==="road"&&log.ftpUsed)?Number(log.ftpUsed):(Number(state.ftp[obj.bike])||null);obj.ftpUsed=ftpSnapshot;
    if(obj.bike==="road"&&ftpSnapshot&&obj.np&&obj.minutes){obj.if=Number(obj.np)/ftpSnapshot;obj.tss=(Number(obj.minutes)/60)*Math.pow(obj.if,2)*100;}else{obj.if=null;obj.tss=null;}
    const intervalTargets=parseIntervalTargets(e.description||"");obj.intervalPowers=intervalTargets.map((it,i)=>({label:it.label,duration:it.duration,targetLow:it.lo,targetHigh:it.hi,actualPower:Number(form.querySelector(`[data-interval-index="${i}"]`)?.value)||null}));
    state.logs[e.date]=obj;saveState();$("sessionDialog").close();renderHome();renderCalendar();renderProgress();toast("Entrenamiento guardado");};
}
$("closeDialog").onclick=()=>$("sessionDialog").close();
function renderZones(){
  $("ftpIndoor").value=state.ftp.indoor;$("ftpRoad").value=state.ftp.road||"";
  $("indoorUpdated").textContent=state.ftp.indoorDate?`Última actualización: ${state.ftp.indoorDate}`:"Estimación inicial: confirma con un test cuando corresponda";
  $("roadUpdated").textContent=state.ftp.roadDate?`Última actualización: ${state.ftp.roadDate}`:"Aún sin test registrado";
  const weight=Number(state.profile.weight)||null;
  $("indoorWkg").textContent=weight?`${(Number(state.ftp.indoor)/weight).toFixed(2)} W/kg con ${weight} kg`:"Añade tu peso para calcular W/kg";
  $("roadWkg").textContent=state.ftp.road?(weight?`${(Number(state.ftp.road)/weight).toFixed(2)} W/kg con ${weight} kg`:"Añade tu peso para calcular W/kg"):"Pendiente de FTP carretera";
  $("hrMaxInput").value=state.profile.hrMax||"";
  document.querySelectorAll("[data-zone]").forEach(b=>b.classList.toggle("active",b.dataset.zone===state.selectedZone));
  const ftp=state.ftp[state.selectedZone],ratio=ftp&&weight?ftp/weight:null;
  const rows=[["Z1 · Recuperación",0,.55,"≤"],["Z2 · Resistencia",.56,.75,""],["Z3 · Tempo",.76,.90,""],["Sweet spot",.88,.94,""],["Z4 · Umbral",.91,1.05,""],["Z5 · VO₂ máx.",1.06,1.20,""],["Z6 · Anaeróbica",1.21,1.50,""]];
  $("zoneTable").innerHTML=ftp?rows.map(([name,a,b,prefix])=>{const watts=prefix?`≤${Math.round(ftp*b)} W`:`${Math.round(ftp*a)}–${Math.round(ftp*b)} W`;const wk=ratio?(prefix?`≤${(ratio*b).toFixed(2)}`:`${(ratio*a).toFixed(2)}–${(ratio*b).toFixed(2)}`):"—";return `<div class="zone-row"><span class="zone-name"><i class="dot"></i>${name}</span><span class="zone-value">${watts}<small class="zone-wkg"> · ${wk} W/kg</small></span></div>`;}).join(""):`<p class="muted">Registra un FTP de ${state.selectedZone==="road"?"carretera":"indoor"} para consultar estas zonas.</p>`;
  const hr=Number(state.profile.hrMax),hrRows=[["Z1 · Muy suave",.50,.60],["Z2 · Suave",.60,.70],["Z3 · Aeróbica",.70,.80],["Z4 · Umbral",.80,.90],["Z5 · Máxima",.90,1.00]];
  $("hrZoneTable").innerHTML=hr?hrRows.map(([name,a,b])=>`<div class="zone-row"><span>${name}</span><strong>${Math.round(hr*a)}–${Math.round(hr*b)} bpm</strong></div>`).join(""):'<p class="muted">Introduce tu FC máxima para calcular las zonas estimadas.</p>';
  $("testHistory").innerHTML=state.ftpHistory.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(t=>`<div class="mini-item"><div class="left"><strong>${t.bike==="indoor"?"Indoor":"Carretera"} · ${t.ftp} W</strong><small>${t.date} · ${t.protocol==="manual"||!t.mean20?"Actualización manual":"Test de 20 min"} · Media 20 min: ${t.mean20||"—"} W · Peso ${t.weight||"—"} kg · FC ${t.hrAvg||"—"}/${t.hrMax||"—"} bpm · ${(t.wkg??(t.weight? t.ftp/t.weight:null))?.toFixed(2)||"—"} W/kg ${t.note?"· "+esc(t.note):""}</small></div><span class="status ${t.mean20?"done":"partial"}">${t.mean20?"Test":"Manual"}</span></div>`).join("")||'<p class="muted small">Todavía no hay tests registrados.</p>';
}
function saveFTP(bike){
  const input=$(bike==="indoor"?"ftpIndoor":"ftpRoad"),v=Number(input.value);
  if(!v||v<80||v>600){toast("Introduce un FTP válido (80–600 W)");return;}
  state.ftp[bike]=v;state.ftp[bike+"Date"]=todayISO();
  const weight=Number(state.profile.weight)||null;state.ftpHistory.push({date:todayISO(),bike,ftp:v,weight,wkg:weight?v/weight:null,protocol:"manual",note:"Actualización manual"});
  saveState();renderZones();renderHome();renderCalendar();renderProgress();toast("FTP actualizado; las sesiones futuras recalculan sus vatios");
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
  f.onsubmit=ev=>{ev.preventDefault();const obj={date:f.elements.date.value,bike:f.elements.bike.value,protocol:"20min",mean20:Number(mean.value),ftp:Math.round(Number(mean.value)*.95),weight:Number(weight.value),hrAvg:Number(f.elements.hrAvg.value)||null,hrMax:Number(f.elements.hrMax.value)||null,wkg:Number(wkg.value)||null,note:f.elements.note.value};state.ftpHistory.push(obj);const currentDate=state.ftp[obj.bike+"Date"];const updatesCurrent=!currentDate||obj.date>=currentDate;if(updatesCurrent){state.ftp[obj.bike]=obj.ftp;state.ftp[obj.bike+"Date"]=obj.date;state.profile.weight=obj.weight;}if(obj.hrMax&&updatesCurrent)state.profile.hrMax=obj.hrMax;saveState();$("sessionDialog").close();renderZones();renderHome();renderCalendar();renderProgress();toast(updatesCurrent?"Test guardado y FTP actualizado":"Test histórico guardado; se conserva el FTP más reciente");};
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
function drawCurveChart(canvas,labels,values,label){
  const ctx=canvas.getContext("2d"),w=canvas.clientWidth||320,h=190,dpr=window.devicePixelRatio||1;canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);
  const seconds=[5,20,60,300,1200,3600],valid=values.map((v,i)=>({v:Number(v),i})).filter(x=>Number.isFinite(x.v)&&x.v>0),pad={l:34,r:12,t:20,b:34},plotW=w-pad.l-pad.r,plotH=h-pad.t-pad.b,max=Math.max(1,...valid.map(x=>x.v))*1.15;
  ctx.strokeStyle="#e8edf0";ctx.fillStyle="#7b8794";ctx.font="10px sans-serif";for(let i=0;i<4;i++){const y=pad.t+plotH*i/3;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();}
  ctx.fillStyle="#3b8a70";ctx.textAlign="left";ctx.fillText(label,pad.l,11);if(!valid.length){ctx.fillStyle="#83909d";ctx.fillText("Sin datos suficientes",pad.l+4,pad.t+plotH/2);return;}
  const xFor=i=>pad.l+(Math.log(seconds[i])-Math.log(seconds[0]))/(Math.log(seconds[5])-Math.log(seconds[0]))*plotW;
  const pts=valid.map(x=>({x:xFor(x.i),y:pad.t+plotH-(x.v/max)*plotH,i:x.i,v:x.v}));ctx.strokeStyle="#3b8a70";ctx.lineWidth=2.5;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();pts.forEach(p=>{ctx.fillStyle="#3b8a70";ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fill();ctx.fillStyle="#657386";ctx.textAlign="center";ctx.fillText(labels[p.i],p.x,h-12);});
}
function drawLineChart(canvas,labels,values,label){
  const ctx=canvas.getContext("2d"),w=canvas.clientWidth||320,h=170,dpr=window.devicePixelRatio||1;canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);
  const points=values.map((v,i)=>({v:Number(v),i})).filter(p=>Number.isFinite(p.v)&&p.v>0),pad={l:34,r:12,t:20,b:32},plotW=w-pad.l-pad.r,plotH=h-pad.t-pad.b,max=Math.max(1,...points.map(p=>p.v))*1.15;
  ctx.strokeStyle="#e8edf0";ctx.fillStyle="#7b8794";ctx.font="10px sans-serif";for(let i=0;i<4;i++){const y=pad.t+plotH*i/3;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();}ctx.fillStyle="#3b8a70";ctx.textAlign="left";ctx.fillText(label,pad.l,11);
  if(!points.length){ctx.fillStyle="#83909d";ctx.fillText("Sin datos suficientes",pad.l+4,pad.t+plotH/2);return;}
  const xFor=i=>pad.l+(labels.length===1?plotW/2:i*plotW/(labels.length-1));const coords=points.map(p=>({x:xFor(p.i),y:pad.t+plotH-p.v/max*plotH,i:p.i}));ctx.strokeStyle="#3b8a70";ctx.lineWidth=2;ctx.beginPath();coords.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();coords.forEach(p=>{ctx.fillStyle="#3b8a70";ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,Math.PI*2);ctx.fill();ctx.fillStyle="#657386";ctx.textAlign="center";ctx.fillText(labels[p.i],p.x,h-10);});
}
function renderPowerProfile(){
  const bike=state.powerProfileBike||"indoor";document.querySelectorAll("[data-powerbike]").forEach(b=>b.classList.toggle("active",b.dataset.powerbike===bike));
  const rows=[ ["5 segundos","s5"],["20 segundos","s20"],["1 minuto","s60"],["5 minutos","s300"],["20 minutos","s1200"],["60 minutos","s3600"] ];
  const records=(state.powerProfileHistory||[]).filter(r=>r.bike===bike).sort((a,b)=>b.date.localeCompare(a.date));
  const best=rows.map(([label,key])=>{let item=null;records.forEach(r=>{const v=Number(r.values?.[key]);if(v>0&&(!item||v>item.value))item={value:v,record:r};});return {label,key,item};});
  $("powerProfileDisplay").innerHTML=best.map(x=>{const item=x.item,w=item?.record.weight,ratio=w?item.value/w:null;return `<div class="zone-row"><span>${x.label}</span><strong>${item?`${item.value} W · ${ratio?ratio.toFixed(2)+" W/kg":"—"}<small class="zone-wkg"> · ${item.record.date}</small>`:"Sin registrar"}</strong></div>`;}).join("");
  const curveValues=best.map(x=>x.item?.value||null);drawCurveChart($("powerCurveChart"),["5 s","20 s","1 min","5 min","20 min","60 min"],curveValues,`Curva de potencia · ${bike==="road"?"carretera":"indoor"} (W)`);
  $("powerProfileHistory").innerHTML=records.length?records.slice(0,8).map(r=>{const vals=rows.map(([name,key])=>r.values?.[key]?`${name}: ${r.values[key]} W`:"").filter(Boolean).join(" · ");return `<div class="mini-item"><div class="left"><strong>${r.date} · ${r.weight||"—"} kg</strong><small>${vals||"Sin potencias guardadas"}</small></div></div>`;}).join(""):'<p class="muted small">Todavía no hay registros fechados para esta bicicleta.</p>';
  const legacy=Object.entries(state.powerProfile||{}).filter(([,v])=>Number(v)>0);if(legacy.length)$("powerProfileHistory").insertAdjacentHTML("beforeend",`<p class="hint">Se conservan ${legacy.length} valores del perfil anterior, pero no tienen bicicleta ni fecha identificadas y no se han asignado a esta curva.</p>`);
}
function renderWeightPanel(){
  const weight=Number(state.profile.weight)||null,ftpI=Number(state.ftp.indoor)||0,ftpR=Number(state.ftp.road)||0;
  $("weightSummary").innerHTML=`<div class="zone-row"><span>Peso actual del perfil</span><strong>${weight?weight.toFixed(1)+" kg":"Sin registrar"}</strong></div><div class="zone-row"><span>FTP indoor relativo</span><strong>${weight?(ftpI/weight).toFixed(2)+" W/kg":"—"}</strong></div><div class="zone-row"><span>FTP carretera relativo</span><strong>${weight&&ftpR?(ftpR/weight).toFixed(2)+" W/kg":"—"}</strong></div>`;
  const records=(state.weightHistory||[]).slice().sort((a,b)=>a.date.localeCompare(b.date)),recent=records.slice(-12),labels=recent.map(r=>r.date.slice(5));drawChart($("weightChart"),recent.map(r=>r.date.slice(5)),recent.map(r=>Number(r.weight)||0),"Peso corporal (kg)");
  drawLineChart($("weightIndoorWkgChart"),labels,recent.map(r=>r.ftpIndoor&&r.weight?r.ftpIndoor/r.weight:null),"W/kg indoor");drawLineChart($("weightRoadWkgChart"),labels,recent.map(r=>r.ftpRoad&&r.weight?r.ftpRoad/r.weight:null),"W/kg carretera");
  $("weightHistoryList").innerHTML=records.length?records.slice().reverse().slice(0,10).map(r=>`<div class="mini-item"><div class="left"><strong>${r.date} · ${Number(r.weight).toFixed(1)} kg</strong><small>FTP indoor: ${r.ftpIndoor?`${(r.ftpIndoor/r.weight).toFixed(2)} W/kg`:"—"} · FTP carretera: ${r.ftpRoad?`${(r.ftpRoad/r.weight).toFixed(2)} W/kg`:"—"}</small></div></div>`).join(""):'<p class="muted small">Todavía no hay registros de peso. El peso del perfil sigue disponible para calcular el W/kg actual.</p>';
}
function renderIntervalAnalysis(){
  const logs=Object.values(state.logs).filter(l=>Array.isArray(l.intervalPowers)&&l.intervalPowers.some(x=>Number(x.actualPower)>0)).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
  if(!logs.length){$("intervalAnalysis").innerHTML='<p class="muted small">Aún no hay intervalos con potencia real registrada. Abre una sesión estructurada desde Plan e introduce los vatios medios de cada bloque.</p>';return;}
  $("intervalAnalysis").innerHTML=logs.map(l=>{const ftp=Number(l.ftpUsed)||Number(state.ftp[l.bike])||0;const rows=l.intervalPowers.map(it=>{const lo=ftp?ftp*it.targetLow/100:0,hi=ftp?ftp*it.targetHigh/100:0,actual=Number(it.actualPower)||0,actualPct=ftp?actual/ftp*100:null,scale=140,left=it.targetLow/scale*100,width=(it.targetHigh-it.targetLow)/scale*100,marker=actualPct!==null?Math.min(100,actualPct/scale*100):null;return `<div class="interval-result"><div class="interval-result-head"><span>${esc(it.label)}</span><strong>${actual?actual+" W":"Sin dato"}</strong></div><div class="interval-track"><span class="interval-target" style="left:${left}%;width:${width}%"></span>${marker!==null?`<i class="interval-marker" style="left:${marker}%"></i>`:""}</div><small class="muted">Objetivo ${lo&&hi?`${Math.round(lo)}–${Math.round(hi)} W · `:""}${it.targetLow}–${it.targetHigh}% FTP${actual&&ftp?` · ${actualPct.toFixed(1)}% FTP`:""}</small></div>`;}).join("");return `<div class="interval-session"><strong>${l.date} · ${l.bike==="road"?"Carretera":"Indoor"}</strong><small class="muted">${esc(l.planned||"Sesión")}</small>${rows}</div>`;}).join("");
}
function renderProgress(){
  const logs=Object.values(state.logs),valid=logs.filter(l=>l.status==="done"||l.status==="partial");
  const sum=k=>valid.reduce((a,l)=>a+(Number(l[k])||0),0);
  $("statDone").textContent=valid.length;$("statHours").textContent=(sum("minutes")/60).toFixed(1)+" h";$("statKm").textContent=sum("km").toFixed(1)+" km";$("statClimb").textContent=Math.round(sum("climb"))+" m";
  const history=logs.filter(l=>l.date).sort((a,b)=>b.date.localeCompare(a.date));$("historyCount").textContent=history.length+" registros";
  $("trainingHistory").innerHTML=history.length?history.map(l=>`<div class="mini-item"><div class="left"><strong>${fmt(parseDate(l.date),{day:"numeric",month:"short",year:"numeric"})} · ${l.bike==="road"?"Carretera":"Indoor"}</strong><small>${esc(l.planned||"Actividad")} · ${l.minutes||"—"} min · ${l.km||"—"} km · ${l.climb||0} m+ · FC ${l.hr||"—"}/${l.hrMax||"—"} · RPE ${l.rpe||"—"}${l.bike==="road"&&l.if?` · IF ${Number(l.if).toFixed(2)} · TSS ${Math.round(l.tss||0)}`:""}</small></div><div class="history-actions"><button class="text-btn" data-edit="${l.date}">Editar</button><button class="text-btn danger" data-delete="${l.date}">Borrar</button></div></div>`).join(""):'<p class="muted small">Todavía no hay entrenamientos registrados.</p>';
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{const date=b.dataset.edit;const ev=getDailyEvents(parseDate(date)).find(x=>x.kind==="ride"||x.kind==="event")||{date,title:"Actividad registrada",description:state.logs[date].planned||"Actividad",kind:"ride"};openSession({...ev,date});});
  document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{const date=b.dataset.delete;if(confirm("¿Borrar el registro de este entrenamiento?")){delete state.logs[date];saveState();renderProgress();renderHome();renderCalendar();toast("Registro eliminado");}});
  const monday=mondayOf(new Date()),weeks=Array.from({length:8},(_,i)=>addDays(monday,-49+i*7));
  const loads=weeks.map(start=>{const end=iso(addDays(start,6)),logsWeek=valid.filter(l=>l.date>=iso(start)&&l.date<=end);return logsWeek.reduce((a,l)=>a+(Number(l.minutes)||0)*(Number(l.rpe)||0),0);});
  const labels=weeks.map(d=>{const found=PLAN.find(w=>w.start===iso(d));return found?`S${found.week}`:fmt(d,{day:"numeric",month:"numeric"});});drawChart($("loadChart"),labels,loads,"Carga semanal (min × RPE)");
  const thisWeek=valid.filter(l=>l.date>=iso(monday)&&l.date<=iso(addDays(monday,6))),currentLoad=thisWeek.reduce((a,l)=>a+(Number(l.minutes)||0)*(Number(l.rpe)||0),0),roadTss=thisWeek.filter(l=>l.bike==="road"&&Number.isFinite(Number(l.tss))).reduce((a,l)=>a+(Number(l.tss)||0),0);
  $("loadSummary").innerHTML=`<div class="zone-row"><span>Carga de esta semana</span><strong>${Math.round(currentLoad)} UA</strong></div><div class="zone-row"><span>TSS de salidas de carretera</span><strong>${roadTss?Math.round(roadTss):"—"}</strong></div><p class="hint">Evolución de las últimas 8 semanas. Carga interna = minutos × RPE; el TSS se muestra aparte y no se suma a las unidades de carga. Son referencias orientativas.</p>`;
  const hist=state.ftpHistory.slice().sort((a,b)=>a.date.localeCompare(b.date)),indoor=hist.filter(x=>x.bike==="indoor"),road=hist.filter(x=>x.bike==="road");
  drawChart($("ftpIndoorChart"),indoor.map(x=>x.date.slice(5)),indoor.map(x=>x.ftp),"FTP indoor (W)");drawLineChart($("ftpIndoorWkgChart"),indoor.map(x=>x.date.slice(5)),indoor.map(x=>x.weight&&x.ftp?x.ftp/x.weight:null),"FTP indoor (W/kg)");drawChart($("ftpRoadChart"),road.map(x=>x.date.slice(5)),road.map(x=>x.ftp),"FTP carretera (W)");drawLineChart($("ftpRoadWkgChart"),road.map(x=>x.date.slice(5)),road.map(x=>x.weight&&x.ftp?x.ftp/x.weight:null),"FTP carretera (W/kg)");
  renderPowerProfile();renderWeightPanel();renderIntervalAnalysis();
  const planned=logs.length,done=logs.filter(l=>l.status==="done").length,partial=logs.filter(l=>l.status==="partial").length,missed=logs.filter(l=>l.status==="missed").length;
  $("completionBreakdown").innerHTML=`<div class="zone-row"><span>Completadas</span><strong>${done}</strong></div><div class="barline"><span style="width:${planned?done/planned*100:0}%"></span></div><div class="zone-row"><span>Parciales</span><strong>${partial}</strong></div><div class="zone-row"><span>No realizadas</span><strong>${missed}</strong></div>`;
}
function addPowerProfileRecord(){
  const bike=state.powerProfileBike||"indoor";$("dialogEyebrow").textContent="PERFIL DE POTENCIA";$("dialogTitle").textContent="Añadir mejores esfuerzos";
  $("dialogBody").innerHTML=`<form id="powerProfileForm" class="dialog-form"><p class="muted small">Guarda un conjunto de mejores potencias con fecha y bicicleta. Introduce solo duraciones que hayas medido.</p><div class="form-row"><label>Fecha<input name="date" type="date" value="${todayISO()}" required></label><label>Bicicleta<select name="bike"><option value="indoor" ${bike==="indoor"?"selected":""}>Indoor</option><option value="road" ${bike==="road"?"selected":""}>Carretera</option></select></label></div><label>Peso corporal en esa fecha (kg)<input name="weight" type="number" min="30" max="200" step="0.1" value="${state.profile.weight||""}"></label><div class="form-row"><label>5 segundos (W)<input name="s5" type="number" min="0"></label><label>20 segundos (W)<input name="s20" type="number" min="0"></label></div><div class="form-row"><label>1 minuto (W)<input name="s60" type="number" min="0"></label><label>5 minutos (W)<input name="s300" type="number" min="0"></label></div><div class="form-row"><label>20 minutos (W)<input name="s1200" type="number" min="0"></label><label>60 minutos (W)<input name="s3600" type="number" min="0"></label></div><div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelPowerProfile">Cancelar</button><button class="btn btn-primary">Guardar registro</button></div></form>`;
  $("sessionDialog").showModal();$("cancelPowerProfile").onclick=()=>$("sessionDialog").close();
  $("powerProfileForm").onsubmit=ev=>{ev.preventDefault();const f=ev.target,fd=new FormData(f),values={};["s5","s20","s60","s300","s1200","s3600"].forEach(k=>values[k]=Number(fd.get(k))||null);if(!Object.values(values).some(v=>v>0)){toast("Introduce al menos una potencia");return;}state.powerProfileHistory.push({date:fd.get("date"),bike:fd.get("bike"),weight:Number(fd.get("weight"))||null,values});state.powerProfileBike=fd.get("bike");saveState();$("sessionDialog").close();renderProgress();toast("Perfil de potencia registrado");};
}
$("editPowerProfile").onclick=addPowerProfileRecord;
document.querySelectorAll("[data-powerbike]").forEach(b=>b.addEventListener("click",()=>{state.powerProfileBike=b.dataset.powerbike;saveState();renderPowerProfile();}));
function addWeightRecord(){
  $("dialogEyebrow").textContent="PESO CORPORAL";$("dialogTitle").textContent="Registrar peso";
  $("dialogBody").innerHTML=`<form id="weightForm" class="dialog-form"><label>Fecha<input name="date" type="date" value="${todayISO()}" required></label><label>Peso corporal (kg)<input name="weight" type="number" min="30" max="200" step="0.1" value="${state.profile.weight||""}" required></label><div class="dialog-actions"><button type="button" class="btn btn-secondary" id="cancelWeight">Cancelar</button><button class="btn btn-primary">Guardar peso</button></div></form>`;
  $("sessionDialog").showModal();$("cancelWeight").onclick=()=>$("sessionDialog").close();
  $("weightForm").onsubmit=ev=>{ev.preventDefault();const f=ev.target,fd=new FormData(f),date=fd.get("date"),weight=Number(fd.get("weight"));if(!weight||weight<30||weight>200){toast("Introduce un peso válido");return;}state.weightHistory=state.weightHistory.filter(r=>r.date!==date);state.weightHistory.push({date,weight,ftpIndoor:Number(state.ftp.indoor)||null,ftpRoad:Number(state.ftp.road)||null});const latest=state.weightHistory.slice().sort((a,b)=>b.date.localeCompare(a.date))[0];if(!latest||date>=latest.date)state.profile.weight=weight;saveState();$("athleteWeight").value=state.profile.weight;$("sessionDialog").close();renderZones();renderProgress();toast("Peso registrado y W/kg actualizado");};
}
$("addWeight").onclick=addWeightRecord;
function updateNutrition(){const hours=Number($("nutritionHours").value)||0,carbs=Number($("nutritionCarbs").value)||0,fluids=Number($("nutritionFluids").value)||0,sodium=Number($("nutritionSodium").value)||0;$("nutritionTotals").innerHTML=`<div class="zone-row"><span>Hidratos totales</span><strong>${Math.round(hours*carbs)} g</strong></div><div class="zone-row"><span>Líquidos totales</span><strong>${Math.round(hours*fluids)} ml</strong></div><div class="zone-row"><span>Sodio total</span><strong>${Math.round(hours*sodium)} mg</strong></div><p class="hint">Es una estimación de planificación. Ajusta la ingesta a la duración, intensidad, temperatura y tolerancia digestiva.</p>`;}
["nutritionHours","nutritionCarbs","nutritionFluids","nutritionSodium"].forEach(id=>$(id).addEventListener("input",updateNutrition));updateNutrition();

$("saveProfile").onclick=()=>{state.profile.name=$("athleteName").value||"Ciclista";state.profile.weight=Number($("athleteWeight").value)||76;saveState();renderZones();renderProgress();toast("Perfil guardado");};
function exportData(){
  const blob=new Blob([JSON.stringify({app:"Mi Plan Ciclista",version:2,exportedAt:new Date().toISOString(),state},null,2)],{type:"application/json"});
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
