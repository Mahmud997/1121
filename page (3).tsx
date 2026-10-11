export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-900 mb-6">
          Taklif Pro
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Красивые интерактивные пригласительные для тоев, свадеб и семейных
          торжеств. RSVP, карта, музыка, рассадка — всё в одном месте.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/demo"
            className="px-8 py-3 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition"
          >
            Смотреть демо
          </a>
          <a
            href="/login"
            className="px-8 py-3 border-2 border-brand-600 text-brand-600 rounded-full font-medium hover:bg-brand-50 transition"
          >
            Создать пригласительную
          </a>
        </div>
      </div>
    </main>
  );
}
