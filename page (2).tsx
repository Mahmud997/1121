export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-brand-500 to-brand-700 p-8 text-center text-white">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
            Демо-пригласительная
          </p>
          <h1 className="text-3xl font-serif mb-1">Арма́н & Аружа́н</h1>
          <p className="opacity-90">25 октября 2026</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">Место проведения</p>
            <p className="font-medium text-lg">Ресторан «Firdavs»</p>
            <p className="text-gray-600 text-sm">г. Шымкент</p>
          </div>

          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              2GIS
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              Яндекс
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              Google
            </button>
          </div>

          <div className="border-t pt-6">
            <p className="text-center text-gray-500 mb-4">Подтвердите присутствие</p>
            <div className="space-y-3">
              <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-medium">
                Приду один
              </button>
              <button className="w-full py-3 bg-brand-100 text-brand-800 rounded-xl font-medium">
                Приду с супругой / семьёй
              </button>
              <button className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-medium">
                К сожалению, не смогу
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 pt-4">
            Это демо-версия. Создайте свою пригласительную за 5 минут.
          </p>
        </div>
      </div>
    </main>
  );
}
