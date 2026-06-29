import React from 'react';
import { motion } from 'framer-motion';

const F = {
  gothic: "'League Gothic', sans-serif",
  arimo:  "'Arimo', sans-serif",
  white:  "#F7F6ED",
  dim:    "rgba(247,246,237,0.52)",
  border: "rgba(247,246,237,0.08)",
  gold:   "#eab308" // Amber/Gold
};

const ProyeccionesHud: React.FC = () => {
  const years = [
    {
      year: 1,
      phase: "HOY / EARLY SEED",
      arr: "€270K",
      clients: "40 clientes",
      acv: "ACV €6.8K*",
      arrowLabel: "×5",
      highlighted: false,
    },
    {
      year: 2,
      phase: "CRECIMIENTO",
      arr: "€1.35M",
      clients: "155 clientes",
      acv: "ACV €8.2K*",
      arrowLabel: "×4",
      highlighted: false,
    },
    {
      year: 3,
      phase: "ESCALADO",
      arr: "€5.4M",
      clients: "500 clientes",
      acv: "ACV €9.5K*",
      arrowLabel: "×2.2",
      highlighted: false,
    },
    {
      year: 4,
      phase: "EXPANSIÓN",
      arr: "€12M",
      clients: "1.200 clientes",
      acv: "ACV €10.0K*",
      arrowLabel: "×2.5",
      highlighted: false,
    },
    {
      year: 5,
      phase: "ESCALA",
      arr: "€30M",
      clients: "3.000 clientes",
      acv: "ACV €10.0K*",
      arrowLabel: "",
      highlighted: true, // Gold highlight
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black p-8 font-jost text-white relative select-none">
      {/* Top Title & Banner */}
      <div className="w-full max-w-[1250px] flex flex-col items-start gap-4 mb-6 mt-1">
        <div className="text-left">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-white/40 uppercase mb-1 block" style={{ fontFamily: F.arimo }}>
            ROADMAP DE CRECIMIENTO
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-light uppercase tracking-wide leading-none" style={{ fontFamily: F.gothic }}>
            De hoy al crecimiento sostenible
          </h2>
        </div>

        {/* Top Banner Row */}
        <div className="w-full flex items-center justify-between p-3.5 bg-black/60 border border-white/10 rounded-xl text-[10px] md:text-xs text-white/60 tracking-wider font-light backdrop-blur-md" style={{ fontFamily: F.arimo }}>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-semibold">CON €295K</span>
            <span className="text-white/20">→</span>
            <span>12 MESES DE RUNWAY</span>
            <span className="text-white/20">→</span>
            <span>40 CLIENTES PAGANDO</span>
            <span className="text-white/20">→</span>
            <span className="text-amber-500 font-semibold">€270K ARR</span>
            <span className="text-white/20">→</span>
            <span className="text-white font-medium">PREPARADOS PARA LA SIGUIENTE RONDA</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full max-w-[1250px] flex items-end justify-between gap-2 md:gap-4 h-[240px] mb-8 relative">
        {years.map((item, idx) => (
          <React.Fragment key={item.year}>
            {/* Column Card */}
            <div className="flex-1 flex flex-col justify-end items-center h-full relative">
              {/* Column Label above the bar */}
              <span className={`text-[9px] md:text-[10px] tracking-[0.15em] font-light mb-1 uppercase ${item.highlighted ? 'text-white font-medium' : 'text-white/40'}`} style={{ fontFamily: F.arimo }}>
                {item.phase}
              </span>

              {/* Bar and ARR */}
              <div className="w-full flex flex-col items-center justify-end group">
                <span className="text-xl md:text-2xl font-bold tracking-wider mb-1.5 text-white" style={{ fontFamily: F.gothic }}>
                  {item.arr}
                </span>
                
                {/* The Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: item.year === 1 ? 25 : item.year === 2 ? 55 : item.year === 3 ? 100 : item.year === 4 ? 160 : 210 }}
                  transition={{ duration: 0.8, delay: 0.05 * idx, ease: "easeOut" }}
                  className={`w-full rounded-t transition-all duration-300 ${
                    item.highlighted 
                      ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)]' 
                      : 'bg-white/35 border border-white/5 group-hover:bg-white/45'
                  }`}
                />
              </div>

              {/* Bottom Metadata */}
              <div className="mt-3 text-center flex flex-col space-y-0.5">
                <span className={`text-[11px] uppercase tracking-widest ${item.highlighted ? 'text-white font-bold' : 'text-white/80'}`} style={{ fontFamily: F.arimo }}>
                  AÑO {item.year}
                </span>
                <span className="text-[9px] md:text-[10px] text-white/50 font-light" style={{ fontFamily: F.arimo }}>{item.clients}</span>
                <span className="text-[9px] md:text-[10px] text-white/35 font-light" style={{ fontFamily: F.arimo }}>{item.acv}</span>
              </div>
            </div>

            {/* Arrow between columns */}
            {item.arrowLabel && (
              <div className="flex flex-col justify-center items-center pb-14 h-full shrink-0">
                <div className="flex flex-col items-center opacity-25">
                  <span className="text-[8px] font-medium text-white/70 tracking-tighter mb-0.5" style={{ fontFamily: F.arimo }}>{item.arrowLabel}</span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Grid of HUD Cards */}
      <div className="w-full max-w-[1250px] grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-5 mb-4">
        {/* Card 1: CON €295K FINANCIAMOS */}
        <div className="bg-black/70 border border-white/10 rounded-xl p-5 backdrop-blur-md flex flex-col text-left">
          <h3 className="text-white font-jost font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 border-b border-white/10 pb-2 text-left">
            CON €295K FINANCIAMOS:
          </h3>
          <ul className="space-y-3.5 text-[10px] md:text-xs text-white/70 font-light" style={{ fontFamily: F.arimo }}>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Lanzamiento comercial</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Incorporación de más ciudades</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
              </svg>
              <span>40 productoras de pago</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>€270K ARR</span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a7 7 0 100-14 7 7 0 000 14zm0 0v6M8 21h8" />
              </svg>
              <span>Preparados para la siguiente ronda</span>
            </li>
          </ul>
        </div>

        {/* Card 2: ¿POR QUÉ AHORA? */}
        <div className="bg-black/70 border border-white/10 rounded-xl p-5 backdrop-blur-md flex flex-col text-left">
          <h3 className="text-white font-jost font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 border-b border-white/10 pb-2 text-left">
            ¿POR QUÉ AHORA?
          </h3>
          <ul className="space-y-3.5 text-[10px] md:text-xs text-white/70 font-light" style={{ fontFamily: F.arimo }}>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">✓</span>
              <span>Producto validado con productoras líderes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">✓</span>
              <span>Primeros clientes de pago y tracción inicial.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">✓</span>
              <span>Capital destinado a acelerar el go-to-market y construir liderazgo.</span>
            </li>
          </ul>
        </div>

        {/* Card 3: EVOLUCIÓN DEL MIX DE PLANES */}
        <div className="bg-black/70 border border-white/10 rounded-xl p-5 backdrop-blur-md flex flex-col text-left">
          <h3 className="text-white font-jost font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 border-b border-white/10 pb-2 text-left flex justify-between">
            <span>EVOLUCIÓN DEL MIX DE PLANES**</span>
            <span className="text-white/40 tracking-normal text-[9px] font-normal normal-case">AÑO 1 → AÑO 5</span>
          </h3>
          
          <div className="space-y-2.5 text-[10px] md:text-xs" style={{ fontFamily: F.arimo }}>
            {/* Row 1: On-Demand */}
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-white/70 font-light">
                <span>On-Demand</span>
                <span className="font-semibold text-white/90">75% → 45%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                <div className="bg-white/80 h-full" style={{ width: '45%' }} />
              </div>
            </div>

            {/* Row 2: Production Hub */}
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-white/70 font-light">
                <span>Production Hub</span>
                <span className="font-semibold text-white/90">23% → 42%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                <div className="bg-white/80 h-full" style={{ width: '42%' }} />
              </div>
            </div>

            {/* Row 3: Enterprise */}
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-white/70 font-light">
                <span>Enterprise</span>
                <span className="font-semibold text-white/90">2% → 13%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                <div className="bg-white/80 h-full" style={{ width: '13%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Footnote */}
      <div className="w-full max-w-[1250px] text-left text-[9px] text-white/30 font-light leading-relaxed select-none" style={{ fontFamily: F.arimo }}>
        <p>
          * El ACV refleja un promedio ponderado del mix de planes (On Demand, Production Hub y Enterprise). Su evolución se explica por un mayor peso de planes avanzados y la expansión del uso en clientes existentes, no por incrementos lineales de precio.
        </p>
        <p className="mt-0.5">
          ** Mayor peso de planes Hub y Enterprise → incremento natural del ACV medio.
        </p>
      </div>
    </div>
  );
};

export default ProyeccionesHud;
