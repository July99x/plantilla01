"use client";
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
  return (
    <section className="bg-[#0E0E10]">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F3F3F3] leading-tight">
          Diseño Web Profesional en{" "}
          <span className="text-[#A0A0A0]">Argentina</span>
        </h1>
{/* Subtítulo animado */}
<TypeAnimation
  sequence={[
    'Creamos páginas modernas, rápidas y optimizadas para impulsar tu negocio online.', 
    2000, // espera 2s
    'Creamos experiencias digitales.', 
    2000, // espera 2s
    'Pon Tu Empresa a la vista de todos', 
    5000, // 👈 pausa más larga en el último texto
  ]}
  speed={50} // velocidad de tipeo (más natural que 12ms)
  deletionSpeed={70} // velocidad de borrado
  wrapper="p"
  className="mt-6 text-lg font-bold md:text-xl text-[#A0A0A0] max-w-2xl mx-auto"
  cursor={true}
  repeat={Infinity}
/>



        {/* Botones de acción */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="px-10 py-3 bg-[#00D4FF] text-[#F3F3F3] rounded-lg font-bold shadow hover:bg-[#B042FF] transition [text-shadow:_0_0_20px_#001]"
          >
            Empezar ahora
          </a>
          <a
  href="/portfolio"
  className="px-6 py-3 border border-gray-500 rounded-xl font-semibold text-[#F3F3F3] 
             hover:bg-[#00D4FF] hover:text-black hover:border-transparent 
             shadow-md hover:shadow-lg transition-all duration-300"
>
  Explorar nuestros trabajos
</a>

        </div>
      </div>
    </section>
  );
}
