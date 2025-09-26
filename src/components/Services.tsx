"use client";

export default function Pricing() {
  const plans = [
    {
      title: "Landing Page",
      price: "$100",
      features: ["1 página", "Diseño moderno", "Optimización básica"],
    },
    {
      title: "Ecommerce",
      price: "$500",
      features: ["Catálogo de productos", "Carrito y pagos", "SEO inicial"],
    },
  ];

  return (
    <section className="bg-[#0E0E10] text-[#F3F3F3] py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Planes y Precios</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-2xl p-8 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((f, j) => (
                <li key={j} className="text-gray-300">
                  • {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
