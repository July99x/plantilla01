"use client";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Diseño Web Profesional en{" "}
          <span className="text-blue-600">Argentina</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Creamos páginas modernas, rápidas y optimizadas para impulsar tu
          negocio online.
        </p>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Empezar ahora
          </a>
          <a
            href="/portfolio"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 transition"
          >
            Ver trabajos
          </a>
        </div>
      </div>
    </section>
  );
}
