"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const plans = [
    {
      title: "Landing Page",
      price: "$150 USD",
      features: [
        { text: "1 página", included: true },
        { text: "Diseño moderno", included: true },
        { text: "Optimización básica", included: true },
        { text: "Ecommerce", included: false },
      ],
    },
    {
      title: "Ecommerce",
      price: "$350 USD",
      features: [
        { text: "Catálogo de productos", included: true },
        { text: "Carrito de compras", included: true },
        {
          text: "Integración con Pagos online (Mercado Pago o Stripe)",
          included: true,
        },
        { text: "SEO inicial", included: true },
        {
          text: "Soporte básico vía mail/WhatsApp en horario laboral",
          included: true,
        },
        { text: "Panel de Admin", included: true },
        { text: "Registro de Dominio Gratis el primer año", included: true },
      ],
    },
    {
      title: "Growth",
      price: "$500 USD",
      features: [
        { text: "Todo lo que incluye Ecommerce", included: true },
        { text: "Integración con APIs estándar (Google Maps, WhatsApp, etc.)", included: true },
        { text: "Integración con analytics avanzados (GA4, Hotjar, Meta Pixel)", included: true },
        { text: "Optimización de velocidad (Core Web Vitals)", included: true },
        { text: "Soporte extendido", included: true },
      ],
    },
    {
      title: "Premium",
      price: "$800 USD",
      features: [
        { text: "Todo lo que incluye Growth", included: true },
        { text: "Configuración de automatizaciones simples (ej: lead → CRM → correo)", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Consultoría mensual", included: true },
      ],
    },
    {
      title: "Enterprise",
      price: "A tu medida",
      features: [
        { text: "Todo lo que incluye Premium", included: true },
        { text: "Soporte dedicado", included: true },
        { text: "Integración con APIs avanzadas", included: true },
        { text: "Capacitación al equipo", included: true },
        { text: "Implementación de Automatizaciones con IA", included: true },
        { text: "Marketplace multi-vendedor", included: true },
        { text: "Integraciones con ERPs / sistemas contables", included: true },
        { text: "Automatizaciones con IA (chatbots, análisis de datos, emails automáticos)", included: true },
      ],
    },
  ];

  return (
    <section className="bg-[#0E0E10] text-[#F3F3F3] py-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Planes y Precios
      </h2>

      {/* Slider horizontal */}
      <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 snap-x snap-mandatory">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="min-w-[300px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px] 
                         bg-[#16161A] border border-gray-700 rounded-2xl p-8 
                         shadow-lg hover:shadow-xl transition flex-shrink-0 snap-start"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {f.included ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 text-red-500" />
                    )}
                    <span
                      className={`${
                        f.included
                          ? "text-gray-200"
                          : "text-gray-500 line-through"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Elegir plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
