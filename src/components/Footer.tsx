"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        {/* Marca */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Vanguard. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-blue-600">
            Privacidad
          </a>
          <a href="/terms" className="hover:text-blue-600">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
