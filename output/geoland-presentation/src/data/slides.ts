export interface SlideData {
  id: number;
  title?: string;
  overline?: string;
  text: string;
  backgroundMedia: string;
  isTitleBlue?: boolean;
  overlayOpacity?: number;
  isBold?: boolean;
  isItalic?: boolean;
  titleSize?: string;
  variant?: "subtitulo" | "titulo" | "portada" | "portada81" | "portadafinal" | "texto" | "barras" | "barras-pro" | "apertura" | "apertura2" | "hub" | "backtest-stats" | "backtest-cities" | "numeric" | "business-units" | "reviews" | "neural-map" | "titulo-grande" | "titulo-chico" | "advisors" | "roadmap" | "soluciones-grid" | "diagrama-fuentes" | "diagrama-expansion" | "market" | "pricing" | "texto-arriba" | "titulo-cuerpo-bold" | "validation-hud" | "proyecciones-hud";
  align?: "left" | "center" | "right" | "center-left";
  maxWidth?: string;
  ctaUrl?: string;
  ctaText?: string;
  footer?: string;
}

export const slides: SlideData[] = [



  {
    id: 1,
    title: "PROBLEM",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 2,
    title: "UNA LOCACIÓN NO ES SOLO FILMAR",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "2.mp4",
    overlayOpacity: 45,
  },
  {
    id: 3,
    title: "SON PERMISOS, ACCESOS, TRÁFICO, PARKING, SEGURIDAD, EQUIPO, COMUNIDAD, RUIDO Y CIENTOS DE VARIABLES MÁS.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0,
  },
  {
    id: 4,
    title: "TODAS LAS VARIABLES FRAGMENTADAS. HACIENDO LA TAREA LENTA Y COSTOSA.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "3.mp4",
    overlayOpacity: 45,
  },
  {
    id: 5,
    title: "<span style='font-size: 140px; display: block; line-height: 0.9; margin-bottom: 16px; font-family: \"League Gothic\", sans-serif;'>1</span>UNA SOLA VARIABLE NO DETECTADA COMPROMETE TODA LA PRODUCCIÓN.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "4.mp4",
    overlayOpacity: 45,
  },
  {
    id: 6,
    title: "UN ERROR PUEDE COSTAR CIENTOS DE MILES DE EUROS.",
    text: `<div class="flex flex-col md:flex-row print:flex-row gap-6 justify-center items-stretch w-full max-w-[1250px] mx-auto mt-6 text-left">
  <!-- Card 1 -->
  <div class="flex flex-col p-6 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md w-full md:w-1/3 print:w-1/3 justify-between">
    <div>
      <span class="text-white text-3xl md:text-4xl font-bold tracking-tight font-jost block mb-3">USD 670K–1.3M</span>
      <p class="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-6 font-arimo">
        por día de rodaje en locación en producciones profesionales.
      </p>
    </div>
    <span class="text-white/35 text-[9px] tracking-wider uppercase font-light font-arimo">
      Fuente: Motion Picture Association.
    </span>
  </div>

  <!-- Card 2 -->
  <div class="flex flex-col p-6 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md w-full md:w-1/3 print:w-1/3 justify-between">
    <div>
      <span class="text-white text-3xl md:text-4xl font-bold tracking-tight font-jost block mb-3">+USD 300K/día</span>
      <p class="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-6 font-arimo">
        de gasto local promedio en producciones high-budget.
      </p>
    </div>
    <span class="text-white/35 text-[9px] tracking-wider uppercase font-light font-arimo">
      Fuente: Olsberg·SPI / Motion Picture Association
    </span>
  </div>

  <!-- Card 3 -->
  <div class="flex flex-col p-6 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md w-full md:w-1/3 print:w-1/3 justify-between">
    <div>
      <span class="text-white text-2xl md:text-3xl font-normal uppercase tracking-wider block mb-3 font-jost" style="font-family:'League Gothic',sans-serif; letter-spacing: 0.05em;">Decenas de variables</span>
      <p class="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-2 font-arimo">
        permisos, accesos, tráfico, parking, generadores, seguridad, ruido y comunidad.
      </p>
      <p class="text-white/45 text-[10px] leading-relaxed mb-6 font-light font-arimo">
        El documento regula notificaciones comunitarias, parking, accesos, vehículos, tráfico, peatones, equipo, generadores, seguridad, ruido, luz, propiedad privada, vecinos y limpieza; advirtiendo que violaciones pueden derivar en la suspensión o revocación del permiso.
      </p>
    </div>
    <span class="text-white/35 text-[9px] tracking-wider uppercase font-light font-arimo">
      Fuente: NYC Mayor’s Office of Media and Entertainment
    </span>
  </div>
</div>`,
    variant: "titulo-chico",
    backgroundMedia: "5.mp4",
    overlayOpacity: 45,
    align: "center-left",
    maxWidth: "1250px"
  },
  {
    id: 7,
    title: "UNA OBRA EN CONSTRUCCIÓN AL LADO DEL SET NO DETECTADA",
    text: "Martillos, taladros y vibraciones contaminan el sonido directo. La escena no puede rodarse aunque la locación sea perfecta.",
    variant: "titulo-chico",
    backgroundMedia: "6.mp4",
    overlayOpacity: 45,
  },
  {
    id: 8,
    title: "UN FESTIVAL A METROS DEL RODAJE",
    text: "Accesos bloqueados, tráfico cortado y seguridad alterada. La producción queda detenida mientras el presupuesto sigue corriendo.",
    variant: "titulo-chico",
    backgroundMedia: "7.mp4",
    overlayOpacity: 45,
  },
  {
    id: 9,
    title: "UNA RUTA AÉREA SOBRE UNA ESCENA DE ÉPOCA",
    text: "Cada pocos minutos cruza un avión. La imagen no funciona, el sonido tampoco.",
    variant: "titulo-chico",
    backgroundMedia: "8.mp4",
    overlayOpacity: 45,
  },
  {
    id: 10,
    title: "<div class='flex flex-col items-start justify-start text-left w-full mb-4 pt-4' style='line-height: 1.2;'><img src='assets/revenant-logo.png' alt='The Revenant' class='w-auto h-[55px] md:h-[85px] object-contain mb-3 block' /><span class='block'>FALTA DE NIEVE</span></div>",
    text: "<div class='text-left w-full'><strong>Problema real:</strong> la producción estaba rodando en Canadá, pero se quedaron sin nieve para una película que dependía visualmente de paisajes nevados. Eligieron mal.<br/><br/><strong>Consecuencia:</strong> tuvieron que mover parte de la producción a Patagonia, Argentina.<br/><br/><strong>Impacto económico:</strong> el traslado y seis días extra de rodaje en Patagonia costaron aproximadamente<br/><strong>USD 10M</strong> no previstos.</div>",
    variant: "titulo-chico",
    backgroundMedia: "9.mp4",
    overlayOpacity: 45,
    align: "center-left",
    maxWidth: "750px"
  },
  {
    id: 11,
    title: "EL PROBLEMA NO ES ENCONTRAR UNA BUENA LOCACIÓN.",
    text: "ES DESCUBRIR DEMASIADO TARDE QUE NUNCA DEBIÓ ELEGIRSE.",
    variant: "titulo-chico",
    backgroundMedia: "10.mp4",
    overlayOpacity: 45,
  },
  {
    id: 12,
    title: "EL PROBLEMA NO ES LA FALTA DE INFORMACIÓN.",
    text: "ES LA INCAPACIDAD HUMANA PARA CONECTARLA.",
    variant: "titulo-chico",
    backgroundMedia: "10-2.png",
    overlayOpacity: 45,
  },
  {
    id: 13,
    title: "EN UN MERCADO GLOBAL DE USD 360B ANUALES.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "9.png",
    overlayOpacity: 45
  },
  {
    id: 14,
    title: "+300.000 PRODUCTORAS EN EL MUNDO",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "10.png",
    overlayOpacity: 45
  },
  {
    id: 15,
    title: "+9.500 PELICULAS A NIVEL GLOBAL POR AÑO",
    text: "SIN CONTAR: series, publicidad, branded content, eventos, fashion productions,<br/>streaming content.",
    variant: "titulo-grande",
    backgroundMedia: "11.png",
    overlayOpacity: 45
  },
  {
    id: 16,
    title: "MILLONES DE LOCACIONES Y DECISIONES<br/>OPERACIONALES CADA AÑO.",
    text: "Eso significa:",
    variant: "texto-arriba",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 17,
    title: "MERCADO FRAGMENTADO",
    text: "Hoy las búsquedas de locaciones operan de forma fragmentada, combinando<br/>scouts, referencias visuales, contactos y análisis humanos en procesos que pueden<br/>llevar semanas o incluso meses para encontrar la locación adecuada.",
    variant: "titulo-chico",
    backgroundMedia: "13.png",
    overlayOpacity: 45
  },
  {
    id: 18,
    title: "EL PROBLEMA REAL",
    text: "<strong>La industria NO tiene un sistema global de decisión estandarizado.</strong><br/>Tiene: imágenes, bases dispersas, scouts, intuición, contactos, y mucha fricción.",
    variant: "titulo-chico",
    backgroundMedia: "14.mp4",
    overlayOpacity: 45
  },
  {
    id: 19,
    title: "NINGUNA ORGANIZA LA DECISIÓN OPERACIONAL COMPLETA.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "15.mp4",
    overlayOpacity: 45
  },
  {
    id: 20,
    title: "THE IDEA",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 21,
    title: "PRESENTAMOS:",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 22,
    text: "",
    variant: "portada",
    backgroundMedia: "22.mp4",
    overlayOpacity: 45
  },
  {
    id: 23,
    title: "DECISION SYSTEM FOR FILM PRODUCTION",
    text: "Un sistema de inteligencia de decisión para producción cinematográfica que combina la comprensión contextual de la IA con el rigor del software de precisión, diseñado para encontrar la mejor locación para cada escena, cruzando lo que la producción busca visualmente con lo que realmente necesita para rodar: permisos, costos, logística, clima, luz e infraestructura.",
    variant: "titulo-chico",
    backgroundMedia: "23.png",
    overlayOpacity: 45,
    align: "right",
    maxWidth: "780px"
  },
  {
    id: 24,
    title: "NO ES UN PORTAL.<br/>NO ES UN DASHBOARD.<br/>NO ES UNA HERRAMIENTA DE BÚSQUEDA.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0,
    align: "center-left"
  },
  {
    id: 25,
    title: "",
    text: "Puedes iniciar un análisis describiendo una escena, conversando con el agente, subiendo una referencia visual o cargando un guion técnico.",
    variant: "texto",
    backgroundMedia: "25.png",
    overlayOpacity: 35,
    align: "left",
    maxWidth: "600px"
  },
  {
    id: 26,
    title: "",
    text: "Luego, el <strong>Production Strategy Vector</strong> transforma las necesidades de la escena en un perfil inteligente para comparar locaciones por viabilidad, eficiencia y compatibilidad real de producción.",
    variant: "texto",
    backgroundMedia: "26.png",
    overlayOpacity: 35,
    align: "right",
    maxWidth: "600px"
  },
  {
    id: 27,
    title: "",
    text: "GEOLAND organiza los resultados en cards inteligentes, rankeadas por G-Score y alineadas con las prioridades reales de producción.",
    variant: "texto",
    backgroundMedia: "27.png",
    overlayOpacity: 35,
    align: "left",
    maxWidth: "600px"
  },
  {
    id: 28,
    title: "",
    text: "Al seleccionar una card, GEOLAND abre un dashboard profundo con el análisis completo de la locación: G-Score, costes, luz, permisos, riesgos, viabilidad y próximos pasos.",
    variant: "texto",
    backgroundMedia: "28.png",
    overlayOpacity: 35,
    align: "right",
    maxWidth: "660px"
  },
  {
    id: 29,
    title: "",
    text: "<strong>Mis Proyectos</strong> centraliza escenas, búsquedas y locaciones guardadas en un espacio operativo con avances, permisos, equipo local, logística y próximos pasos.",
    variant: "texto",
    backgroundMedia: "29.png",
    overlayOpacity: 35,
    align: "left",
    maxWidth: "600px"
  },
  {
    id: 30,
    title: "",
    text: "Incluso, puedes activar una locación y contactar desde GEOLAND a profesionales verificados para validarla, prepararla y convertirla en una opción lista para rodar.",
    variant: "texto",
    backgroundMedia: "30.png",
    overlayOpacity: 35,
    align: "right",
    maxWidth: "600px"
  },
  {
    id: 31,
    title: "PROOF",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 32,
    title: "La locación linda que arruina el rodaje.",
    text: "En Praga, la locación con 97% de match visual parecía ideal, pero tenía sombras críticas, alto flujo turístico y fricción logística. GEOLAND recomendó una alternativa con 91% de similitud visual: apenas inferior visualmente, pero operacionalmente muy superior.",
    variant: "titulo-cuerpo-bold",
    backgroundMedia: "32.mp4",
    overlayOpacity: 45,
    align: "left",
    maxWidth: "650px"
  },
  {
    id: 33,
    title: "Continuidad visual entre ciudades distintas.",
    text: "El guion pedía París, Viena y una ciudad alpina, pero GEOLAND detectó que varias escenas podían resolverse en un único cluster operativo en Budapest, manteniendo continuidad visual europea y reduciendo traslados, permisos y complejidad.",
    variant: "titulo-cuerpo-bold",
    backgroundMedia: "33.mp4",
    overlayOpacity: 45,
    align: "right",
    maxWidth: "650px"
  },
  {
    id: 34,
    title: "El rebate que no conviene.",
    text: "Una ciudad ofrecía el mayor incentivo fiscal, pero GEOLAND detectó que permisos, distancias y falta de proveedores reducían gran parte del ahorro. Recomendó otra con menor incentivo, pero mejor infraestructura y logística: fiscalmente parecía peor; económicamente era mejor.",
    variant: "titulo-cuerpo-bold",
    backgroundMedia: "34.mp4",
    overlayOpacity: 45,
    align: "left",
    maxWidth: "650px"
  },
  {
    id: 35,
    title: "CADA OPERACIÓN ALIMENTA Y MEJORA EL SISTEMA",
    text: "Combinando: Workflows operacionales / Operational Memory / Scoring propietario / Datasets contextuales / Orquestación vertical especializada / Lógica de producción / Inteligencia acumulativa.",
    variant: "titulo-grande",
    backgroundMedia: "35.png",
    overlayOpacity: 45,
    align: "right",
    maxWidth: "650px"
  },
  {
    id: 36,
    title: "FUENTES DE DATOS DEL SISTEMA",
    text: "Toda esta información se cruza con el PSV para recomendar qué locación conviene,<br/>por qué, con qué riesgos, a qué coste y cómo hacerla filmable.",
    variant: "diagrama-fuentes",
    backgroundMedia: "",
    overlayOpacity: 70
  },
  {
    id: 37,
    title: "MARKET",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 38,
    title: "TAMAÑO DE MERCADO",
    text: "TAM | 300.000 COMPAÑÍAS | TOTAL ADDRESSABLE MARKET - Mercado total potencial global ;; SAM | 60.000 COMPAÑÍAS | SERVICEABLE AVAILABLE MARKET - Compañías que realizan producciones de forma recurrente, gestionan múltiples locaciones y enfrentan decisiones complejas de producción, logistica, permisos, costes y viabilidad ;; SOM | 2.000 - 4.000 COMPAÑÍAS (3% al 6.7% del SAM) | SERVICEABLE OBTAINABLE MARKET - Mercado capturable realista",
    variant: "market",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 39,
    title: "PRICING",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 40,
    title: "",
    text: "",
    variant: "pricing",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 41,
    title: "LAS SOLUCIONES ACTUALES<br/>RESUELVEN PARTES AISLADAS DEL PROCESO",
    text: "ShotDeck | Solo referencias visuales ;; Set Scouter | Marketplace de locaciones ;; StudioBinder | Planificacion de produccion ;; Wrapbook | Payroll y operaciones ;; Reel-Scout | Solo bases de locaciones ;; Production HUB | Directorio industrial",
    variant: "soluciones-grid",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 42,
    title: "NINGUNA ORGANIZA LA DECISIÓN OPERACIONAL COMPLETA.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 43,
    title: "BUILT TO SCALE.<br/>ONE SYSTEM. MULTIPLE INDUSTRIES.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 44,
    title: "80% UNIVERSAL. 20% ADAPTABLE.",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "Para la 41.mp4",
    overlayOpacity: 45
  },
  {
    id: 45,
    title: "GEOLAND ES PARA PRODUCTION FILM.",
    text: "Pero el motor central es común para otras verticales en un futuro: scoring,<br/>agentes, variables, contexto, análisis comparativo, visión computacional,<br/>verificación y explicación.",
    variant: "titulo-grande",
    backgroundMedia: "43.mp4",
    overlayOpacity: 45
  },
  {
    id: 46,
    title: "",
    text: "Pudiendo más adelante, adaptar el contexto operacional.",
    variant: "texto",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 47,
    title: "REAL ESTATE AND FARMLAND",
    text: "ROI / IRR / NOI, RIESGO Y CONTEXTO MACRO, REGULACIÓN Y FISCALIDAD, COMPARABLES GLOBALES, DEMANDA Y CRECIMIENTO, UBICACIÓN Y CONECTIVIDAD, COSTES OPERATIVOS, VISIÓN COMPUTACIONAL DEL ACTIVO, ESTRATEGIAS DE INVERSIÓN, TIMING DE MERCADO.",
    variant: "diagrama-expansion",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 48,
    title: "AVIATION & AERONAUTICS",
    text: "RUTAS Y SLOTS, CLIMA Y CONDICIONES OPERATIVAS, COMBUSTIBLE Y COSTES, MANTENIMIENTO Y DISPONIBILIDAD, ASIGNACIÓN DE TRIPULACIÓN, RIESGO OPERATIVO, TIMING Y EFICIENCIA, COORDINACIÓN MULTI-SISTEMA, DISPONIBILIDAD DE ASSETS, OPTIMIZACIÓN OPERACIONAL.",
    variant: "diagrama-expansion",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 49,
    title: "LOGISTICS & SUPPLY CHAIN",
    text: "RUTAS Y TIEMPOS OPERATIVOS, COSTES LOGÍSTICOS, CONGESTIÓN Y CAPACIDAD, CLIMA Y RIESGO OPERATIVO, RIESGO GEOPOLÍTICO, PUERTOS - HUBS Y NODOS CRÍTICOS, DISTRIBUCIÓN DE ASSETS, SUPPLY CHAIN FRAGMENTATION, OPTIMIZACIÓN MULTI-VARIABLE, EFICIENCIA OPERACIONAL.",
    variant: "diagrama-expansion",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 50,
    title: "RETAIL EXPANSION",
    text: "DEMOGRAFÍA Y CONSUMO, TRÁFICO Y MOVILIDAD, COMPETENCIA Y SATURACIÓN, COSTES INMOBILIARIOS, POTENCIAL COMERCIAL, CRECIMIENTO URBANO, INGRESOS Y CONTEXTO ECONÓMICO, ACCESIBILIDAD Y CONECTIVIDAD, RIESGO OPERATIVO, EXPANSIÓN MULTI-CIUDAD.",
    variant: "diagrama-expansion",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 51,
    title: "EL PATRÓN ES SIEMPRE EL MISMO:",
    text: "Datos fragmentados -> análisis complejo -> decisión clara.",
    variant: "titulo-grande",
    backgroundMedia: "49.mp4",
    overlayOpacity: 45
  },
  {
    id: 52,
    title: "PROYECCIONES",
    text: "",
    variant: "proyecciones-hud",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 53,
    title: "TEAM",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 54,
    title: "",
    text: `<div class='flex flex-col md:flex-row print:flex-row gap-16 justify-center items-start w-full max-w-[1200px] mx-auto mt-4'><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><img src='team/pato_transparent.png' class='w-48 h-48 md:w-64 md:h-64 print:w-64 print:h-64 object-cover object-top mb-8 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /><h3 style="font-family:'League Gothic',sans-serif;font-size:1.9rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Patricio Lettieri</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs md:text-sm uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder - Data Infrastucture</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm md:text-base leading-relaxed font-light text-center max-w-[420px] mx-auto'>Especialista en data, analítica e IA aplicada, con más de 15 años de experiencia en marketing analytics y operaciones estratégicas para marcas como John Deere y Porsche. En GEOLAND lidera la arquitectura de datos y la transformación de información compleja en decisiones accionables.</p></div><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><div class='scale-[1.15] origin-top print:scale-100 mb-8'><img src='team/pepe_transparent.png' class='w-48 h-48 md:w-64 md:h-64 print:w-64 print:h-64 object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.9rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>José Luis Curcio</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs md:text-sm uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder, Product vision & Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm md:text-base leading-relaxed font-light text-center max-w-[420px] mx-auto'>Publicista, estratega y director creativo con más de 18 años de experiencia para marcas globales como Coca-Cola, Ford y Samsung, y trayectoria directa en campañas, producciones y rodajes internacionales. Esa experiencia dio origen a GEOLAND; hoy lidera la visión de producto y estrategia.</p></div></div>`,
    backgroundMedia: "",
    overlayOpacity: 0,
    align: "center",
    maxWidth: "1400px"
  },
  {
    id: 55,
    title: "",
    text: `<div class='flex flex-col md:flex-row print:flex-row gap-16 justify-center items-start w-full max-w-[1200px] mx-auto mt-4'><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><div class='scale-[1.25] origin-top print:scale-100 mb-8'><img src='team/juancarlos_transparent.png' class='w-48 h-48 md:w-64 md:h-64 print:w-64 print:h-64 object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /></div><h3 style="font-family:'League Gothic',sans-serif;font-size:1.9rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Juan Carlos Casalderrey</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs md:text-sm uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder & Engineering Strategy</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm md:text-base leading-relaxed font-light text-center max-w-[420px] mx-auto'>Arquitecto de sistemas y co-founder de Mythology Labs, con experiencia en desarrollo, consultoría técnica y plataformas escalables. En GEOLAND aporta criterio técnico, arquitectura operativa y visión de ingeniería para construir una plataforma robusta y orientada a negocio.</p></div><div class='flex flex-col items-center text-center w-full md:w-1/2 print:w-1/2'><img src='team/damian_transparent.png' class='w-48 h-48 md:w-64 md:h-64 print:w-64 print:h-64 object-cover object-top mb-8 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] print:[mask-image:none]' /><h3 style="font-family:'League Gothic',sans-serif;font-size:1.9rem;letter-spacing:0.12em;" class='text-white mb-2 uppercase'>Damián Scheck</h3><h4 class='text-geoland-blue tracking-[0.2em] text-xs md:text-sm uppercase mb-4' style="font-family:'Arimo',sans-serif;">Co-Founder & CTO</h4><p style="font-family:'Arimo',sans-serif;" class='text-white/70 text-sm md:text-base leading-relaxed font-light text-center max-w-[420px] mx-auto'>Analista de sistemas, desarrollador de software y CTO de Mythology Labs. En GEOLAND lidera la arquitectura técnica, la calidad del código y el desarrollo de una plataforma robusta, escalable y preparada para crecer con estándares profesionales de ingeniería.</p></div></div>`,
    backgroundMedia: "",
    overlayOpacity: 0,
    align: "center",
    maxWidth: "1400px"
  },
  {
    id: 56,
    title: "VALIDACIÓN INICIAL",
    text: "",
    variant: "validation-hud",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 57,
    title: "ASESORES & EARLY USERS",
    text: "Andy Hosman | Director | Luky Monday - US & LATAM / Go East Creative - Middle East & Asia / Hungry Man - Brasil / Oriental Films - U.S, LATAM, Spain. ;; Nico Bottero | Director & Producer | Los Modernos Films - Traviamento Films / Netflix - Coordinador de Arte. ;; Oliver Garland | Director & Founder | Olga Lee - Producción audiovisual destacada con presencia global, laureada a nivel internacional - U.S, LATAM, Europe. ;; Paulo Carneiro | Director & Execitive Producer | Máster por la ESTC de Lisboa y HEAD de Ginebra. En 2018 fundó Bam Bam Cinema y dirigió Bostofrio, premiada y exhibida en más de 40 festivales. Sus trabajos posteriores incluyen Périphérique Nord y A savana e a Montanha (2024), también premiada. ;; Fede Cetta | Executive Producer & Founder | El Cielo Cine - Reconocida por su proyección internacional, sus producciones han participado en festivales de Cannes, Visions du Réel, BAFICI y Ventana Sur. La compañía desarrolla largometrajes, documentales y producciones internacionales premiadas. ;; Natalia Azzato | Producer | El Camino Films - Productora audiovisual con operaciones en Uruguay, Argentina, Brasil y Chile, especializada en brindar soporte de producción en Sudamérica para proyectos internacionales, especialmente de Norteamérica y Europa.",
    variant: "advisors",
    backgroundMedia: "53.png",
    overlayOpacity: 45
  },
  {
    id: 58,
    title: "THE FUTURE BELONGS TO BETTER DECISIONS",
    text: "",
    variant: "titulo-chico",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 59,
    title: "ROUND",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  },
  {
    id: 60,
    title: "RONDA EARLY SEED",
    text: `<div class="flex flex-row gap-12 items-stretch w-full max-w-[1200px] mx-auto mt-6"><div class="flex flex-col justify-between w-1/2 gap-6"><div class="grid grid-cols-2 gap-6 h-full"><div class="flex flex-col justify-center items-center p-6 bg-black/70 border border-white/10 rounded-xl text-center backdrop-blur-md"><span class="text-white text-5xl md:text-6xl font-extralight tracking-tight font-jost mb-2">€295K</span><span class="text-geoland-blue text-[10px] tracking-[0.2em] font-medium uppercase mb-1" style="font-family:'Arimo',sans-serif;">Ronda Early Seed</span></div><div class="flex flex-col justify-center items-center p-6 bg-black/70 border border-white/10 rounded-xl text-center backdrop-blur-md"><span class="text-white text-5xl md:text-6xl font-extralight tracking-tight font-jost mb-2">15%</span><span class="text-geoland-blue text-[10px] tracking-[0.2em] font-medium uppercase mb-1" style="font-family:'Arimo',sans-serif;">Equity Ofrecido</span></div><div class="flex flex-col justify-center items-center p-6 bg-black/70 border border-white/10 rounded-xl text-center backdrop-blur-md"><span class="text-white text-5xl md:text-6xl font-extralight tracking-tight font-jost mb-2">€1.7M</span><span class="text-geoland-blue text-[10px] tracking-[0.2em] font-medium uppercase mb-1" style="font-family:'Arimo',sans-serif;">Val. Pre-Money</span></div><div class="flex flex-col justify-center items-center p-6 bg-black/70 border border-white/10 rounded-xl text-center backdrop-blur-md"><span class="text-white text-5xl md:text-6xl font-extralight tracking-tight font-jost mb-2">12m</span><span class="text-geoland-blue text-[10px] tracking-[0.2em] font-medium uppercase mb-1" style="font-family:'Arimo',sans-serif;">Runway Garantizado</span></div></div></div><div class="flex flex-col justify-center w-1/2 p-8 bg-black/70 border border-white/10 rounded-xl backdrop-blur-md text-left"><h3 class="text-white font-jost font-bold text-sm tracking-[0.25em] uppercase mb-6 border-b border-white/10 pb-4 text-left">Uso de Fondos</h3><ul class="space-y-5 text-left text-white/70 font-light text-sm" style="font-family:'Arimo',sans-serif;"><li class="flex items-start gap-3"><span class="text-geoland-blue mt-0.5 font-bold">—</span><span><strong>Equipo</strong> (4 founders full-time)</span></li><li class="flex items-start gap-3"><span class="text-geoland-blue mt-0.5 font-bold">—</span><span><strong>Red local</strong> de scouts, fixers y location managers verificados</span></li><li class="flex items-start gap-3"><span class="text-geoland-blue mt-0.5 font-bold">—</span><span><strong>Dataset de locaciones</strong> e infraestructura tecnológica</span></li><li class="flex items-start gap-3"><span class="text-geoland-blue mt-0.5 font-bold">—</span><span><strong>Pre-lanzamiento</strong> comercial</span></li><li class="flex items-start gap-3"><span class="text-geoland-blue mt-0.5 font-bold">—</span><span><strong>Legal & contable</strong></span></li></ul></div></div>`,
    variant: "titulo-chico",
    backgroundMedia: "round.png",
    overlayOpacity: 45,
    align: "center-left",
    maxWidth: "1200px"
  },
  {
    id: 61,
    title: "GEOLAND",
    text: "Decision System for Film Production",
    variant: "portada81",
    backgroundMedia: "portada2.mp4",
    overlayOpacity: 45
  },{
    id: 73,
    title: "LET'S TALK",
    text: "",
    variant: "titulo-grande",
    backgroundMedia: "",
    overlayOpacity: 0
  }
];
