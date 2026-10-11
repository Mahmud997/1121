export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Мои пригласительные</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-400 transition cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-2xl mb-3">
            +
          </div>
          <p className="font-medium">Создать новую</p>
          <p className="text-sm text-gray-500 mt-1">Займёт 5–7 минут</p>
        </div>
      </div>
    </div>
  );
}
